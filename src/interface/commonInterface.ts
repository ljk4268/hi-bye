
export interface IUserInfo {
  name: string
  gender: string
  birth: string
  title: string
  tel: string
  password: string
}

export interface IProtectorInfo {
  protectorName: string
  patientName: string
  protectorTel: string
  patientTel: string
  protectorPassword: string
  patientPassword: string
  relationship: string
}

export interface IAlzStepProps {
  userData: IUserInfo
  setUserData: React.Dispatch<React.SetStateAction<IUserInfo>>
  birthRef?: React.RefObject<HTMLInputElement>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}
export interface IProtectorStepProps {
  protectorData: IProtectorInfo
  setProtectorData: React.Dispatch<React.SetStateAction<IProtectorInfo>>
  birthRef?: React.RefObject<HTMLInputElement>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}

export interface IRelationShipModalProps {
  setProtectorData: React.Dispatch<React.SetStateAction<IProtectorInfo>>
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IMessage {
  id: number
  userYn: boolean
  message: string
  created_at: number
}

export interface IButtonProps {
  isDone?: boolean;
  onClick?: () => void;
  text?: string;
}
