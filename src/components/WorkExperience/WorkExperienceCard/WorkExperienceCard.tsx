import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type WorkExperienceCardProps = {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    points: string[];
};

const WorkExperienceCard = ({ title, company, startDate, endDate, points }: WorkExperienceCardProps) => {
    return (
        <Card>
            <CardHeader className="text-xl font-semibold">
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {company} | {startDate} - {endDate}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    {points.map((point, index) => {
                        return (
                            <li className="flex gap-1" key={index}>
                                <span>•</span>
                                <span>{point}</span>
                            </li>
                        );
                    })}
                </ul>
            </CardContent>
        </Card>
    );
};

export default WorkExperienceCard;
