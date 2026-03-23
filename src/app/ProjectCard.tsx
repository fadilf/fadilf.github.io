
interface Project {
    link: string,
    title: string;
    doneFor: string;
    timePeriod: number[],
    extract: string,
    skills: string[],
    image: string,
}

function ProjectCard({
    project,
    angle,
}: {
    project: Project,
    angle: number,
}) {
    let xHalf = 20;
    let yHalf = 9;
    let [greyX, greyY] = [xHalf + (xHalf * Math.cos(angle)), yHalf + (yHalf * Math.sin(angle))];
    let [goldX, goldY] = [2 * xHalf - greyX, 2 * yHalf - greyY]
    return (
        <a className='project-item' href={project.link || undefined} target="_blank" rel="noopener noreferrer">
            <div className="project-lights" suppressHydrationWarning>
                <div className="grey-light" suppressHydrationWarning style={{
                    boxShadow: `rgba(255, 255, 255, 0.6) ${greyX}rem ${greyY}rem 10rem 6rem`
                }}></div>
                <div className="gold-light" suppressHydrationWarning style={{
                    boxShadow: `rgba(46, 158, 79, 0.15) ${goldX}rem ${goldY}rem 16rem 4rem`
                }}></div>
            </div>
            <div className="project-item-sub">
                <div className='project-info'>
                    <h4 className='project-title font-bold text-2xl text-apple-text'>{project.title}</h4>
                    <div className='project-specs'>
                        <span className='project-for'>{project.doneFor}</span>
                        <span className='project-timeline'>{project.timePeriod.join('-')}</span>
                    </div>
                    <div className='project-extract'>{project.extract}</div>
                </div>
                <div className='project-image' style={{ backgroundImage: `url('${project.image}')` }}></div>
            </div>
        </a>
    )
}

function mulberry32(a: number) {
    return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

export default function ProjectCardList({ projectList, seed }: { projectList: Project[], seed: number }) {

    let prng = mulberry32(seed);

    return <>{projectList.map((item, idx) =>
        <ProjectCard project={item} key={idx} angle={prng() * 2 * Math.PI} />
    )}</>;
}
