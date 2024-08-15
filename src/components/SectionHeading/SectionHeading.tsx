import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { LucideIcon } from 'lucide-react';

type SectionHeadingProps = {
    heading: string;
    icon: LucideIcon;
    toolTipContent: string;
};

const SectionHeading = (props: SectionHeadingProps) => {
    return (
        <h2 className="col-span-full text-3xl font-bold tracking-tight sm:text-4xl">
            <Tooltip>
                <TooltipTrigger className="flex items-center gap-2">
                    <props.icon size={32} />
                    <span>{props.heading}</span>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p className="font-normal text-sm tracking-normal">{props.toolTipContent}</p>
                </TooltipContent>
            </Tooltip>
        </h2>
    );
};

export default SectionHeading;
