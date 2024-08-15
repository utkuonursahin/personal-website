import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type SkillCardProps = {
    title: string;
    skills: string[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="text-muted-foreground">
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default SkillCard;
