export type Language = 'zh' | 'en';
export type Region = 'jordan' | 'iraq';

export interface BilingualText {
  zh: string;
  en: string;
}

export interface Product {
  name: BilingualText;
  price: BilingualText;
  points: BilingualText[];
  link?: {
    url: string;
    label: BilingualText;
  };
}

export interface SectionContent {
  title: BilingualText;
  content?: BilingualText | BilingualText[]; // Can be a single paragraph or array of paragraphs/bullet points
  subsections?: SectionContent[];
  products?: Product[];
  table?: {
    headers: BilingualText[];
    rows: BilingualText[][];
  };
}

export interface RegionData {
  regionName: BilingualText;
  sections: SectionContent[];
}

export interface ReferenceLink {
  name: BilingualText;
  description: BilingualText;
  url?: string;
}