import ProjectBlock from "@/components/project-page/project-block";
import ProjectHeader from "@/components/project-page/project-header";

const SmartBlinds: React.FC = () => {
  return (
    <div className="flex flex-col items-between justify-center gap-6 md:gap-12">
      <ProjectHeader
        title="Smart Blinds"
        subtitle="A smart solution to a daily problem."
        videoUrl="https://video.gumlet.io/684057f80f8d7a0518328bbc/68406f0ced94500acc2ab68e/main.m3u8"
        thumbnail="https://video.gumlet.io/684057f80f8d7a0518328bbc/68406f0ced94500acc2ab68e/thumbnail-1-0.png?v=1749053200749"
        buttonText="GitHub Repo"
        buttonColor="yellow"
        buttonLink="https://github.com/bbrown430/smartblinds"
      />
      <div className="flex flex-col gap-8 md:gap-4">
        <ProjectBlock
          title="The Problem"
          paragraphText="I love the glow of natural light, but I hate having to get up and fumble with my blinds on both windows multiple times a day."
        />
        <ProjectBlock
          title="The Solution"
          paragraphText="Automatically control my blinds via location and timing automations, voice commands, and phone control, without it being an eyesore."
        />
        <ProjectBlock
          title="Outside Research"
          paragraphText="As with most brilliant ideas, somebody had thought of this before. As this was my first electronics project, I took all the help I could get. A similar project utilized a 12V stepper motor, motor driver, ESP32, buck converter, and 12V power supply, so I followed along with those component recommendations."
          imageLink="images\smart-blinds\outside-research.png"
          altText="components used for project"
        />
        <ProjectBlock
          title="Internal Research"
          paragraphText="I first had to understand how my blinds worked. They were controlled by the rotation of a wand, which was connected to a tilt mechanism, which was connected to the axle. This axle would then rotate the drum and cradle, which adjusts the openness of the blinds. Rotating this axle was what really mattered, as that rotation would in turn adjust the openness of the blinds as a whole."
          imageLink="images\smart-blinds\internal-research.png"
          altText="labeled diagram of blinds mechanism"
          mediaWidth="2/3"
        />
        <ProjectBlock
          title="Retrofitting"
          paragraphText="To electronically control these blinds, I would need to replace the wand and gearbox with a motor. I began by taking measurements of the existing gearbox to recreate it in SolidWorks. With the outer geometry kept identical, I could then subtract out the center of it to account for the motor. This would allow me to friction fit the motor enclosure into the existing blinds rail. To connect the stepper motor shaft to the blind axle, I designed an adaptor to connect the two."
          imageLink="images\smart-blinds\retrofitting.png"
          altText="stepper motor with shaft adapter"
          mediaWidth="4/5"
        />
        <ProjectBlock
          title="Prototyping"
          paragraphText="To start out, I prototyped the circuit design using a breadboard. It was important to me that there were as few cables as possible connecting to the circuit, so I utilized a single 12V power supply, and stepped that down to 5V to power the ESP32. Once satisfied with the prototype, I decided to take this project to the next level by designing a PCB that could control 2 separate blinds, all from one circuit."
          imageLink="images\smart-blinds\prototyping.png"
          altText="wiring diagram of components"
        />
        <ProjectBlock
          title="PCB Design"
          paragraphText={`The PCB needed to accommodate two DRV8825 motor drivers, an LM7805 12V to 5V voltage regulator, two capacitors, two 1x4 headers, a barrel jack, mounting holes, and an ESP32. I began by designing the schematic, and then moved on to the PCB design in KiCad. I fit the design into as small a footprint as possible, and laid out the components to minimize the trace lengths. After the PCB was fabricated, the assembly and soldering was fairly simple. The end product was a much more attractive and compact system than the prototyped breadboard.`}
          imageLink="images\smart-blinds\pcb-design.png"
          altText="pcb layout and 3d render"
        />
        <ProjectBlock
          title="Programming"
          paragraphText="By using an ESP 32, I was able to use the breadth of Arduino libraries that already exist. HomeSpan, a library for creating ESP32 based HomeKit devices streamlined a lot of the work that needed to be done. Leveraging the EasyDriver stepper motor library, I developed the necessary code to control the stepper motor. Although it took some troubleshooting, the motors were now being controlled through the iOS Home app."
        />
        <ProjectBlock
          title="Housing"
          paragraphText="To house all the PCB, I designed as small of a case as possible, while still being functional and aesthetically pleasing. The case has 2 standoffs to secure the PCB, and ports for the barrel jack, USB port, and motors. The lid and base have ventilation on the top and bottom, and secure together using M3 hardware."
          imageLink="images\smart-blinds\housing.png"
          altText="3d render of case for pcb and components"
          mediaWidth="2/3"
        />
        <ProjectBlock
          title="Installation"
          paragraphText={`Installation was as simple as slipping the motor enclosure into the blind rail and connecting the blind axle to the motor. I then ran the motor cable to the node. All I had to do now was fine tune the rotational values to correspond to the rotation of my window axle. Once calibrated, the project was complete!`}
        />
        <ProjectBlock
          title="Controlling"
          paragraphText={`There are 3 main ways I control the blinds:\n
            - **Automations:** Open the blinds with my alarm, close the blinds at sunset, open the blinds when I arrive home during the day, etc.
            - **Voice Control: “Hey Siri, open the blinds…”
            - **App Control: ** Basic slider / button control within the Home app`}
          imageLink="images\smart-blinds\controlling.png"
          altText="homepod, homekit, and iPhone with screenshot"
        />
        <ProjectBlock
          title="Reflection"
          paragraphText={`When I started this project, I had very little practical electronics experience outside of circuitry fundamentals and some freshman year Arduino projects. By the time I finished, I was amazed at how much I learned and achieved. Over half a year later, I am still super proud of how this turned out. While closing and opening the blinds is a very simple task, it’s a tedious one, and these smart blinds have truly saved me hours.`}
        />
      </div>
    </div>
  );
};

export default SmartBlinds;
