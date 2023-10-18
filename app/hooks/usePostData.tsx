import axios from "axios";
import { getCookie } from "cookies-next";
import { ProductData } from "../utils/utils";

type usePostDataProps = {
  setData: React.Dispatch<React.SetStateAction<ProductData[]>>;
}

const usePostData = ({ setData }: usePostDataProps) => {
  const token = getCookie('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const sendData = async (data: ProductData) => {
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