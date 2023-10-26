import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useData } from "../../utils/DataContext";
function EmailModal({ isOpen, onClose, onSendInvitations }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [userData, setUserData] = React.useState({
    email: "",
    permissions: "",
  });
  const { dispatch } = useData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size={"md"}
    >
      <ModalOverlay />
      <ModalContent style={{ alignItems: "center" }}>
        <ModalCloseButton />
        <ModalHeader>Отправьте приглашения</ModalHeader>
        <ModalBody>
          <FormControl>
            <Input
              width={"20vw"}
              ref={initialRef}
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <Input
              width={"20vw"}
              placeholder="Выберите права доступа"
              name="permissions"
              value={userData.permissions}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="whatsapp"
            width={"20vw"}
            onClick={() => {
              onClose(); // Close the EmailModal
              onSendInvitations(); // Open the SendedEmailModal
              const newUser = {
                name: "Имя пользователя", // Задайте имя, как вам нужно
                email: userData.email,
                permissions: userData.permissions.split(","), // Разделите разрешения, если это строка с разделителями
                // Другие поля пользователя
              };

              dispatch({ type: "ADD_USER", payload: newUser });
            }}
          >
            Отправить приглашения
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EmailModal;
