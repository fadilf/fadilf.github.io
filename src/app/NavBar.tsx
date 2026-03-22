'use client'
import { useState } from 'react';
import { BsFillPersonFill, BsFillMotherboardFill } from 'react-icons/bs';
import { FaBrain, FaCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
	const [navMobileOpen, setNavMobileOpen] = useState(false);

	return (
		<nav className='fixed top-0 left-0 w-screen z-20 bg-[#1d1d1fcc] backdrop-blur-xl border-b border-[#38383a]/60'>
			<div className='flex justify-between h-12 max-w-[80rem] mx-auto'>
				<a href='#' className='px-5 h-12 text-sm font-semibold leading-[3rem] text-apple-text tracking-tight hover:text-apple-blue transition-colors duration-300'>
					<div className='inline-block align-middle'>
						Fadil Eledath
					</div>
				</a>
				<button onClick={()=>setNavMobileOpen(!navMobileOpen)} type="button" className="inline-flex items-center px-5 h-12 sm:hidden transition-colors duration-300 focus:outline-none text-apple-lightgray hover:text-apple-text">
					<span className="sr-only">Open main menu</span>
					<GiHamburgerMenu className='text-base' />
				</button>
				<ul className={`list-none sm:flex sm:items-center max-sm:fixed ${navMobileOpen ? 'right-0' : '-right-full'} max-sm:top-12 max-sm:h-screen max-sm:bg-[#1d1d1fee] max-sm:backdrop-blur-xl max-sm:border-l max-sm:border-[#38383a]/60 transition-all duration-500`}>
					<NavItem label="About" link="#top" icon={<BsFillPersonFill />} />
					<NavDivider />
					<NavItem label="Electronics" link="#electronics" icon={<BsFillMotherboardFill />} />
					<NavDivider />
					<NavItem label="AI/ML" link="#ai" icon={<FaBrain />} />
					<NavDivider />
					<NavItem label="Full Stack" link="#fullstack" icon={<FaCode />} />
				</ul>
			</div>
		</nav>
	)
}

function NavDivider() {
	return <li className='hidden sm:block w-px h-4 bg-[#48484a]' aria-hidden="true"></li>
}

function NavItem (
	{
		label,
		link,
		icon,
	}: {
		label: string;
		link: string;
		icon: any;
	}) {
	return (
		<a href={link}>
			<li className='text-xs sm:inline-block px-5 h-12 leading-[3rem] text-apple-lightgray hover:text-apple-text transition-colors duration-300'>
				<span className='inline-block relative top-px pr-1.5 opacity-70'>{icon}</span>
				<span>{label}</span>
			</li>
		</a>
	)
}
