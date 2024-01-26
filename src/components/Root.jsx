import { Outlet } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HeaderBar from "./HeaderBar";
import NavMenu from "./NavMenu";

function Root() {
  return (
    <>
      <HeaderBar />
      <NavMenu />
      <Container style={{ marginTop: "20px" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
