import React from 'react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import TypingAnimation from '@/components/magicui/typing-animation';

const Header = () => {
    return (
        <header className="col-start-2 grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-16">
            <div className="flex flex-col items-center lg:items-start gap-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Utku Onur Şahin</h1>
                <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl">
                    <Tooltip>
                        <TooltipTrigger>Fullstack Web Developer</TooltipTrigger>
                        <TooltipContent side="right">
                            <p className="font-normal text-sm tracking-normal">
                                A full-stack web developer is a person who can develop both client and server
                                software.
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </h2>
                <TypingAnimation
                    className="text-justify lg:text-left text-base text-muted-foreground font-normal tracking-normal"
                    text={
                        "I'm a passionate software engineer with a strong background in full-stack web development. I love building scalable and user-friendly applications that solve real-world problems." +
                        "I'm confident in concepts like state management, component lifecycle, RESTful APIs, OOP, MVC Architecture and design patterns."
                    }
                    duration={15}
                />
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href={'https://www.linkedin.com/in/utku-onur-sahin/'}>
                            <Linkedin />
                        </Link>
                    </li>
                    <li>
                        <Link href={'https://github.com/utkuonursahin'}>
                            <Github />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <Tooltip>
                    <TooltipTrigger>
                        <Image
                            width={200}
                            height={200}
                            src="/utku-onur-sahin.jpeg"
                            alt="Utku Onur Şahin at GDSC Graduation"
                            className="rounded-full object-cover aspect-square"
                            priority={false}
                        />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p className="font-normal text-sm tracking-normal">
                            Utku Onur Şahin at GDSC Graduation | Google Istanbul Office, July 2024
                        </p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </header>
    );
};

export default Header;
