import React from 'react';

import SkillsData from '../../data/skills.json';
import SkillCard from '@/components/Skills/SkillCard';
import { DraftingCompass } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

const Skills = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-4 grid-rows-[min-content,1fr] gap-y-8 gap-x-4">
            <SectionHeading
                heading={'Skills'}
                icon={DraftingCompass}
                toolTipContent={
                    'With a strong foundation in web development principles, I can work with various technologies.'
                }
            />
            {SkillsData.map((skill, index) => (
                <SkillCard key={index} title={skill.title} skills={skill.skills} />
            ))}
        </section>
    );
};

export default Skills;
