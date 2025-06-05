import ProjectBlock from "@/components/project-page/project-block";
import ProjectHeader from "@/components/project-page/project-header";

const PlayPiano: React.FC = () => {
  return (
    <div className="flex flex-col items-between justify-center  gap-12">
      <ProjectHeader
        title="P.L.A.Y Piano"
        subtitle="An all-in-one piano learning solution, bringing an illuminated Guitar Hero experience to the piano. The 1st place winning Northeastern Spring 2024 ECE Capstone Design project."
        videoUrl="https://video.gumlet.io/684057f80f8d7a0518328bbc/68405815ed94500acc29efc5/main.m3u8"
        thumbnail="https://video.gumlet.io/684057f80f8d7a0518328bbc/68405815ed94500acc29efc5/thumbnail-1-0.png?v=1749047386624"
      />
      <div className="flex flex-col gap-4">
        <ProjectBlock
          title="The Problem"
          paragraphText="A gamified piano learning system, rolled into an all-in-one physical product. With LEDs above and inside the keys, the falling note effect will show the user where and when to press the keys."
        />
        <ProjectBlock
          title="The Solution"
          paragraphText="Learning the piano can be expensive, boring, and daunting task. Online tools exist but fall short, and fail to offer a cohesive, comprehensive experience."
        />
        <ProjectBlock
          title="Product Architecture"
          imageLink="images\play-piano\product-architecture.png"
          altText="product architecture flowchart"
        />
        <ProjectBlock
          title="Research and Inspiration"
          paragraphText="When conceptualizing the idea for this project, my main inspirations came from rhythm games like **Guitar Hero** and the popular **Synthesia** YouTube piano tutorials. While **Guitar Hero** won't *actually* teach you how to play guitar, it is an engaging game that keeps the player coming back. Alternatively, these **Synthesia** videos can provide a very useful tool while learning piano, even if it is just note memorization. I aimed to capture the best aspects of both, into an all-in-one gamified, learning solution."
          videoUrl="https://youtu.be/D-X1CwyQLYo"
        />
        <ProjectBlock
          title="Construction"
          paragraphText="We based this project around a 61 key MIDI piano, and stripped it down to its PCBs and baseplate. Everything else was built from scratch, to meet our exact specifications. This includes, but is not limited to: all new 3D-printed keys, a laser cut black acrylic housing, a frosted acrylic LED panel, a wooden exterior shell, a wooden monitor stand, a light up logo, an exterior I/O port, stereo speakers, and 665 RGB LEDs."
          imageLink="images\play-piano\assembly.png"
          altText="piano assembled top down view"
        />
        <ProjectBlock
          title="Keys"
          paragraphText="In order to have keys that could be illuminated, I needed to reverse engineer and completely remodel the keys that came with our originally purchased keyboard. I achieved this through extensive caliper measurements, and even more extensive SOLIDWORKS modeling. Once the keys were 1:1 with the original keys, I then added channeling to route an LED strip, and necessary wiring through the keys. It took about 10 iterations of rapid prototyping to get it perfect, but once perfected, was easily scalable as the octaves were identical to one another. The keys were printed out of a translucent white and black PLA filament, which refracted the light very attractively."
          imageLink="images\play-piano\keys.png"
          altText="isometric view of piano keys"
        />
        <ProjectBlock
          title='The "Waterfall" Effect'
          paragraphText='To have the notes trail down above the keys, creating the "waterfall" effect, I designed a channeled panel to appropriately space the LED strips with the center of the piano keys. A frosted acrylic panel was laid over this channeled panel, and I experimented with various heights of diffusion between, for an optimal balance between per pixel clarity and smoothness. These panels interlocked with one another, and the end panels screwed into the outer housing using M3 hardware.'
          imageLink="images\play-piano\waterfall.png"
          altText="isometric view of led channels"
        />
        <ProjectBlock
          title="External Housing"
          paragraphText='To create an external housing that met our specifications, I had to consider the dimensions of the originally included keyboard housing, and the modifications necessary for our additions. This housing needed to accommodate the keys themselves, a control panel, stereo speakers, the waterfall channels, and a light up logo. Due to the size of this housing and budgetary constraints, I opted to fabricate it out of 1/4" glossy black acrylic. For the panel over the waterfall channels, I used a 1/4" frosted acrylic. These 25 individual acrylic pieces were joined together using superglue, and M3 hardware.'
          imageLink="images\play-piano\external-housing.png"
          altText="laser cutting file and isometric view of acrylic assembly"
        />
        <ProjectBlock
          title="Additional Parts"
          paragraphText={`In addition to the keys and housing, I designed a control panel to re-use the keyboards' original function buttons, and control knobs. These would be essential for controlling volume, pausing, and pitch shifting. This panel attached to the external housing with M3 hardware. Additionally, I designed a 3D logo for the right side of the external housing, which would illuminate red, yellow, or green, to give feedback, similar to the "Rock" meter in **Guitar Hero**.`}
          imageLink="images\play-piano\additional-parts.png"
          altText="isometric view of miscelaneous parts"
        />
        <ProjectBlock
          title="User Experience"
          paragraphText="One non-negotiable for this project was that the end user would never have to interact with a mouse, keyboard, touch screen, etc. All of the interaction would happen through the keyboard itself, in order to truly provide an all-in-one experience. To achieve this, we associated colored UI elements with colored physical piano keys. For the user to select an on-screen element, they would simply select the key that is the same color as the on-screen element. This proved very intuitive in user testing and allowed for a seamless user experience."
          imageLink="images\play-piano\user-experience.png"
          altText="photograph of UI on piano screen"
        />
        <ProjectBlock
          title="User Interface"
          paragraphText="When designing the user interface, I prioritized bold, simple, playful elements. As the user would be interacting with the UI solely through the piano keys, an overcomplicated UI would break the user experience. I began by designing everything in Figma, and once I was satisfied, I recreated everything in React, stylizing with Tailwind CSS. The main screens of the UI consisted of the splash screen, mode select, song select, the in-song screen, and the pause menu."
          imageLink="images\play-piano\user-interface.png"
          altText="screenshots of user interface"
        />
        <ProjectBlock
          title="Modes"
          paragraphText={`The PLAY Piano can operate in three modes:\n
- **Learn: Learn to play your favorite songs with gentle pacing to match your skills.** This means the song will not progress until the user plays the correct note. If the wrong note is played or no note is played, the progression will stall until the correct note condition is met.
- **Play: Play along to your favorite songs and go for a new high score!** This mode is the gamiest, and simply progresses through the song regardless of how well the user is playing. Based on timing and accuracy, the users score will be algorithmically calculated.
- **Free: Play around and watch the lights dance around your fingers.** This mode is a visualizer that produces a light show as the user plays the piano. Each note on the octave has a corresponding color and will produce an outward explosion effect based on note velocity. Playing multiple notes at once blends a gradient of the note's colors, producing a beautiful effect.`}
        />
        <ProjectBlock
          title="Reflection"
          paragraphText="It was very rewarding to win 1st place out of 18 teams, and it truly felt like all of our hard work had paid off. I am incredibly proud of how this project turned out, and my team. I only discussed the parts I worked on in this writeup, but it was a massive collaborative effort. The most rewarding part of this whole project was watching everybody interact with our product. While my group members and I thought we had made something exceptionally cool, it's a different feeling altogether when other people express to you how cool it truly is. Everybody wanted a turn, and their reactions as they played are my fondest memories from this project. The judges made note of how polished every aspect of our product was and asked if we had intentions of patenting our work. It was really a labor of love, and it was awesome when other people loved it as much as we did."
          imageLink="images\play-piano\reflection.jpg"
          altText="group picture"
          mediaWidth="2/3"
        />
      </div>
    </div>
  );
};

export default PlayPiano;
