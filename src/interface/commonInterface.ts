export interface IUserInfo {
  name: string
  gender: string
  birth: string
  title: string
  tel: string
  password: string
}

export interface IAlzStepProps {
  userData: IUserInfo
  setUserData: React.Dispatch<React.SetStateAction<IUserInfo>>
  birthRef?: React.RefObject<HTMLInputElement>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}
