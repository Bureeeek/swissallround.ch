import { NextResponse } from "next/server";

import { sendContactMail } from "@/lib/email";
import { validateContactPayload, type ContactFormValues } from "@/lib/forms";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactFormValues;
    const errors = validateContactPayload(data);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Bitte prüfen Sie die eingegebenen Angaben.", fields: errors },
        { status: 400 },
      );
    }

    const result = await sendContactMail(data);

    if (!result.ok) {
      return NextResponse.json(
        {
          error:
            result.reason === "missing_config"
              ? "Der E-Mail-Versand ist noch nicht konfiguriert. Bitte nutzen Sie vorübergehend Telefon oder direkte E-Mail."
              : "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        },
        { status: result.reason === "missing_config" ? 503 : 500 },
      );
    }

    return NextResponse.json({
      message: "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.",
    });
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage. Bitte versuchen Sie es erneut." },
      { status: 400 },
    );
  }
}
