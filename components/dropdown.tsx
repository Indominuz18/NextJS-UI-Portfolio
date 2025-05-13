import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Resumes</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="text-center">
        {/* <DropdownItem>Software Developer(C/C++)</DropdownItem>
        <DropdownItem>Web Developer</DropdownItem>
        <DropdownItem>Machine Learning Engineer</DropdownItem>
        <DropdownItem>IOS Developer</DropdownItem> */}
        <DropdownItem key={"Software Developer"}>
          <Link
            download
            href={"/files/Summer_2024_Resume.pdf"}
            locale={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            Software Developer
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
