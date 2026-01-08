export type WhatsAppLinkOptions = {
  phone: string; // E.164 without "+" e.g. 5584999908241
  text?: string;
};

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
};

/**
 * Returns a WhatsApp link that avoids `api.whatsapp.com` (often blocked by extensions/policies).
 * - Mobile: wa.me
 * - Desktop: web.whatsapp.com
 */
export const buildWhatsAppLink = ({ phone, text }: WhatsAppLinkOptions) => {
  const message = text ? encodeURIComponent(text) : "";

  if (isMobileDevice()) {
    // wa.me supports text param
    return message ? `https://wa.me/${phone}?text=${message}` : `https://wa.me/${phone}`;
  }

  // Desktop web client
  return message
    ? `https://web.whatsapp.com/send?phone=${phone}&text=${message}`
    : `https://web.whatsapp.com/send?phone=${phone}`;
};
