import { IFarm } from "components/Home/interface";

export interface FarmDetailProps {
  farmData: IFarm;
}

export interface FarmIntroduceProps {
  ownerNotes: string;
}

export interface FarmOwnerInfoProps {
  email: string;
}

export interface FarmRefundPolicyProps {
  refundPolicy: string;
}
