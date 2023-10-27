import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";

const ImageNotFound: React.FC = () => {
    return (
        <>
          <Flex 
            variant={'col'} 
            clr={'white'} 
            align={'center'} 
            rounded={'xl'} 
            font={'neue'} 
            className='text-6xl h-[500px] border-accent border-2'>
            <Text>Sorry...</Text>
            <Heading>Image Not Found</Heading>
          </Flex>
        </>
    );
};

export default ImageNotFound;