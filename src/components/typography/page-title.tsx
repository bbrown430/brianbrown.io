import React from 'react';

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return <h1 className="text-5xl sm:text-6xl md:text-7xl font-black">{title}</h1>;
};

export default PageTitle;