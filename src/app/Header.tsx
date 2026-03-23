'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Header() {

	const nameElem = useRef<HTMLSpanElement>(null);
	const imgElem = useRef<HTMLDivElement>(null);
	const imgContainer = useRef<HTMLDivElement>(null);
	const stylingsElem = useRef<HTMLSpanElement>(null);
	const interval = 5;

	const stylingsArr = [
`background-color: rgba(255, 255, 255, 0.35);`,
`\theight: 20rem;
\twidth: 28rem;`,
`\tborder-radius: 0.75rem;`,
`\ttransform: rotate(3deg);`,
`\tbackground: center / cover url('/<span id="gallery-files" class="font-bold text-[#2e9e4f]"></span>');`
	];
	let stylingsArrRepacked: string[] = [];

	for (let i = 0; i < stylingsArr.length; i++) {
		stylingsArrRepacked.push(stylingsArr.slice(0, i + 1).join('\n'));
	}
	useEffect(() => {
		if (nameElem.current == null || imgElem.current == null || imgContainer.current == null || stylingsElem.current == null) {
			return;
		}

		const name = nameElem.current;
		const photo = imgElem.current;
		const preview = imgContainer.current;
		const stylesTarget = stylingsElem.current;

		let galleryType: Typed | null = null;
		let cursorTimeout: ReturnType<typeof setTimeout> | null = null;
		let fadeTimeout: ReturnType<typeof setTimeout> | null = null;

		name.style.backgroundPositionY = "-35.1rem";

		const showImage = (path: string) => {
			photo.style.backgroundImage = `url('${path}')`;
			photo.style.opacity = "1";

			if (fadeTimeout != null) {
				clearTimeout(fadeTimeout);
			}

			fadeTimeout = setTimeout(() => {
				photo.style.opacity = "0";
			}, 5500);
		};

		const typed = new Typed(stylesTarget, {
			strings: stylingsArrRepacked,
			typeSpeed: interval,
			startDelay: 1700,
			onStringTyped: (arrayPos) => {
				switch (arrayPos) {
					case 1:
						preview.classList.add('hero-preview-visible');
						break;
					case 2:
						preview.classList.add('hero-preview-rounded');
						break;
					case 3:
						preview.classList.add('hero-preview-tilted');
						showImage('/a_decade_of_experience.jpg');
						break;
					case 4:
						cursorTimeout = setTimeout(() => {
							const cursor = document.querySelector<HTMLElement>('#header-text .typed-cursor');
							if (cursor != null) {
								cursor.style.display = "none";
							}
							startGallery();
						}, 500);
						break;
					}
			},
		});

		function startGallery() {
			galleryType = new Typed('#gallery-files', {
				strings: [
					'^300experienced.jpg',
					'^300pre_grad.jpg',
					'^300class_of_2023.jpg',
				],
				typeSpeed: interval,
				loop: true,
				backDelay: 5000,
				backSpeed: 10,
				onStringTyped: (arrayPos) => {
					switch (arrayPos) {
						case 0:
							showImage('/a_decade_of_experience.jpg');
							break;
						case 1:
							showImage('/pre_grad.jpg');
							break;
						case 2:
							showImage('/rice_class_of_2023.jpg');
							break;
					}
				}
			});
		}
		return () => {
			typed.destroy();
			galleryType?.destroy();
			if (cursorTimeout != null) {
				clearTimeout(cursorTimeout);
			}
			if (fadeTimeout != null) {
				clearTimeout(fadeTimeout);
			}
		};
	}, [interval, stylingsArr]);

	return (
        <header id='about'>
			<div id="header-flex">
				<div id="header-text">
					<h1>Hi, I&apos;m&nbsp;<span ref={nameElem}></span></h1>
					<div className='mt-3 mb-6'>
						<p className='my-2 text-base leading-relaxed text-[#5a8a6a]'>
							Developer of things that are novel and practical, physical and digital, at every level of abstraction. Currently working at DMC Inc.
						</p>
						<p className='my-2 text-base leading-relaxed text-[#5a8a6a]'>
							You can see my projects below and check out my <a target="_blank" className='font-semibold text-apple-blue hover:text-[#3ab85e] transition-colors duration-300' href="https://github.com/fadilf/">GitHub</a> and <a target="_blank" className='font-semibold text-apple-blue hover:text-[#3ab85e] transition-colors duration-300' href="https://www.linkedin.com/in/fadileledath/">LinkedIn</a>.
						</p>
					</div>
					<div id="code-block">
						<div>{`#header-image {`}</div>
						<div>    <span ref={stylingsElem}></span></div>
						<div>{'}'}</div>
					</div>
				</div>
				<div id="header-image">
					<div className='hero-preview' ref={imgContainer}>
						<div className='hero-dots'></div>
						<div className='hero-veil'></div>
						<div ref={imgElem} className='hero-photo'></div>
					</div>
				</div>
			</div>
			<style>{`.typed-cursor.typed-cursor--blink{margin:0 -3.5px; color: #2e9e4f}`}</style>
        </header>
	)
}
