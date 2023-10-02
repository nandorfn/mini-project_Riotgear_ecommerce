import { cn } from '@/app/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'btn btn-sm w-14 ',
  {
    variants: {
      variant: {
        default: 'btn-base-200 hover:bg-base-100',
        red: 'btn-error',
        grey: 'btn-base-300',
        zinc: 'bg-[#D9D9D9]'
      },
      size: {
        sm: 'btn-sm',
        base: 'btn-base',
        lg: 'btn-lg',
      }
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }
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