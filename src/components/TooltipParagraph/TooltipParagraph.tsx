import React from 'react';

const TooltipParagraph = ({ children }: { children: React.ReactNode }) => {
    return <p className="font-normal text-sm tracking-normal">{children}</p>;
};

export default TooltipParagraph;
