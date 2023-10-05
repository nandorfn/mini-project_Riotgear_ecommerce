import { cn } from '@/app/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'btn w-fit ',
  {
    variants: {
      variant: {
        default: 'btn-base-200 hover:bg-base-100',
        red: 'btn-error',
        success: 'btn-success capitalize',
        info: 'btn-info capitalize',
        grey: 'btn-base-300',
        zinc: 'bg-[#D9D9D9]',
        checked: 'bg-accent'
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
  ...props
}) => {
  return (
    <>
      <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
    </>
  );
};

export { Button, buttonVariants };