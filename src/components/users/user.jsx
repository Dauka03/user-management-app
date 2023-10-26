import { Avatar, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import SettingButton from "../buttons/menuButton";
import { useState } from "react";
import DeletedUser from "../modals/deletedUser";
const User = ({ name, email, permissions, image }) => {
  const [isDeletedModalOpen, setIsDeletedModalOpen] = useState(false);

  const openDeletedModal = () => {
    setIsDeletedModalOpen(true);
  };

  const closeDeletedModal = () => {
    setIsDeletedModalOpen(false);
  };
  return (
    <section style={{ display: "flex", justifyContent: "space-between" }}>
      <section
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <section style={{ margin: "0px 20px" }}>
          <Avatar style={{ margin: "20px 0px" }} name={name} src={image} />
        </section>
        <div className="userBlock" style={{ display: "flex" }}>
          <section
            style={{
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="userBlock" style={{ display: "flex" }}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "20px",
                  marginBottom: "5px",
                  marginRight: "10px",
                }}
              >
                {name}
              </p>
              <p
                className="emailBlock"
                style={{
                  color: "#9494A0",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "20px",
                }}
              >
                {email}
              </p>
            </div>
            <ButtonGroup
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                alignContent: "flex-start",
              }}
              variant="outline"
              spacing="6"
            >
              {permissions.map((permission, index) => (
                <Button style={{}} key={index} colorScheme="blue">
                  {permission}
                </Button>
              ))}
            </ButtonGroup>
          </section>
        </div>
      </section>

      <section>
        <SettingButton
          email={email}
          openDeletedModal={openDeletedModal}
        ></SettingButton>
        <DeletedUser
          isOpen={isDeletedModalOpen}
          onClose={closeDeletedModal}
        ></DeletedUser>
      </section>
    </section>
  );
};

export default User;
