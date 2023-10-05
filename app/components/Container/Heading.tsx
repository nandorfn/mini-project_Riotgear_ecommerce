import { bebas_neue } from "@/app/utils/fonts";
import { cn } from "@/app/utils/utils";
import { VariantProps, cva } from 'class-variance-authority';
import { AllHTMLAttributes } from "react";

const headingVariants = cva(
  'text-base',
  {
  variants: {
    fs: {
      lg: 'text-lg',
      xl2: 'text-2xl',
      xl3: 'text-3xl',
      xl4: 'text-4xl',
      xl5: 'text-5xl',
      main: 'text-5xl md:text-7xl'
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
  fs,
  align,
  clr,
  className,
  ...props
}) => {
    return (
        <>
          <h1 className={cn(headingVariants({fs, align, clr, className}))} {...props}></h1>
        </>
    );
};

export{ Heading, headingVariants };