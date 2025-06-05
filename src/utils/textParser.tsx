// utils/textParser.ts
import React from "react";

export const formatInline = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g);

  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, linkText, url] = linkMatch;
      return (
        <a
          key={index}
          href={url}
          className="text-muted-foreground hover:text-flexoki-base-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      );
    } else if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    } else if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    } else {
      return part;
    }
  });
};

export const parseText = (text: string): React.ReactNode[] => {
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
      <ul key="ul-final" className="list-disc list-inside mb-2">
        {listItems}
      </ul>
    );
  }

  return elements;
};
