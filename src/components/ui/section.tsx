import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "glass" | "elevated";
}

export const Section = ({ children, className, id, variant = "default" }: SectionProps) => {
  const baseClasses = "relative py-20 px-4 sm:px-6 lg:px-8";
  
  const variants = {
    default: "",
    glass: "glass-card",
    elevated: "bg-surface-elevated"
  };

  return (
    <section 
      id={id}
      className={cn(baseClasses, variants[variant], className)}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};