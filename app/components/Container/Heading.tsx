import { AllHTMLAttributes } from "react";
import { cn } from "@/app/utils/utils";
import { bebas_neue } from "@/app/utils/fonts";
import { VariantProps, cva } from 'class-variance-authority';

const headingVariants = cva(
  'text-base',
  {
  variants: {
    variant: {
      pName: 'text-2xl font-medium lg:text-4xl',
      first: 'text-[4rem]',
      second: 'text-[3.2rem]',
      third: 'text-[2.625rem]',
      fourth: 'text-[2.25rem]',
      fourthRwd: 'text-2xl md:text-[2.25rem]',
      five: 'text-lg md:text-[1.25rem]',
    },
    fs: {
      lg: 'text-lg',
      xl: 'text-xl',
      xl2: 'text-2xl',
      xl3: 'text-3xl',
      xl4: 'text-4xl',
      xl5: 'text-5xl',
      main: 'text-4xl md:text-7xl'
    },
    align: {
      start: 'items-start',
    },
    clr: {
      base3: 'text-base-300'
    },
    bold: {
      normal: 'font-normal',
      medium: 'font-medium'
    },
    ff: {
      neue: bebas_neue.className
    }
  },
  defaultVariants: {
    bold: 'medium'
  }
  }
);
interface HeadingProps extends AllHTMLAttributes<HTMLHeadingElement>,
VariantProps<typeof headingVariants> {}

const Heading: React.FC<HeadingProps> = ({
  variant,
  fs,
  align,
  clr,
  className,
  bold,
  ...props
}) => {
    return (
        <>
          <h1 className={cn(headingVariants({variant, fs, align, clr, bold, className}))} {...props}></h1>
        </>
    );
};

export{ Heading, headingVariants };