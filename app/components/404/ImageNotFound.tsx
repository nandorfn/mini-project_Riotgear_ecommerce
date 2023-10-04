import { bebas_neue } from "@/app/utils/fonts";

const ImageNotFound: React.FC = () => {
    return (
        <>
          <div className={`${bebas_neue.className} text-6xl flex flex-col w-full h-[500px] justify-center items-center bg-base-100 border-accent border-2 rounded-xl`}>
            <p>Sorry...</p>
            <h1>Image Not Found</h1>
          </div>
        </>
    );
};

export default ImageNotFound;