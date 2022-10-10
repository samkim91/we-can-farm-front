export interface IFarm {
  address: string;
  adminNotes: string;
  altPhone: string;
  altSnsUrl: string;
  conveniences: string;
  detailAddress: string;
  directions: string;
  email: string;
  hashTags: string;
  id: number;
  images: any[];
  isActive: boolean;
  isReservationCancelable: boolean;
  mainPhone: string;
  mainSnsUrl: string;
  name: string;
  openingHours: any[];
  ownerNotes: string;
  pricing: any[];
  refundPolicy: string;
  themes: any[];
  webUrl: string;
}

export interface FarmCardProps {
  farmId: number;
  name: string;
  image: string;
  ownerNote: string;
}

interface IthemeAttachment {
  id: number;
  name: string;
  size: number;
  type: "IMAGE";
  url: string;
}

export interface ITheme {
  id: number;
  code: string;
  isActive: boolean;
  name: string;
  priority: number;
  themeAttachment: IthemeAttachment;
}
