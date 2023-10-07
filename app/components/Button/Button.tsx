import { cn } from '@/app/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'btn w-fit ',
  {
    variants: {
      variant: {
        login: 'disabled:bg-base-200 bg-black text-white',
        primary: 'btn-primary',
        default: 'btn-base-200 hover:bg-base-100',
        red: 'btn-error',
        success: 'btn-success capitalize',
        info: 'btn-info capitalize',
        grey: 'btn-base-300',
        zinc: 'bg-[#D9D9D9]',
        checked: 'bg-accent',
        rounded: 'rounded-full btn-sm p-4'
      },
      clr: {
        black: 'bg-black text-white',
        grey: 'bg-zinc-300',
        white: 'bg-base-100',
        brown: 'bg-amber-950',
        red: 'bg-red',
        green: 'bg-green-700',
        blue: 'bg-blue-500 text-white',
        yellow: 'bg-yellow-400',
        orange: 'bg-orange-400',
      },
      size: {
        sm: 'btn-sm',
        base: 'btn-base',
        lg: 'btn-lg',
        wide: 'btn-wide',
        full: 'w-full',
        half: 'w-[48.5%]'
      },
      text: {
        normal: 'capitalize'
      },
      font: {
        normal: 'font-normal',
        med: 'font-medium',
      }
    },
    defaultVariants: {
      variant: 'default',
      text: 'normal',
    }
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, 
VariantProps<typeof buttonVariants> {}
const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  clr,
  ...props
}) => {
  return (
    <>
      <button className={cn(buttonVariants({ variant, clr,  size, className }))} {...props} />
    </>
  );
};

export { Button, buttonVariants };