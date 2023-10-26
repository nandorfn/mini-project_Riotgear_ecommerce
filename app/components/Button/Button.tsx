import { cn } from '@/app/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'btn w-fit disabled:opacity-50',
  {
    variants: {
      variant: {
        black: 'bg-black text-white capitalize rounded-md',
        white: 'bg-white text-black capitalize rounded-md border-2 border-black',
        info: 'bg-blue-500 capitalize text-white hover:bg-blue-700',
        success: 'btn-success capitalize text-white hover:bg-emerald-600',
        checked: 'bg-accent w-[2.5rem]',
        sizeBtn: 'bg-[#D9D9D9] text-[#3E3E3E] border-0 w-[2.5rem] text-[0.875rem]',
        red: 'btn-error text-white hover:bg-red-700',
        link: 'btn-sm px-6 bg-none border rounded-full shadow-sm bg-base-100 hover:bg-success hover:border-none whitespace-nowrap ',
      // OLD
        login: 'disabled:bg-base-200 bg-black text-white',
        primary: 'btn-primary',
        default: 'btn-base-200 hover:bg-base-100',
        rounded: 'rounded-full btn-sm p-4'
      },
      clr: {
        black: 'bg-black text-white',
        grey: 'bg-zinc-300',
        white: 'bg-base-100',
        brown: 'bg-amber-950',
        red: 'bg-red text-white',
        zinc: 'bg-[#D9D9D9]',
        green: 'bg-green-700',
        blue: 'bg-blue-500 text-white',
        yellow: 'bg-yellow-400',
        orange: 'bg-orange-400',
      },
      size: {
        sm: 'btn-sm',
        smWide: 'btn-sm btn-wide',
        base: 'w-36',
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