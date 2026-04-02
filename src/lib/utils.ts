export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "/") {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.swisspro-as.ch";
  return new URL(path, baseUrl).toString();
}

export function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
