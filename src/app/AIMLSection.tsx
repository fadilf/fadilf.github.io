import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Robot from './Robot';
import ProjectCardList from './ProjectCard';

const AIMLItems = [
	{
		link: "https://quizhp.com/",
		title: "g-speak",
		doneFor: "Personal",
		timePeriod: [2026],
		extract: "Using my previous work on GPreview and experience with code agents, I developed a fork of OpenCode that has the ability to understand the graphical code of LabVIEW without needing to fine-tune an LLM in the process.",
		skills: ["javascript", "python"],
		image: "/blogs/g-speak/start.png",
	},
	{
		link: "https://www.dmcinfo.com/blog/40065/dmc-complete-faster-labview-coding-with-old-fashioned-ai/",
		title: "DMC-Complete",
		doneFor: "DMC, Inc.",
		timePeriod: [2025],
		extract: "An AI code-completion tool for LabVIEW that works by building a Markov chain model from a training set of files converted into graphs and then predicting the next block a user will use based on the last block used.",
		skills: ["javascript", "python"],
		image: "/thumbnails/dmc-complete.webp",
	},
	{
		link: "https://quizhp.com/",
		title: "QuizHP",
		doneFor: "Personal",
		timePeriod: [2025],
		extract: "An MCP server that transforms quiz questions into 125+ interactive canvas-based mini-games. Works with Claude and ChatGPT to gamify learning with activities like archery, bomb defusal, and potion mixing.",
		skills: ["javascript", "python"],
		image: "/thumbnails/quizhp.png",
	},
	{
		link: "https://www.dmcinfo.com/blog/16273/webtdms-a-powerful-tdms-and-csv-analyzer/",
		title: "WebTDMS",
		doneFor: "DMC, Inc.",
		timePeriod: [2024],
		extract: "An AI code-completion tool for LabVIEW that works by building a Markov chain model from a training set of files converted into graphs and then predicting the next block a user will use based on the last block used.",
		skills: ["python"],
		image: "/thumbnails/webtdms.png",
	},
	{
		link: "",
		title: "Bill.com Receipt Challenge",
		doneFor: "Rice Datathon",
		timePeriod: [2023],
		extract: "My team trained a model using fuzzy matching to match receipt data to entries in a table, optimizing the model using third party data from Google Maps and OCR positional information.",
		skills: ["php", "python"],
		image: "/thumbnails/bill.png",
	},
	{
		link: "",
		title: "Loan Default Prediction",
		doneFor: "SA Home Loans",
		timePeriod: [2020],
		extract: "I improved payment-method opt-out prediction for government worker home loan applicants in South Africa by analyzing data from 20,000 applicants with a veriety of models.",
		skills: ["php", "python"],
		image: "/thumbnails/sahl.jpg",
	},
	{
		link: "https://github.com/fadilf/college/blob/main/EDA.ipynb",
		title: "IPEDS Data Exploration",
		doneFor: "Personal",
		timePeriod: [2023],
		extract: "Discussions about college endowments prompted me to examine Rice's priorities with spending its funds compared to its peers and the relation to U.S. News college rankings using scripts to collate and compare features from the IPEDS dataset.",
		skills: ["php", "python"],
		image: "/thumbnails/ipeds.png",
	},
	{
		link: "https://fadileledath.com/RiceCourseUtilities/",
		title: "Rice Course Utilities",
		doneFor: "Personal",
		timePeriod: [2022],
		extract: "Frustrated by Rice's slow and simple course catalog, I wrote a scraper, 2 powerful course browsers, and a tool to export course information from Rice's platform to your calendar.",
		skills: ["php", "python"],
		image: "/thumbnails/courseutils.png",
	},
]

export default function AIMLSection() {

	let size = 30;
	let intensity = 1;
	let [positionX, positionY, positionZ] = [2, 10, 7];

	return (
		<section id="ai" className='project-section md:px-12'>
			<div className='section-header'>
				<div id="robot-container" className='section-header-3d transition-hidden'>
					<Canvas camera={{ fov: 20, near: 0.1, far: 1000, position: [0, 0, 20] }}>
						<Suspense fallback={null}>
							<Robot scale={.75} position={[0, -2.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
							<rectAreaLight
								width={size}
								height={size}
								color="#fffbe6"
								intensity={intensity}
								position={[-positionX, positionY, positionZ]}
								castShadow
							/>
							<rectAreaLight
								width={size}
								height={size}
								color="#6be89a"
								intensity={intensity}
								position={[positionX, positionY, positionZ]}
								castShadow
							/>
						</Suspense>
					</Canvas>
				</div>
				<div>
					<h2 className='text-6xl font-bold mb-3 text-apple-text tracking-tight'>AI/ML/Data</h2>
					<h3 className='font-medium mb-3 text-apple-lightgray text-lg'>Parsers, pandas, and PyTorch</h3>
				</div>
			</div>
			<div className='project-set'>
				<ProjectCardList projectList={AIMLItems} seed={6} />
			</div>
		</section>
	);
}
