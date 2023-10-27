import { useState } from "react";
import { postData } from "../utils/api";
import { PurchaseBtn } from "../components/Button/PurchaseBtn";
import { useRouter } from "next/navigation";

const useAddCart = ({user, id, stock}: PurchaseBtn) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState('1');
  const data = {
    userId: user?.userId,
    productId: id,
    quantity
  }
  const query = `/api/carts`
  const handlePostCart = async (e: React.SyntheticEvent) => {
    setLoading(true);
    setModal(!modal)
    e.preventDefault();
    await postData(query, data)
    .then(() => setLoading(false))
  }

  const options = [];
  if (stock) {
    const loopCount = Math.min(stock, 10);
    for (let i = 0; i < loopCount; i++) {
      options.push(i + 1);
    }
  }
  
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/store/cart')
  }
  
  return {
    quantity,
    setQuantity,
    options,
    loading,
    handlePostCart,
    modal,
    setModal,
    handleNavigate
  }
}

export default useAddCart;