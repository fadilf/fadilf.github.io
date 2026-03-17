export default function JigsawSection() {

    return (
        <section className='max-w-7xl mx-auto px-5 py-20 mb-20 md:px-10'>
            <div className='jigsaw-text'>
                <h2 className='text-5xl font-semibold mb-3 text-gray-50'>How I Got Here</h2>
                <h3 className='font-semibold mb-3 text-gray-50'>Learning to do 🤝 Doing to learn</h3>
                <div className='max-w-2xl'>
                    <p className='mb-2'>
                        As you&apos;ll see below, I keep busy with projects that are interesting, refine what I know, and throw me into the deep end of something new.
                    </p>
                    <p>
                        I started in full stack development by pasting HTML snippets in Blogger, in electronics with Lego robots, and in data science by scraping Spanish tests to study vocab.
                    </p>
                </div>
            </div>
            <div className='jigsaw transition-hidden -mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
                    <path d="M140 70c0 11-9 20-20 20v30H91c0 11-9 20-20 20s-20-9-20-20H20V49c0-16 13-30 29-30h71v30c11 1 20 10 20 21z" className="piece piece-1"/>
                    <path d="M275 70c0 11-9 20-20 20v30h-29c0-11-9-20-20-20s-20 9-20 20h-31V90h1c11 0 20-9 20-20s-9-20-20-20h-1V20h100v30c11 0 20 9 20 20z" className="piece piece-2"/>
                    <path d="M100 205c0 11 9 20 20 20v30H91c0 11-9 20-20 20s-20-9-20-20H20V155h31c0 11 9 20 20 20s20-9 20-20h29v30c-11 0-20 9-20 20z" className="piece piece-3"/>
                    <path d="M235 205c0 11 9 20 20 20v30h-29c0-11-9-20-20-20s-20 9-20 20h-31v-30c-11 0-20-9-20-20s9-20 20-20v-30h31c0-11 9-20 20-20s20 9 20 20h29v30c-11 0-20 9-20 20z" className="piece piece-4"/>
                </svg>
            </div>
        </section>
    );
}