import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Design from './Design';
import ProjectCardList from './ProjectCard';

const webItems = [
	{
		link: "",
		title: "Web-Based News Storytelling",
		doneFor: "Rice Thresher",
		timePeriod: [2022, 2023],
		extract: "Crafted interactive experiences through the medium of the web to convey themes present in stories about Rice’s baseball team, the RMC’s relationship with the historic third ward, and personal stories from alumni about abortion.",
		skills: ["php", "python"],
		image: "/thumbnails/thresher.png",
	},
	{
		link: "",
		title: "DelegatePal",
		doneFor: "Personal",
		timePeriod: [2016, 2018],
		extract: "Created a set of research and organization utilities for students participating in MUN conferences. Initially made on a LAMP stack, the current site is server-less and uses the GDrive API to host user content.",
		skills: ["php", "python"],
		image: "/thumbnails/dp.png",
	},
	{
		link: "",
		title: "Jira Work-Logging App",
		doneFor: "Target RWE",
		timePeriod: [2022],
		extract: "During my internship, I revamped the system used by employees to log hours worked in Jira's ticket system using the Jira Forge API.",
		skills: ["php", "python"],
		image: "/thumbnails/jira.png",
	},
	{
		link: "",
		title: "Love Poet Anachronism",
		doneFor: "ENGL 254",
		timePeriod: [2023],
		extract: "For an assigment to reimagine classic and modern love poets in a different time period, I created a mock dating app where a user can browse dating profiles and messages of famous poets.",
		skills: ["php", "python"],
		image: "/thumbnails/anachronism.png",
	},
	{
		link: "",
		title: "Online Puzzlehunt",
		doneFor: "Rice Escape",
		timePeriod: [2021],
		extract: "Due to COVID restrictions, Rice cancelled in-person activities such as escape rooms. To adapt to this, we created an online puzzlehunt using a reskinned Django template. I managed the hosting and restyled the site.",
		skills: ["php", "python"],
		image: "/thumbnails/puzzlehunt.jpg",
	},
	{
		link: "",
		title: "Productivity Period",
		doneFor: "Hackrice Hackathon",
		timePeriod: [2019],
		extract: "I led a team to develop a Chrome extension that created a synchronized timer across different users' devices to facilitate group study sessions.",
		skills: ["php", "python"],
		image: "/thumbnails/productivity.png",
	},
]

export default function FullStackSection() {

	let size = 30;
	let intensity = 1;
	let [positionX, positionY, positionZ] = [2, 10, 7];

	return (
		<section id="fullstack" className='project-section md:px-10'>
			<div className='section-header'>
				<div className='section-header-3d transition-hidden'>
					<Canvas camera={{ fov: 20, near: 0.1, far: 1000, position: [0, 0, 20] }}>
						<Suspense fallback={null}>
							<Design scale={2.7} position={[0, -2, 0]} rotation={[0, -Math.PI / 2, 0]} />
							<rectAreaLight
								width={size}
								height={size}
								color="#9ca3af"
								intensity={intensity}
								position={[-positionX, positionY, positionZ]}
								castShadow
							/>
							<rectAreaLight
								width={size}
								height={size}
								color="#60a5fa"
								intensity={intensity}
								position={[positionX, positionY, positionZ]}
								castShadow
							/>
						</Suspense>
					</Canvas>
				</div>
				<div>
					<h2 className='text-6xl font-semibold mb-3 text-gray-50'>Full Stack Design</h2>
					<h3 className='font-semibold mb-3 text-gray-50'>Web student becomes the webmaster</h3>
				</div>
			</div>
			<div className='project-set'>
				<ProjectCardList projectList={webItems} seed={1} />
			</div>
		</section>
	);
}