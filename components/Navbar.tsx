'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Divider } from "@nextui-org/react";
import TerminalIcon from '@mui/icons-material/Terminal';
import SearchBox from "./SearchBox";
import ThemeSwitch from "./ThemeSwitch";

export default function MainNavbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		{ menu: 'Home', link: '/' },
		{ menu: 'Courses', link: '/courses' },
		{ menu: 'About', link: '/about' },
	];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="backdrop-blur-xl shadow-lg">

			<NavbarContent justify="start">
				<Link href="/">
					<NavbarBrand className="grow-0 me-5">
						<TerminalIcon className="me-2 text-primary" />
						<p className="font-bold font-mono text-rose-500">FINALE_PROJECT</p>
					</NavbarBrand>
				</Link>

				<NavbarContent className="hidden md:flex gap-4" justify="start">
					{menuItems.map((item, index) => (
						<NavbarItem key={`${index}`}>
							<Link color="foreground" href={item.link}>
								{item.menu}
							</Link>
						</NavbarItem>
					))}
				</NavbarContent>
			</NavbarContent>

			<NavbarContent className="flex" justify="end">
				<div className="hidden md:flex">
					<SearchBox />
				</div>
				<Divider orientation="vertical" className="h-[30px] hidden md:flex" />
				<div>
					<ThemeSwitch />
				</div>
				<Divider orientation="vertical" className="h-[30px] md:hidden" />
			</NavbarContent>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="md:hidden"
			/>

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