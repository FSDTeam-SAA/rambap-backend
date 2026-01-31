// Sub-types

export type TLinkItem = {
  title: string;
  icon?: string;
  linkUrl: string; // The actual link
  description?: string; // Optional helper text
};

export type TAccommodation = {
  title?: string;
  subtitle?: string;
  items: TLinkItem[]; // Hotels, Airbnb links
};

export type TCarRental = {
  title?: string;
  subtitle?: string;
  items: TLinkItem[];
};

export type TDressCodeItem = {
  title: string; // e.g., "Formal and Traditional Wear"
  description: string; // e.g., "Dress your best..."
  icon?: string;
};

export type TDressCode = {
  title?: string;
  items: TDressCodeItem[];
  footerNote?: string; // "Please avoid wearing white..."
};

export type TFaqItem = {
  question: string;
  answer: string;
};

export type TGifts = {
  title?: string;
  subtitle?: string;
  description?: string;
};

// Main Interface
export type TGuestInfo = {
  accommodation: TAccommodation;
  carRental: TCarRental;
  dressCode: TDressCode;
  faq: {
    title?: string;
    items: TFaqItem[];
  };
  gifts: TGifts;
};
