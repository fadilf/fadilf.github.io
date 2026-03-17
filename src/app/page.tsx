'use client'
import { useEffect, useRef } from 'react';
import Header from './Header';
import './FrontPageStyle.css';
import JigsawSection from './JigsawSection';
import ElectronicsSection from './ElectronicsSection';
import AIMLSection from './AIMLSection';
import FullStackSection from './FullStackSection';

export default function Home() {

	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				} else {
					entry.target.classList.remove('show');
				}
			});
		});
		const hiddenElements = document.querySelectorAll(".transition-hidden");
		hiddenElements.forEach((el) => {
			if (observer.current != null) {
				observer.current.observe(el)
			}
		});
	}, []);

	return (
		<>
			<Header />
			<JigsawSection />
			<ElectronicsSection />
			<AIMLSection />
			<FullStackSection />
		</>
	)
}
