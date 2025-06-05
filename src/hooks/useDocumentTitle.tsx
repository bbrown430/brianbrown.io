import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteTitles {
  [key: string]: string;
}

const routeTitles: RouteTitles = {
  '/': 'Home - Brian Brown',
  '/play-piano': 'Play Piano - Brian Brown',
  '/smart-blinds': 'Smart Blinds - Brian Brown',
  '/robotic-ball-collector': 'Robotic Ball Collector - Brian Brown',
  '/endless-library': 'Endless Library - Brian Brown',
  '/repeat-receipts': 'Repeat Receipts - Brian Brown',
  '/kindle': 'Kindle - Brian Brown',
  '/3d-design': '3D Design - Brian Brown',
  '/contact-me': 'Contact Me - Brian Brown',
};

export const useDocumentTitle = (): void => {
  const location = useLocation();
  
  useEffect(() => {
    const title: string = routeTitles[location.pathname] || 'Page Not Found - Brian Brown';
    document.title = title;
  }, [location.pathname]);
};

