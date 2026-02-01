import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepperContextValue {
  activeStep: number;
  totalSteps: number;
  setActiveStep: (step: number) => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isCompleted: (step: number) => boolean;
  isActive: (step: number) => boolean;
}

const StepperContext = React.createContext<StepperContextValue | undefined>(undefined);

export function useStepper() {
  const context = React.useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
}

interface StepperProps {
  activeStep: number;
  onStepChange?: (step: number) => void;
  children: React.ReactNode;
  className?: string;
}

export function Stepper({ activeStep, onStepChange, children, className }: StepperProps) {
  const childrenArray = React.Children.toArray(children);
  const totalSteps = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type === Step
  ).length;

  const setActiveStep = React.useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        onStepChange?.(step);
      }
    },
    [onStepChange, totalSteps]
  );

  const goToNextStep = React.useCallback(() => {
    setActiveStep(Math.min(activeStep + 1, totalSteps - 1));
  }, [activeStep, setActiveStep, totalSteps]);

  const goToPrevStep = React.useCallback(() => {
    setActiveStep(Math.max(activeStep - 1, 0));
  }, [activeStep, setActiveStep]);

  const isCompleted = React.useCallback(
    (step: number) => step < activeStep,
    [activeStep]
  );

  const isActive = React.useCallback(
    (step: number) => step === activeStep,
    [activeStep]
  );

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        totalSteps,
        setActiveStep,
        goToNextStep,
        goToPrevStep,
        isCompleted,
        isActive,
      }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </StepperContext.Provider>
  );
}

interface StepperHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function StepperHeader({ children, className }: StepperHeaderProps) {
  const { totalSteps, activeStep } = useStepper();
  const progressPercentage = (activeStep / (totalSteps - 1)) * 100;

  return (
    <div className={cn("mb-8", className)}>
      {/* Progress bar */}
      <div className="relative mb-8">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-border">
          <div
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="relative flex justify-between">{children}</div>
      </div>
    </div>
  );
}

interface StepProps {
  children?: React.ReactNode;
  className?: string;
}

export function Step({ children, className }: StepProps) {
  return <div className={cn("", className)}>{children}</div>;
}

interface StepIndicatorProps {
  step: number;
  label: string;
  description?: string;
  className?: string;
}

export function StepIndicator({ step, label, description, className }: StepIndicatorProps) {
  const { isCompleted, isActive, setActiveStep, activeStep } = useStepper();
  const completed = isCompleted(step);
  const active = isActive(step);
  const clickable = step <= activeStep;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 cursor-default",
        clickable && "cursor-pointer",
        className
      )}
      onClick={() => clickable && setActiveStep(step)}
    >
      <div
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
          completed && "border-primary bg-primary scale-100",
          active && "border-primary bg-primary/10 scale-110 ring-4 ring-primary/20",
          !completed && !active && "border-muted-foreground/30 bg-background"
        )}
      >
        {completed ? (
          <Check className="h-5 w-5 text-primary-foreground animate-stepper-check" />
        ) : (
          <span
            className={cn(
              "text-sm font-semibold transition-colors",
              active ? "text-primary" : "text-muted-foreground"
            )}
          >
            {step + 1}
          </span>
        )}
      </div>
      <div className="text-center hidden sm:block">
        <p
          className={cn(
            "text-sm font-medium transition-colors",
            active || completed ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {label}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
    </div>
  );
}

interface StepContentProps {
  step: number;
  children: React.ReactNode;
  className?: string;
}

export function StepContent({ step, children, className }: StepContentProps) {
  const { isActive } = useStepper();

  if (!isActive(step)) return null;

  return (
    <div
      className={cn(
        "animate-stepper-slide-in",
        className
      )}
    >
      {children}
    </div>
  );
}

interface StepperFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function StepperFooter({ children, className }: StepperFooterProps) {
  return (
    <div className={cn("mt-8 flex items-center justify-between gap-4", className)}>
      {children}
    </div>
  );
}
