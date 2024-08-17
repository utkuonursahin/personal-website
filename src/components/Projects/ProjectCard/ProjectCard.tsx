import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import TooltipParagraph from '@/components/TooltipParagraph/TooltipParagraph';

type ProjectCardProps = {
    title: string;
    description: string;
    gitHubUrl: string;
};

const ProjectCard = ({ title, description, gitHubUrl }: ProjectCardProps) => {
    return (
        <Card className="grid grid-rows-[1fr,min-content]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button>
                            <Link className="flex items-center gap-2" href={gitHubUrl} prefetch={false}>
                                <Github /> <p>See at GitHub</p>
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <TooltipParagraph>
                            This will take you to the GitHub repository of this project.
                        </TooltipParagraph>
                    </TooltipContent>
                </Tooltip>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
