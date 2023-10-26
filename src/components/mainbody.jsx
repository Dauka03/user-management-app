import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import SearchButton from "./buttons/searchButton";
import User from "./users/user";
import EmailModal from "./modals/sendEmail";
import React, { useState } from "react";
import SendedEmailModal from "./modals/sendedEmail";
import DrawerSection from "./drawer/drawer";
import "../style/mainbody.css";
import { useData } from "../utils/DataContext";
import UserList from "./users/userList";
function MainBody() {
  const [isEmailModalOpen, setEmailModalOpen] = useState(false);
  const [isSendedEmailModalOpen, setSendedEmailModalOpen] = useState(false);

  const { state, dispatch } = useData();

  console.log(state);

  const openEmailModal = () => {
    setEmailModalOpen(true);
  };

  const closeEmailModal = () => {
    setEmailModalOpen(false);
  };

  const openSendedEmailModal = () => {
    setSendedEmailModalOpen(true);
  };

  const closeSendedEmailModal = () => {
    setSendedEmailModalOpen(false);
  };

  const handleSearch = (results) => {
    dispatch({ type: "UPDATE_SEARCH_RESULTS", payload: results });
  };

  return (
    <>
      <div
        class={"body"}
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          class={"body_section"}
          style={{
            height: "auto",
            width: "80vw",
            backgroundColor: "#F9FAFB",
            borderRadius: "5%",
          }}
        >
          <section style={{ margin: "20px 30px" }}>
            <header
              style={{
                paddingBottom: "20px",
                justifyContent: "space-between",
                display: "flex",
                width: "100%",
              }}
            >
              <section style={{ display: "flex" }}>
                <DrawerSection></DrawerSection>

                <p style={{ fontSize: "26px", fontWeight: 500 }}>Команда</p>
              </section>
              <section className={"searchBlock"}>
                <div class={"searchBlock"}>
                  <SearchButton
                    users={state.data}
                    onSearch={handleSearch}
                    className={"searchBlock"}
                  ></SearchButton>
                  <Button colorScheme="whatsapp" onClick={openEmailModal}>
                    Добавить пользователя
                  </Button>
                </div>
              </section>
            </header>
            <Divider />
            <UserList></UserList>
          </section>
          <EmailModal
            isOpen={isEmailModalOpen}
            onClose={closeEmailModal}
            onSendInvitations={openSendedEmailModal}
          />
          <SendedEmailModal
            isOpen={isSendedEmailModalOpen}
            onClose={closeSendedEmailModal}
          />
        </div>
      </div>
    </>
  );
}

export default MainBody;
