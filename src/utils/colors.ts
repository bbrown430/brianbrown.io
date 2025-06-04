export type ColorVariant =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "cyan"
  | "blue"
  | "purple"
  | "magenta"
  | "base";

interface ColorConfig {
  text: string;
  hover: string;
  bg: string;
  border: string;
  muted: string;
}

export const colorMap: Record<ColorVariant, ColorConfig> = {
  red: {
    text: "text-flexoki-red-400",
    hover: "hover:bg-flexoki-red-400",
    bg: "bg-flexoki-red-400",
    border: "border-flexoki-red-400",
    muted: "text-flexoki-red-600",
  },
  orange: {
    text: "text-flexoki-orange-400",
    hover: "hover:bg-flexoki-orange-400",
    bg: "bg-flexoki-orange-400",
    border: "border-flexoki-orange-400",
    muted: "text-flexoki-orange-600",
  },
  yellow: {
    text: "text-flexoki-yellow-400",
    hover: "hover:bg-flexoki-yellow-400",
    bg: "bg-flexoki-yellow-400",
    border: "border-flexoki-yellow-400",
    muted: "text-flexoki-yellow-600",
  },
  green: {
    text: "text-flexoki-green-400",
    hover: "hover:bg-flexoki-green-400",
    bg: "bg-flexoki-green-400",
    border: "border-flexoki-green-400",
    muted: "text-flexoki-green-600",
  },
  cyan: {
    text: "text-flexoki-cyan-400",
    hover: "hover:bg-flexoki-cyan-400",
    bg: "bg-flexoki-cyan-400",
    border: "border-flexoki-cyan-400",
    muted: "text-flexoki-cyan-600",
  },
  blue: {
    text: "text-flexoki-blue-400",
    hover: "hover:bg-flexoki-blue-400",
    bg: "bg-flexoki-blue-400",
    border: "border-flexoki-blue-600",
    muted: "text-flexoki-blue-600",
  },
  purple: {
    text: "text-flexoki-purple-400",
    hover: "hover:bg-flexoki-purple-400",
    bg: "bg-flexoki-purple-400",
    border: "border-flexoki-purple-400",
    muted: "text-flexoki-purple-600",
  },
  magenta: {
    text: "text-flexoki-magenta-400",
    hover: "hover:bg-flexoki-magenta-400",
    bg: "bg-flexoki-magenta-400",
    border: "border-flexoki-magenta-400",
    muted: "text-flexoki-magenta-600",
  },
  base: {
    text: "text-flexoki-base-950",
    hover: "hover:bg-flexoki-base-950",
    bg: "bg-flexoki-base-950",
    border: "border-flexoki-base-950",
    muted: "text-flexoki-base-700",
  },
};

// Helper functions for getting specific color classes
export const getColorClasses = (color: ColorVariant) => colorMap[color];

export const getTextColor = (color: ColorVariant) => colorMap[color].text;
export const getHoverColor = (color: ColorVariant) => colorMap[color].hover;
export const getBgColor = (color: ColorVariant) => colorMap[color].bg;
export const getBorderColor = (color: ColorVariant) => colorMap[color].border;
export const getMutedColor = (color: ColorVariant) => colorMap[color].muted;

// For dynamic color application (useful when color is a string prop)
export const getColorClassesByString = (colorString: string): ColorConfig => {
  // If it's already a valid ColorVariant, use it
  if (isColorVariant(colorString)) {
    return colorMap[colorString];
  }
  
  // If it's a custom color string, return a basic structure
  // This handles cases where you pass custom colors like "blue-500"
  return {
    text: `text-${colorString}`,
    hover: `hover:bg-${colorString}`,
    bg: `bg-${colorString}`,
    border: `border-${colorString}`,
    muted: `text-${colorString.replace('-400', '-600')}`, // Attempt to make it darker
  };
};

// Type guard to check if a string is a valid ColorVariant
export const isColorVariant = (color: string): color is ColorVariant => {
  return Object.keys(colorMap).includes(color);
};

// Generate variant classes for components that need multiple color states
export const generateColorVariants = (baseClasses: string, color: ColorVariant) => {
  const colors = colorMap[color];
  return {
    default: `${baseClasses} ${colors.text} ${colors.border}`,
    hover: `${baseClasses} ${colors.hover} ${colors.border}`,
    active: `${baseClasses} ${colors.bg} border-transparent text-white`,
  };
};