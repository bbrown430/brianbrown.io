export interface Project {
    id: string;
    title: string;
    path: string;
    skills: string[];
    description: string;
    lottiePath: string;
    date: string;
    color: 'blue' | 'green' | 'orange' | 'yellow' | 'magenta' | 'cyan' | 'red' | 'purple';
    lottieWidth?: string;
    showInHeader?: boolean;
    headerOrder?: number;
  }
  
  export const projects: Project[] = [
    {
      id: 'play-piano',
      title: 'P.L.A.Y Piano',
      path: '/play-piano',
      skills: ['SOLIDWORKS', 'React', 'Figma', 'Python', 'Flask', 'Node.js'],
      description: '**1st place winning NEU S2024 ECE Capstone Design Project!** \n An all-in-one piano learning solution, bringing an illuminated Guitar Hero experience to the piano.',
      lottiePath: '/lotties/playpiano.json',
      date: 'Jan - Apr \'24',
      color: 'blue',
      showInHeader: true,
      headerOrder: 1,
    },
    {
      id: 'search-time-crisis',
      title: 'Search Time Crisis',
      path: 'https://www.searchtimecrisis.com/',
      skills: ['React', 'OpenAI Whisper', 'TypeScript', 'Python', 'Tailwind CSS'],
      description: '**Over 10k page visits!** \n Search through 475+ hours of Time Crisis. [Featured on their Twitter!](https://xcancel.com/timecrisis2000/status/1852534408227733859#m)',
      lottiePath: '/lotties/searchtimecrisis.json',
      date: 'Since Oct \'24',
      color: 'green',
      showInHeader: true,
      headerOrder: 2,
    },
    {
      id: 'plex-poster-helper',
      title: 'Plex Poster Set Helper',
      path: 'https://github.com/bbrown430/plex-poster-set-helper',
      skills: ['Python', 'BeautifulSoup', 'Homelab', 'Docker'],
      description: '**100+ stars on GitHub!** \n A tool to help upload sets of posters from ThePosterDB and MediUX to your Plex server in seconds!',
      lottiePath: '/lotties/smartblinds.json',
      date: 'Since Jan \'24',
      color: 'orange',
      showInHeader: true,
      headerOrder: 3,
    },
    {
      id: 'smart-blinds',
      title: 'Smart Blinds',
      path: '/smart-blinds',
      skills: ['C++', 'Arduino', 'IoT', 'iOS HomeKit API'],
      description: 'A home automation project retrofitting existing blinds to be IoT controlled, through the power of Arduino and Apple HomeKit.',
      lottiePath: '/lotties/smartblinds.json',
      date: 'Mar \'23',
      color: 'yellow',
      showInHeader: true,
      headerOrder: 4,
    },
    {
      id: 'endless-library',
      title: 'Endless Library',
      path: '/endless-library',
      skills: ['Python', 'BeautifulSoup', 'FastAPI'],
      description: 'A tool to quickly and easily download and send books to a Kindle, featuring Goodreads list imports, and intuitive CLI search functionality.',
      lottiePath: '/lotties/endlesslibrary.json',
      date: 'Dec \'23',
      color: 'orange',
      showInHeader: true,
      headerOrder: 5,
    },
    {
      id: 'robotic-ball-collector',
      title: 'Robotic Ball Collector',
      path: '/robotic-ball-collector',
      skills: ['Arduino', 'Python', 'C++'],
      description: 'A robot designed to collect and drop off as many balls as possible, as quickly as possible, for the iRobot intern challenge.',
      lottiePath: '/lotties/hungryhippo.json',
      date: 'Nov \'23',
      color: 'magenta',
      showInHeader: true,
      headerOrder: 6,
    },
    {
      id: 'b-squared-designs',
      title: 'B Squared Designs',
      path: 'https://bsquareddesigns.webflow.io/',
      skills: ['After Effects', 'Figma', 'Illustrator', 'Photoshop'],
      description: 'My animation and design company where I\'ve managed and delivered projects for 200+ clients over the past eight years.',
      lottiePath: '/lotties/bsquared.json',
      date: 'Since \'15',
      color: 'cyan',
      lottieWidth: 'w-24 sm:w-40 sm:p-8 md:w-48 lg:p-4 lg:w-40 xl:w-32',
      showInHeader: true,
      headerOrder: 7,
    },
    {
      id: '3d-design',
      title: '3D Design',
      path: '/3d-design',
      skills: ['SOLIDWORKS', 'Illustrator'],
      description: 'A collection of CAD work, 3D prints, and design iterations.',
      lottiePath: '/lotties/3ddesign.json',
      date: 'Since \'22',
      color: 'red',
      showInHeader: true,
      headerOrder: 8,
    },
    {
      id: 'repeat-receipts',
      title: 'Repeat Receipts',
      path: '/repeat-receipts',
      skills: ['Python', 'Flask', 'Spotify API', 'HTML/CSS'],
      description: 'Ever wonder what songs you keep coming back to year after year? With Repeat Receipts, wonder no more.',
      lottiePath: '/lotties/repeatreceipts.json',
      date: 'Dec \'22 - Jan \'23',
      color: 'purple',
      showInHeader: true,
      headerOrder: 9,
    },
    {
      id: 'this-website',
      title: 'This Website',
      path: 'https://github.com/bbrown430/brianbrown.io',
      skills: ['React', 'Typescript', 'Figma', 'Tailwind CSS'],
      description: 'This very website was designed and built by me, to uniquely show off my projects and skills.',
      lottiePath: '/lotties/thiswebsite.json',
      date: 'Since \'23',
      color: 'green',
      showInHeader: true,
      headerOrder: 10,
    },
  ];
  
  // Helper functions for different use cases
  export const getHeaderProjects = () => {
    return projects
      .filter(project => project.showInHeader !== false)
      .sort((a, b) => (a.headerOrder || 0) - (b.headerOrder || 0));
  };
  
  export const getTimelineProjects = () => {
    return projects; // All projects for timeline
  };
  
  export const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };
  
  export const getProjectByPath = (path: string) => {
    return projects.find(project => project.path === path);
  };