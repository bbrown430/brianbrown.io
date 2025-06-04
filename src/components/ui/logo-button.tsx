import React from 'react';
import { IconType } from 'react-icons';

interface LogoButtonProps {
    icon: IconType;
    link: string;
}

const LogoButton: React.FC<LogoButtonProps> = ({ icon: Icon, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 text-muted-foreground transition-colors ease-in-out duration-150 hover:text-flexoki-green-400"
        >
            <Icon className="w-12 h-12" />
        </a>
    );
};

export default LogoButton;