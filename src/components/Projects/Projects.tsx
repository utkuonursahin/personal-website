import React from 'react';

import ProjectData from '../../data/projects.json';
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard';
import { Target } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

const Projects = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 grid-rows-[min-content,1fr] gap-y-8 gap-x-4">
            <SectionHeading
                heading={'Latest Projects'}
                icon={Target}
                toolTipContent={'For more projects, you can visit my GitHub!'}
            />
            {ProjectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    gitHubUrl={project.githubUrl}
                />
            ))}
        </section>
    );
};

export default Projects;
