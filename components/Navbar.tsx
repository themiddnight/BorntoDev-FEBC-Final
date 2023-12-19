'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import TerminalIcon from '@mui/icons-material/Terminal';
import SearchBox from "./SearchBox";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { menu: 'Home', link: '/' },
    { menu: 'Courses', link: '/courses' },
    { menu: 'About', link: '/about' },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="bg-black/50 backdrop-blur-xl shadow-lg">

      <NavbarContent justify="start">

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href="/">
          <NavbarBrand className="grow-0 me-5">
            <TerminalIcon className="me-2 text-lime-400" />
            <p className="font-bold font-mono text-rose-500">FINALE_PROJECT</p>
          </NavbarBrand>
        </Link>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${index}`}>
              <Link color="foreground" href={item.link}>
                {item.menu}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <SearchBox />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={'foreground'}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.menu}
            </Link>
          </NavbarMenuItem>
        ))}
        <SearchBox />
      </NavbarMenu>

    </Navbar>
  );
}