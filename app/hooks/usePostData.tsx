import axios from "axios";
import { ProductData } from "@/app/utils/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type usePostDataProps = {
  setData: React.Dispatch<React.SetStateAction<ProductData[]>>;
}

const usePostData = ({ setData }: usePostDataProps) => {
  const sendData = async (data: ProductData) => {
    try {
      const response = await axios.post("/api/products", data);
      if (response.status === 201) { 
        setData((prevState: ProductData[]) => [
          ...prevState,
          response.data
        ]);
        toast.success('Success add data!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    } catch (err: unknown) {
      if (err instanceof SyntaxError) {
        console.log(err);
        toast.error('Failed add data!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    }
  }

  return {
    sendData,
  }

}

export default usePostData;