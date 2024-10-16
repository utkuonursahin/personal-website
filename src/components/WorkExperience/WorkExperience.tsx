import React from 'react';

import WorkExperienceData from '../../data/work-experience.json';
import WorkExperienceCard from '@/components/WorkExperience/WorkExperienceCard/WorkExperienceCard';
import { Building } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

const WorkExperience = () => {
    return (
        <section className="grid grid-cols-1 grid-rows-[min-content,repeat(3,min-content)] gap-y-8 gap-x-4">
            <SectionHeading
                heading={'Work Experience'}
                icon={Building}
                toolTipContent={'Right now, I work as a fullstack software engineer at TÜBİTAK BİLGEM YTE.'}
            />

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
