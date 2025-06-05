import React from 'react';

interface PageSubtitleProps {
    title: string;
}

const PageSubtitle: React.FC<PageSubtitleProps> = ({ title }) => {
    return <h3 className="text-muted-foreground font-semibold text-xl md:text-2xl">{ title }</h3>;
};

export default PageSubtitle;