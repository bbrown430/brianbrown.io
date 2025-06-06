import React from "react";
import SectionHeader from "../typography/section-header";
import SectionSubheader from "../typography/section-subheader";

interface ThreeDProjectBlockProps {
  title: string;
  theProblem: string;
  theSolution: string;
  renderImage?: string;
  resultImage?: string;
  renderAltText?: string;
  resultAltText?: string;
}

const ThreeDProjectBlock: React.FC<ThreeDProjectBlockProps> = ({
  title,
  theProblem,
  theSolution,
  renderImage,
  resultImage,
  renderAltText,
  resultAltText,
}) => {
  const parseText = (text: string) => {
    const lines = text.split(/\n+/);
    const elements: React.ReactNode[] = [];

    let inList = false;
    let listItems: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (/^[-*]\s+/.test(trimmed)) {
        inList = true;
        const content = trimmed.replace(/^[-*]\s+/, "");
        listItems.push(<li key={`li-${index}`}>{formatInline(content)}</li>);
      } else {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc list-inside mb-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }

        if (trimmed !== "") {
          elements.push(
            <p key={`p-${index}`} className="mb-2">
              {formatInline(trimmed)}
            </p>
          );
        } else {
          elements.push(<br key={`br-${index}`} />);
        }
      }
    });

    if (inList) {
      elements.push(
        <ul key={`ul-final`} className="list-disc list-inside mb-2">
          {listItems}
        </ul>
      );
    }

    return elements;
  };

  const formatInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      } else {
        return part;
      }
    });
  };

  return (
    <div className="flex flex-col md:px-4 gap-2">
      {/* Section Header */}
      <SectionHeader title={title} />

      {/* Problem and Solution Row */}
      <div className="flex flex-col md:flex-row mt-2 gap-2 md:gap-12">
        {/* The Problem */}
        <div className="flex-1 flex flex-col gap-2">
          <SectionSubheader title="The Problem" />
          <div className="text-muted-foreground text-lg">
            {parseText(theProblem)}
          </div>
        </div>

        {/* The Solution */}
        <div className="flex-1 flex flex-col gap-2">
          <SectionSubheader title="The Solution" />
          <div className="text-muted-foreground text-lg">
            {parseText(theSolution)}
          </div>
        </div>
      </div>

      {/* Render and Result Row */}
      {(renderImage || resultImage) && (
      <div className="flex flex-col md:flex-row mt-2 gap-2 md:gap-12">
          {/* The Render */}
          {renderImage && (
            <div className="flex-1 flex flex-col gap-4">
              <SectionSubheader title="The Renders" />
              <div className="flex justify-center items-center">
                <img
                  src={renderImage}
                  alt={renderAltText || "3D Render"}
                  className="max-h-120 w-auto rounded-lg object-contain"
                />
              </div>
            </div>
          )}

          {/* The Result */}
          {resultImage && (
            <div className="flex-1 flex flex-col gap-4">
              <SectionSubheader title="The Result" />
              <div className="flex justify-center items-center">
                <img
                  src={resultImage}
                  alt={resultAltText || "Final Result"}
                  className="max-h-120 w-auto rounded-lg object-contain"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ThreeDProjectBlock;
