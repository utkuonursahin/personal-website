import React from 'react';

import ProjectData from '../../data/projects.json';
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard';
import { Target } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const Projects = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 grid-rows-[min-content,1fr] gap-y-8 gap-x-4">
            <h2 className="col-span-full text-3xl font-bold tracking-tight sm:text-4xl">
                <Tooltip>
                    <TooltipTrigger className="flex items-center gap-2 ">
                        <Target size={32} />
                        <span>Latest Projects</span>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p className="font-normal text-sm tracking-normal">
                            For more projects, you can visit my GitHub!
                        </p>
                    </TooltipContent>
                </Tooltip>
            </h2>
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
