export interface IUserInfo {
  name: string;
  gender: string;
  birth: string;
  title: string;
  tel: string;
  password: string;
}

export interface IProtectorInfo {
  protectorName: string;
  patientName: string;
  protectorTel: string;
  patientTel: string;
  protectorPassword: string;
  patientPassword: string;
  relationship: string;
  patientId?: number
}

export interface IAlzStepProps {
  userData: IUserInfo;
  setUserData: React.Dispatch<React.SetStateAction<IUserInfo>>;
  birthRef?: React.RefObject<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}
export interface IProtectorStepProps {
  protectorData: IProtectorInfo;
  setProtectorData: React.Dispatch<React.SetStateAction<IProtectorInfo>>;
  birthRef?: React.RefObject<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export interface IRelationShipModalProps {
  setProtectorData: React.Dispatch<React.SetStateAction<IProtectorInfo>>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IMessage {
  id: number;
  userYn: boolean;
  message: string;
  created_at: number;
}

export interface IButtonProps {
  isDone?: boolean;
  onClick?: () => void;
  text?: string;
}

export interface ISignData {
  name: string;
  phone: string;
  password: string;
  birthDate: string;
  titleCode: string;
  relationCode: string;
  patientId?: number
}

export interface ISignInResponse {
  accountId: number;
  birthDate: string;
  modDate: string;
  name: string;
  password: string;
  patientId: number;
  phone: number;
  regDate: number;
  relationCode: string;
  titleCode: string;
}

export interface ICheckPatient {
  phone: string;
  password: string;
}

export interface IAlertModalProps {
  text1: string
  text2?: string
  buttonText?: string
  onClick: () => void
}