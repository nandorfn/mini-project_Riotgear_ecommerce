import axios from "axios";
import { ProductData } from "@/app/utils/types";
import { useState } from "react";

type usePostDataProps = {
  setData: React.Dispatch<React.SetStateAction<ProductData[]>>;
}

const usePostData = ({ setData }: usePostDataProps) => {
  const [error, setError] = useState(true);


  const sendData = async (data: ProductData) => {
    try {
      const response = await axios.post("/api/products", data);
      console.log(response);

      if (response.status === 201) { 
        setData((prevState: ProductData[]) => [
          ...prevState,
          response.data
        ]);
        setError(false);
      }
    } catch (err: unknown) {
      if (err instanceof SyntaxError) {
        console.log(err);
      }
    }
  }
  console.log(error);

  return {
    sendData,
    error
  }

}

export default usePostData;