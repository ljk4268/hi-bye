import { useState, useCallback } from 'react'
// components
import AlertModal from '../components/modal/AlertModal'

const useAlertModal = () => {
  const [isModal, setIsModal] = useState(false)

  const openAlertModal = useCallback(() => {
    setIsModal(!isModal)
  }, [isModal])

  const handleClose = useCallback(() => {
    setIsModal(false)
  }, [])
  const AlertModalComponent = isModal && <AlertModal onClick={handleClose} />

  return { openAlertModal, AlertModalComponent }
}

export default useAlertModal
