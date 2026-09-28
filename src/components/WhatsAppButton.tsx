import { whatsappHref } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DPS Project Solutions on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.75A9.25 9.25 0 0 0 4.1 16.8L3 21l4.34-1.07A9.25 9.25 0 1 0 12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.18 8.7c.18-.4.37-.41.54-.41h.46c.15 0 .37.06.56.48.18.42.61 1.49.66 1.6.05.11.09.24.02.38-.07.14-.11.24-.23.36-.11.11-.24.25-.34.33-.11.09-.22.19-.1.39.11.19.5.83 1.07 1.35.73.64 1.34.84 1.53.93.2.08.31.07.42-.07.12-.14.49-.57.62-.77.13-.2.26-.16.44-.09.18.07 1.17.55 1.37.65.2.1.33.15.38.24.05.09.05.53-.12 1.03-.17.5-.98.95-1.35 1-.34.05-.77.07-1.24-.08-.28-.09-.63-.21-1.09-.41a8.56 8.56 0 0 1-2.92-2.57A9.57 9.57 0 0 1 8.54 11c-.36-.62-.38-1.15-.29-1.43.09-.28.4-.87.93-.87Z"
        fill="currentColor"
      />
    </svg>
  );
}
