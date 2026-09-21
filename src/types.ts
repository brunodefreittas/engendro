export type Language = 'pt' | 'en';

export interface ProductItem {
  id: string;
  namePt: string;
  nameEn: string;
  category: string;
  descriptionPt: string;
  descriptionEn: string;
  specs?: string[];
  image: string;
  video: string;
}

export interface ProductCategory {
  id: string;
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  items: ProductItem[];
}
