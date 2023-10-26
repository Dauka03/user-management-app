import logo from "../assets/ico.png";
import logo2 from "../assets/Union.png";
import group from "../assets/Group.png";
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
const Layout = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <div
        className="layout"
        style={{
          height: "100vh",
          width: "5vw",
          backgroundColor: "#F9FAFB",
          borderTopRightRadius: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button onClick={openDrawer} style={{ margin: "20px 0px" }}>
          <img src={logo} alt="Нету" />
        </Button>
        <Avatar
          style={{ margin: "20px 0px" }}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Button style={{ margin: "20px 0px" }}>
          <img src={logo2} alt="" />
        </Button>
        <Button style={{ margin: "20px 0px" }}>
          <img src={group} alt="" />
        </Button>
      </div>
    </>
  );
};

export default Layout;
