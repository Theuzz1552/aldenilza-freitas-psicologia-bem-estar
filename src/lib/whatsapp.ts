export type WhatsAppLinkOptions = {
  phone: string; // E.164 without "+" e.g. 5584999908241
  text?: string;
};

const encodeMessage = (text?: string) => (text ? encodeURIComponent(text) : "");

/**
 * WhatsApp deep link.
 * We use `wa.me` because `api.whatsapp.com` is frequently blocked by browsers/extensions.
 */
export const buildWhatsAppLink = ({ phone, text }: WhatsAppLinkOptions) => {
  const message = encodeMessage(text);
  return message ? `https://wa.me/${phone}?text=${message}` : `https://wa.me/${phone}`;
};
