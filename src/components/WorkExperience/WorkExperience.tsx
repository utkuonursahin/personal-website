import React from 'react';

import WorkExperienceData from '../../data/work-experience.json';
import WorkExperienceCard from '@/components/WorkExperience/WorkExperienceCard/WorkExperienceCard';
import { Building } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

const WorkExperience = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[min-content,1fr] gap-y-8 gap-x-4">
            <SectionHeading
                heading={'Work Experience'}
                icon={Building}
                toolTipContent={"I'm open to job opportunities right now!"}
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
