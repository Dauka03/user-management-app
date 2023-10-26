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

function DeletedUser({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"md"}>
      <ModalOverlay />
      <ModalContent style={{ alignItems: "center" }}>
        <ModalCloseButton />
        <ModalHeader>Пользователь успешно удален</ModalHeader>
        <ModalFooter>
          <Button colorScheme="whatsapp" width={"20vw"} onClick={onClose}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeletedUser;
