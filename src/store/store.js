import { create } from 'zustand' 
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      userData: {},
      protectorData: {},
      setUserData: (data) => {set({ userData: data })},
      setProtectorData: (data) => set({ protectorData: data }),
    }),
    {
      name: 'user-storage', // 반드시 유니크한 이름을 지어줘야한다.
      getStorage: () => sessionStorage,
    }
  )
)


export default useStore