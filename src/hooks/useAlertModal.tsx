import { useState } from "react"
// components
import AlertModal from "../components/modal/AlertModal"

const useAlertModal = () => {
  const [isModal, setIsModal] = useState(false)
  const showAlertModal = () => {
    setIsModal(!isModal)
  }
  const handleClose = () => {
    setIsModal(false);
  };
  const AlertModalComponent = isModal && <AlertModal onClick={handleClose} />;

  return { showAlertModal, AlertModalComponent };
}

export default useAlertModal;