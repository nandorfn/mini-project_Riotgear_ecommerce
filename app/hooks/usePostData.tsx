import axios from "axios";
import { getCookie } from "cookies-next";
import { ProductData, productFormState } from "../utils/utils";

type usePostDataProps = {
  setData: React.Dispatch<React.SetStateAction<ProductData[]>>;
}

const usePostData = ({ setData }: usePostDataProps) => {
  const token = getCookie('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const sendData = async (data: productFormState) => {
    await axios.post("/api/products", data, {
      headers: headers
    })
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