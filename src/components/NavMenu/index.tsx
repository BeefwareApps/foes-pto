import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
  Icon,
  Menu,
} from "semantic-ui-react";

const MenuExampleAttached = () => (
  <Menu attached="top">
    <Dropdown item text="Fundraisers" simple>
      <DropdownMenu text="hi">
        <DropdownItem>
          <Icon name="dropdown" />
          <span className="text">New</span>

          <DropdownMenu>
            <DropdownItem>Document</DropdownItem>
            <DropdownItem>Image</DropdownItem>
          </DropdownMenu>
        </DropdownItem>
        <DropdownItem>Open</DropdownItem>
        <DropdownItem>Save...</DropdownItem>
        <DropdownItem>Edit Permissions</DropdownItem>
        <DropdownDivider />
        <DropdownHeader>Export</DropdownHeader>
        <DropdownItem>Share</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </Menu>
);

export default MenuExampleAttached;
