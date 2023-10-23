import { cn } from "@/app/utils/utils";
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from "react";
import { Flex } from "@/app/components/Container/Flex";
import { statusStyles } from "@/app/helpers/dataObject";

const infoStatusVariants = cva(
  'justify-end',
  {
    variants: {
      variant: {
        rwd: 'w-fit text-xs font-medium rounded-sm md:text-base',
        
      }
    }
  }
)
interface InfoStatusProps extends HTMLAttributes<HTMLDivElement>,
VariantProps<typeof infoStatusVariants>
{
  status: string;
}

const InfoStatus: React.FC<InfoStatusProps> = ({
  status,
  className,
  variant,
  ...props
}) => {
  const style = statusStyles[status] || {};

  return (
    <Flex className={cn(infoStatusVariants({variant, className}))} {...props}>
      <p className={`px-2 py-[0.6rem] md:py-0 md:px-4 md:font-medium rounded-md ${style.className}`}>{style.text}</p>
    </Flex>
  );
};

export { InfoStatus , infoStatusVariants};
