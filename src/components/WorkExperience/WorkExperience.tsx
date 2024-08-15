import React from 'react';

import WorkExperienceData from '../../data/work-experience.json';
import WorkExperienceCard from '@/components/WorkExperience/WorkExperienceCard/WorkExperienceCard';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Building } from 'lucide-react';

const WorkExperience = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[min-content,1fr] gap-y-8 gap-x-4">
            <h2 className="col-span-full text-3xl font-bold tracking-tight sm:text-4xl">
                <Tooltip>
                    <TooltipTrigger className="flex items-center gap-2">
                        <Building size={32} />
                        <span>Work Experience</span>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p className="font-normal text-sm tracking-normal">
                            I'm open to job opportunities right now!
                        </p>
                    </TooltipContent>
                </Tooltip>
            </h2>

            {WorkExperienceData.map((workExperience, index) => (
                <WorkExperienceCard
                    key={index}
                    title={workExperience.title}
                    company={workExperience.company}
                    startDate={workExperience.startDate}
                    endDate={workExperience.endDate}
                    points={workExperience.points}
                />
            ))}
        </section>
    );
};

export default WorkExperience;
