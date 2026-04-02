export type OfferFormValues = {
  service: string;
  propertyType: string;
  size: string;
  timeline: string;
  siteVisit: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;
  address: string;
  description: string;
  privacyAccepted: boolean;
};

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const initialOfferValues: OfferFormValues = {
  service: "",
  propertyType: "",
  size: "",
  timeline: "",
  siteVisit: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  postalCode: "",
  address: "",
  description: "",
  privacyAccepted: false,
};

export const initialContactValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateOfferStep(
  step: number,
  values: OfferFormValues,
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1 && !values.service) {
    errors.service = "Bitte wählen Sie eine Dienstleistung aus.";
  }

  if (step === 2 && !values.propertyType) {
    errors.propertyType = "Bitte wählen Sie den Gebäudetyp aus.";
  }

  if (step === 3 && !values.size) {
    errors.size = "Bitte wählen Sie die ungefähre Fläche aus.";
  }

  if (step === 4 && !values.timeline) {
    errors.timeline = "Bitte wählen Sie den gewünschten Zeitraum aus.";
  }

  if (step === 5 && !values.siteVisit) {
    errors.siteVisit = "Bitte geben Sie an, ob eine Besichtigung möglich ist.";
  }

  if (step === 6) {
    if (!values.firstName.trim()) {
      errors.firstName = "Bitte geben Sie Ihren Vornamen ein.";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Bitte geben Sie Ihren Nachnamen ein.";
    }
    if (!values.email.trim()) {
      errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!isEmail(values.email)) {
      errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    if (!values.phone.trim()) {
      errors.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    }
    if (!values.postalCode.trim()) {
      errors.postalCode = "Bitte geben Sie die PLZ ein.";
    }
    if (!values.address.trim()) {
      errors.address = "Bitte geben Sie die Adresse ein.";
    }
    if (!values.description.trim()) {
      errors.description = "Bitte beschreiben Sie Ihren Auftrag kurz.";
    }
    if (!values.privacyAccepted) {
      errors.privacyAccepted =
        "Bitte bestätigen Sie die Datenschutzbestimmungen.";
    }
  }

  return errors;
}

export function validateOfferPayload(values: OfferFormValues) {
  const allErrors: Record<string, string> = {};

  for (const step of [1, 2, 3, 4, 5, 6]) {
    Object.assign(allErrors, validateOfferStep(step, values));
  }

  return allErrors;
}

export function validateContactPayload(values: ContactFormValues) {
  const errors: Record<string, string> = {};

  if (!values.name.trim()) {
    errors.name = "Bitte geben Sie Ihren Namen ein.";
  }

  if (!values.email.trim()) {
    errors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  } else if (!isEmail(values.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }

  if (!values.message.trim()) {
    errors.message = "Bitte schreiben Sie eine Nachricht.";
  }

  return errors;
}
