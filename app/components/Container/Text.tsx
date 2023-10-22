import { cn } from "@/app/utils/utils";
import { VariantProps, cva } from 'class-variance-authority';
import { AllHTMLAttributes } from "react";

const textVariants = cva(
  'text-base',
  {
  variants: {
    variant: {
      status: ' rounded-md p-2 text-warning bg-yellow-200',
    },
    fs: {
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-2xl md:text-4xl'
    },
    align: {
      center: 'text-center',
    },
    clr: {
      zinc5: 'text-zinc-500',
      base3: 'text-base-300',
      grey: 'text-[#9FA0A2]'
    },
    bold: {
      normal: 'font-normal',
      medium: 'font-medium'
    }
  },
  defaultVariants: {
    bold: 'normal'
  }
  }
);
interface HeadingProps extends AllHTMLAttributes<HTMLParagraphElement>,
VariantProps<typeof textVariants> {}

const Text: React.FC<HeadingProps> = ({
  fs,
  variant,
  align,
  clr,
  className,
  bold,
  ...props
}) => {
    return (
        <>
          <p className={cn(textVariants({variant, fs, align, clr, bold, className}))} {...props}></p>
        </>
    );
};

export{ Text, textVariants };