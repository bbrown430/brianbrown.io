import React from 'react';

interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return <h2 className="text-primary font-bold text-5xl">{ title }</h2>;
};

export default SectionHeader;