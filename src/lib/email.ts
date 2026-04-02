import nodemailer from "nodemailer";

import type { ContactFormValues, OfferFormValues } from "@/lib/forms";
import { siteConfig } from "@/lib/site";

type MailResult =
  | { ok: true }
  | {
      ok: false;
      reason: "missing_config" | "send_failed";
    };

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || Number.isNaN(port)) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function getInbox() {
  return process.env.INBOX_EMAIL?.trim() || siteConfig.email;
}

function getFromAddress() {
  return (
    process.env.SMTP_FROM?.trim() ||
    '"SwissPro Website" <no-reply@swisspro-as.ch>'
  );
}

export async function sendOfferMail(data: OfferFormValues): Promise<MailResult> {
  const transport = getTransport();

  if (!transport) {
    return { ok: false, reason: "missing_config" };
  }

  const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`.trim();
  const subject = `Neue Offerte-Anfrage von ${fullName}`;
  const rows = [
    ["Dienstleistung", data.service],
    ["Gebäudetyp", data.propertyType],
    ["Fläche", data.size],
    ["Zeitraum", data.timeline],
    ["Besichtigung vor Ort", data.siteVisit],
    ["Vorname", data.firstName],
    ["Nachname", data.lastName],
    ["E-Mail", data.email],
    ["Telefon", data.phone],
    ["PLZ", data.postalCode],
    ["Adresse", data.address],
    ["Auftragsbeschreibung", data.description],
  ];

  const text = [
    "Neue Offerte-Anfrage über swisspro-as.ch",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 12px;border:1px solid #d8e3f2;font-weight:600;">${escapeHtml(
          label,
        )}</td><td style="padding:10px 12px;border:1px solid #d8e3f2;">${escapeHtml(
          value,
        ).replaceAll("\n", "<br />")}</td></tr>`,
    )
    .join("");

  try {
    await transport.sendMail({
      from: getFromAddress(),
      to: getInbox(),
      replyTo: data.email,
      subject,
      text,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;color:#123054;">
          <h1 style="margin-bottom:16px;font-size:24px;">Neue Offerte-Anfrage</h1>
          <p style="margin-bottom:20px;">Eingegangen über die Website von SwissPro Allround Service GmbH.</p>
          <table style="border-collapse:collapse;width:100%;max-width:780px;">
            ${htmlRows}
          </table>
        </div>
      `,
    });

    return { ok: true };
  } catch {
    return { ok: false, reason: "send_failed" };
  }
}

export async function sendContactMail(
  data: ContactFormValues,
): Promise<MailResult> {
  const transport = getTransport();

  if (!transport) {
    return { ok: false, reason: "missing_config" };
  }

  const subject = `Neue Kontaktanfrage von ${data.name.trim()}`;

  try {
    await transport.sendMail({
      from: getFromAddress(),
      to: getInbox(),
      replyTo: data.email,
      subject,
      text: [
        "Neue Kontaktanfrage über swisspro-as.ch",
        "",
        `Name: ${data.name}`,
        `E-Mail: ${data.email}`,
        `Telefon: ${data.phone || "Nicht angegeben"}`,
        "",
        "Nachricht:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;color:#123054;">
          <h1 style="margin-bottom:16px;font-size:24px;">Neue Kontaktanfrage</h1>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(data.phone || "Nicht angegeben")}</p>
          <p><strong>Nachricht:</strong></p>
          <p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>
        </div>
      `,
    });

    return { ok: true };
  } catch {
    return { ok: false, reason: "send_failed" };
  }
}
