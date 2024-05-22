import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Resumes</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>Software Developer(C/C++)</DropdownItem>
        <DropdownItem>Web Developer</DropdownItem>
        <DropdownItem>Machine Learning Engineer</DropdownItem>
        <DropdownItem>IOS Developer</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
