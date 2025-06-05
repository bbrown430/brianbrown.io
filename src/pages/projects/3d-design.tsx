import ProjectHeader from "@/components/project-page/project-header";
import ThreeDProjectBlock from "@/components/project-page/3d-project-block";

const ThreeDDesign: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-12">
      <ProjectHeader
        title="3D Design"
        subtitle="I love 3D printing to solve life's big and small inconveniences. Here are a few examples!"
      />
      <div className="flex flex-col gap-20">
        <ThreeDProjectBlock
          title="Wavy Lamp"
          theProblem="I want cozy lighting in my room, but I don't want to shell out the prices for a fun designer lamp."
          theSolution="A wavy lamp shade and tripod stand to accommodate a standard lightbulb socket."
          renderImage="/images/3d-design/lamp-render.png"
          resultImage="/images/3d-design/lamp-photo.jpeg"
          renderAltText="render of 3d modeled lamp"
          resultAltText="Photograph of printed lamp"
        />
        <ThreeDProjectBlock
          title="Vinyl Record Corner Shelf"
          theProblem="I want to display one of my records, but the only wall space I have is in the corner, due to large windows by my record player."
          theSolution="A vinyl record corner shelf, that attaches to the wall using Velcro Command strips."
          renderImage="/images/3d-design/shelf-render.png"
          resultImage="/images/3d-design/shelf-photo.png"
          renderAltText="render of 3d modeled lamp"
          resultAltText="Photograph of printed lamp"
        />
       <ThreeDProjectBlock
          title="Diabetes Supplies Caddies"
          theProblem="I have Type 1 Diabetes, which means I have a lot of medical supplies that need to be efficiently stored."
          theSolution="A storage caddy for 13 Omnipods, and 11 vials of insulin, designed to fit perfectly in my IKEA KALLAX drawer."
          renderImage="/images/3d-design/caddy-render.png"
          resultImage="/images/3d-design/caddy-photo.png"
          renderAltText="render of 3d modeled lamp"
          resultAltText="Photograph of printed lamp"
        />
        <ThreeDProjectBlock
          title="Closet Light Mount"
          theProblem="My closet is too dark. I have a motion activated lightbar, but I can't mount it at an angle that properly lights my entire closet."
          theSolution="A mounting solution that the lightbar can slide into, allowing for easy removal while charging, and adjustable lighting angles."
          renderImage="/images/3d-design/mount-render.png"
          resultImage="/images/3d-design/mount-photo.png"
          renderAltText="render of 3d modeled lamp"
          resultAltText="Photograph of printed lamp"
        />
        <ThreeDProjectBlock
          title="Granny Square Blocking Board"
          theProblem="My friend was crocheting granny squares and needed a way to uniformly shape the squares."
          theSolution="A filament conscious adjustable granny square blocking board, utilizing wooden skewers as the pins."
          renderImage="/images/3d-design/blocking-render.png"
          resultImage="/images/3d-design/blocking-photo.jpeg"
          renderAltText="render of 3d modeled lamp"
          resultAltText="Photograph of printed lamp"
        />
      </div>
    </div>
  );
};

export default ThreeDDesign;
