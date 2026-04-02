import { NextResponse } from "next/server";

import { sendOfferMail } from "@/lib/email";
import { validateOfferPayload, type OfferFormValues } from "@/lib/forms";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as OfferFormValues;
    const errors = validateOfferPayload(data);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Bitte prüfen Sie die eingegebenen Angaben.", fields: errors },
        { status: 400 },
      );
    }

    const result = await sendOfferMail(data);

    if (!result.ok) {
      return NextResponse.json(
        {
          error:
            result.reason === "missing_config"
              ? "Der E-Mail-Versand ist noch nicht konfiguriert. Bitte hinterlegen Sie SMTP-Zugangsdaten oder kontaktieren Sie SwissPro direkt."
              : "Die Offerte-Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut.",
        },
        { status: result.reason === "missing_config" ? 503 : 500 },
      );
    }

    return NextResponse.json({
      message: "Die Offerte-Anfrage wurde erfolgreich übermittelt.",
    });
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage. Bitte versuchen Sie es erneut." },
      { status: 400 },
    );
  }
}
