import ProjectBlock from "@/components/project-page/project-block";
import ProjectHeader from "@/components/project-page/project-header";

const RoboticBallCollector: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  gap-12">
      <ProjectHeader
        title="Robotic Ball Collector"
        subtitle="The first-place award winning robot, from the iRobot Fall 2023 Hungry Hungry Hippo Intern Challenge."
        videoUrl="https://video.gumlet.io/684057f80f8d7a0518328bbc/684070480f8d7a0518335f90/main.m3u8"
        thumbnail="https://video.gumlet.io/684057f80f8d7a0518328bbc/684070480f8d7a0518335f90/thumbnail-1-0.png?v=1749054608471"
        buttonText="GitHub Repo"
        buttonLink="https://github.com/bbrown430/robotic-ball-collector"
        buttonColor="magenta"
      />
      <div className="flex flex-col gap-4">
        <ProjectBlock
          title="The Problem"
          paragraphText="Collect and drop off as many ball pit balls as possible, as quickly as possible, and do a better job than the opposing team."
        />
        <ProjectBlock
          title="The Solution"
          paragraphText="A ball collection robot built on the iRobot Create 3 platform."
        />
        <ProjectBlock
          title="Research and Inspiration"
          paragraphText="While there isn’t a booming “ball pit ball pickup” industry, this is a very real industry for tennis balls. Due to this, we began our research with established solutions for collecting tennis balls. When searching on YouTube, “4 life-changing tennis ball retrievers” served as all the inspiration we needed. We were most heavily inspired by the Inwatec Tennis Ball collector, and began brainstorming how to adapt this design to the footprint of a Create 3 robot."
          videoUrl="https://youtu.be/_RbL6qP_yyA"
        />
        <ProjectBlock
          title="Initial Sketch"
          paragraphText="We began by sketching a *rough* design of our robot. The design featured 3 main features: the spinner, the bin, and the backdoor. The spinner would be dual drove by two motors to launch balls up into the bin. This bin would contain the balls until we wanted to release them. When it was time to release them, the backdoor would open, allowing the balls to flow out freely due to the decline built into the bin. With this rough idea, our mechanical lead got to work designing."
          imageLink="images\robotic-ball-collector\sketch.png"
          altText="initial design sketch"
        />
        <ProjectBlock
          title="Mechanical Design"
          paragraphText="The CAD for the robot stayed very true to the initial sketches. While we had to experiment with different bin and spinner designs, the fundamentals of the CAD stayed consistent throughout the entire research and development process."
          imageLink="images\robotic-ball-collector\mechanical-design.png"
          altText="3d render of mechanical design"
        />
        <ProjectBlock
          title='Electrical Design'
          paragraphText='To control the spinner, we used two DG01D motors, connected to a L298N motor driver. While dual driving the spinner was likely overkill, we did not want to risk one motor getting overworked and stalling during the competition. To control the backdoor, we used a SG90 servo motor.  The motor driver and the servo motor were both connected to an Arduino Uno to allow for control.'
        />
        <ProjectBlock
          title="System Overview"
          paragraphText={`The heart of this robot was the iRobot Create 3. To interface with this robot and control its movement, I utilized the Python irobot_edu_sdk. To *actually* control the robot, I used a PS4 controller, and read the inputs from it to determine the proper motor values for differential driving. \n To control the auxiliary components, I utilized an HC-06 Bluetooth module connected to the Arduino Uno. This allowed me to map motor controls to button presses on the PS4 controller. When a button was pressed, I would send a message from my computer to the HC-06 to be interpreted by the Arduino, and in turn control the motor.\n
All of this communication and control was done through a Python script and Arduino file, which can be found in the GitHub repository.`}
          imageLink="images\robotic-ball-collector\system-overview.png"
          altText="flowchart of system overview"
        />
        <ProjectBlock
          title="Controls Overview"
          paragraphText={`To control the robot, I mapped a control scheme that would be intuitive to anyone who has played a driving game before. To control the spinner and back door, I mapped the “on” and “off” controls to the four face buttons. I mapped the control of the spinner speed to the bumpers, and the acceleration and braking to the triggers. This results in a one controller solution for every feature of our robot, with no need to fiddle around with other hardware.`}
          imageLink="images\robotic-ball-collector\controls-overview.png"
          altText="controls diagram of a dualshock 4"
        />
        <ProjectBlock
          title="The Competition"
          paragraphText={`On competition day, we were very pleased with how our robot performed, and were able to take home the gold. Our extensive testing let us prepare for just about any obstacles and edge cases we would encounter, and we didn't experience any surprises once in the arena. As the driver of the robot, I felt that it controlled like a dream, and I had no difficulty maneuvering around the arena, even when there was an opposing robot to juke around.`}
          videoUrl="https://video.gumlet.io/684057f80f8d7a0518328bbc/684071dced94500acc2ad062/main.m3u8"
          videoThumbnail="https://video.gumlet.io/684057f80f8d7a0518328bbc/684071dced94500acc2ad062/thumbnail-1-0.png?v=1749054713409"
        />
        <ProjectBlock
          title="Reflection"
          paragraphText="This was a great project to get some hands-on robotics experience solving a semi real world problem. I took on the role of project manager and software lead, and I learned a lot in both aspects. As project manager, I learned how to set deadlines and delegate tasks, and did so through a Trello board. As software lead, I gained experience reading controller input, and using various Bluetooth communication protocols. As a general takeaway, I learned that good is the enemy of great, but perfect is the enemy of good enough. At one point we had everything fully finished with our design but decided to try out a new spinner material. This material ended up being too rigid, causing both motors to stall and burn out, and they both had to be replaced. Sometimes you don’t need to push it if you’re already 99% there!"
          imageLink="images\robotic-ball-collector\reflection.jpg"
          altText="isometric view of led channels"
        />
      </div>
    </div>
  );
};

export default RoboticBallCollector;
