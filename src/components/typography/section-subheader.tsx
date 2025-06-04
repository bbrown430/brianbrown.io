import React from 'react';

interface SectionSubheaderProps {
    title: string;
}

const SectionSubheader: React.FC<SectionSubheaderProps> = ({ title }) => {
    return <h2 className="text-primary font-bold text-3xl">{ title }</h2>;
};

export default SectionSubheader;