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
      }
    },
    defaultVariants: {
      variant: 'default',
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

const exported = {
  Button,
  buttonVariants,
};

export { Button, buttonVariants };