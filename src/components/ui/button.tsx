import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ColorVariant, getColorClasses, getColorClassesByString, isColorVariant } from "@/utils/colors"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-background dark:hover:bg-input/50",
        "color-outline":
          "border-2 shadow-xs transition-all duration-200 ease-in-out",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Helper function to generate color-outline classes
const getColorOutlineClasses = (color: ColorVariant | string) => {
  const colorClasses = isColorVariant(color) 
    ? getColorClasses(color) 
    : getColorClassesByString(color);

  // Extract the actual color value from the class string
  // e.g., "border-flexoki-blue-400" -> "flexoki-blue-400"
  const colorValue = colorClasses.border.replace('border-', '');
  
  return {
    border: colorClasses.border,
    text: colorClasses.text,
    hoverBg: `hover:bg-${colorValue}`,
    hoverText: "hover:text-white",
  };
};

interface ButtonProps extends 
  React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: ColorVariant | string; // New color prop
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  color,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Handle color-outline variant separately to ensure proper class application
  if (variant === "color-outline" && color) {
    const colorClasses = isColorVariant(color) 
      ? getColorClasses(color) 
      : getColorClassesByString(color);
    
    // Extract color value for hover background
    
    const colorOutlineClassName = cn(
      // Base button classes without variant
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      // Size classes
      buttonVariants({ size, variant: undefined }),
      // Color-outline specific classes
      "border-2 shadow-xs bg-transparent",
      colorClasses.border,
      colorClasses.muted,
      colorClasses.hover,
      "hover:text-black",
      className
    );

    return (
      <Comp
        data-slot="button"
        className={colorOutlineClassName}
        {...props}
      />
    );
  }

  // Regular button variants
  const combinedClassName = cn(
    buttonVariants({ variant, size }),
    className
  );

  return (
    <Comp
      data-slot="button"
      className={combinedClassName}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps };