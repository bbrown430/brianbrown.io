import TimelineBlock from "./timeline-block";

const Timeline: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center py-10">
      <div className="relative flex flex-col gap-2">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-background via-muted to-background z-0" />
        <TimelineBlock
          side="right"
          color="blue"
          title="P.L.A.Y Piano"
          skills={["SOLIDWORKS", "React", "Figma", "Python", "Flask", "Node.js"]}
          description="An all-in-one piano learning solution, bringing an illuminated Guitar Hero experience to the piano. The 1st place winning Northeastern Spring 2024 ECE Capstone Design Project."
          navigate="/play-piano"
          lottiePath="/lotties/playpiano.json"
          date={"Jan - Apr '24"}
        />
        <TimelineBlock
          side="left"
          color="yellow"
          title="Smart Blinds"
          skills={["C++", "Arduino", "IoT", "iOS HomeKit API"]}
          description="A home automation project retrofitting existing blinds to be IoT controlled, through the power of Arduino and Apple HomeKit.."
          navigate="/smart-blinds"
          lottiePath="/lotties/smartblinds.json"
          date={"Mar '23"}
        />
        <TimelineBlock
          side="right"
          color="green"
          title="Search Time Crisis"
          skills={["React", "OpenAI Whisper", "TypeScript", "Tailwind CSS", "Python"]}
          description="Search through 450+ hours of the greatest internet radio show, Time Crisis with Ezra Koenig. [Featured on their Twitter!](https://x.com/timecrisis2000/status/1852534408227733859#m)"
          navigate="https://www.searchtimecrisis.com/"
          lottiePath="/lotties/searchtimecrisis.json"
          date={"Oct '24"}
        />
        <TimelineBlock
          side="left"
          color="orange"
          title="Endless Library"
          skills={["Python", "BeautifulSoup", "FastAPI"]}
          description="A tool to quickly and easily download and send books to a Kindle, featuring Goodreads list imports, and intuitive CLI search functionality."
          navigate="/endless-library"
          lottiePath="/lotties/endlesslibrary.json"
          date={"Dec '23"}
        />
        <TimelineBlock
          side="right"
          color="magenta"
          title="Robotic Ball Collector"
          skills={["Arduino", "Python", "C++"]}
          description="A robot designed to collect and drop off as many balls as possible, as quickly as possible, for the iRobot intern challenge."
          navigate="/robotic-ball-collector"
          lottiePath="/lotties/hungryhippo.json"
          date={"Nov '23"}
        />
        <TimelineBlock
          side="left"
          color="cyan"
          title="B Squared Designs"
          skills={["After Effects", "Figma", "Illustrator", "Photoshop"]}
          description="My animation and design company where I've managed and delivered projects for 200+ clients over the past eight years."
          navigate="https://bsquareddesigns.webflow.io/"
          lottiePath="/lotties/bsquared.json"
          date={"Since '15"}
          lottieWidth="w-30"
        />
        <TimelineBlock
          side="right"
          color="red"
          title="3D Design"
          skills={["SOLIDWORKS", "Illustrator"]}
          description="A collection of CAD work, 3D prints, and design iterations."
          navigate="/3d-design"
          lottiePath="/lotties/3ddesign.json"
          date={"Since '22"}
        />
        <TimelineBlock
          side="left"
          color="purple"
          title="Repeat Receipts"
          skills={["Python", "Flask", "Spotify API", "HTML/CSS"]}
          description="Ever wonder what songs you keep coming back to year after year? With Repeat Receipts, wonder no more."
          navigate="/repeat-receipts"
          lottiePath="/lotties/repeatreceipts.json"
          date={"Dec '22 - Jan '23"}
        />
        <TimelineBlock
          side="right"
          color="green"
          title="This Website"
          skills={["React", "Typescript", "Figma", "Tailwind CSS"]}
          description="This very website was designed and built by me, to uniquely show off my projects and skills."
          navigate="https://github.com/bbrown430/brianbrown.io"
          lottiePath="/lotties/thiswebsite.json"
          date={"Since '23"}
        />
      </div>
    </div>
  );
};

export default Timeline;
