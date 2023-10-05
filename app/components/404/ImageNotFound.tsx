import { Flex } from "../Container/Flex";

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
            <p>Sorry...</p>
            <h1>Image Not Found</h1>
          </Flex>
        </>
    );
};

export default ImageNotFound;