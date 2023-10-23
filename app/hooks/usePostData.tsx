import axios from "axios";
import { ProductData } from "@/app/utils/types";

type usePostDataProps = {
  setData: React.Dispatch<React.SetStateAction<ProductData[]>>;
}

const usePostData = ({ setData }: usePostDataProps) => {

  const sendData = async (data: ProductData) => {
    await axios.post("/api/products", data)
      .then(response => {
        setData((prevState: ProductData[]) => [
          ...prevState,
          response.data
        ])
      })
      .catch(error => {
        console.error('Request Rejected:', error);
      });
  }

  return {
    sendData,
  }

}

export default usePostData;