import Header from '@/components/Header/Header';
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';
import Skills from '@/components/Skills/Skills';

export default function Home() {
    return (
        <div className="bg-background min-h-screen grid grid-cols-[1fr,clamp(12rem,80vw,60rem),1fr] grid-rows-[min-content,1fr,min-content] gap-y-16 pt-16">
            <Header />
            <main className="col-start-2 flex flex-col gap-16">
                <WorkExperience />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </div>
    );
}
