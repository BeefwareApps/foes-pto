import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Menu,
  MenuItem,
} from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (e, { name }) => {
    setActiveItem(name);
    navigate(name);
  };

  return (
    <Menu attached="top" style={styles.menu}>
      <Dropdown item text="Fundraisers" simple>
        <DropdownMenu>
          <DropdownItem name="fun-run" onClick={handleNavigate}>
            Fun Run
          </DropdownItem>
          <DropdownItem name="readathon" onClick={handleNavigate}>
            Readathon
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown item text="Spirit Nights" simple>
        <DropdownMenu>
          <DropdownItem>Dominos</DropdownItem>
          <DropdownItem>Dos Botellas</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <MenuItem
        name="contact-us"
        active={activeItem === "contact-us"}
        onClick={handleNavigate}
      >
        Contact Us
      </MenuItem>

      <MenuItem
        name="lost-and-found"
        active={activeItem === "lost-and-found"}
        onClick={handleNavigate}
      >
        Lost & Found
      </MenuItem>
    </Menu>
  );
};

const styles = {
  menu: {
    marginTop: "0px",
  },
};

export default NavMenu;
