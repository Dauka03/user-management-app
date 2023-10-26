import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function SendedEmailModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"md"}>
      <ModalOverlay />
      <ModalContent style={{ alignItems: "center" }}>
        <ModalCloseButton />
        <ModalHeader>Приглашения отправлено на почту</ModalHeader>
        <ModalFooter>
          <Button
            colorScheme="whatsapp"
            width={"20vw"}
            onClick={onClose} // Close the SendedEmailModal
          >
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SendedEmailModal;
