import { useForm } from "react-hook-form";
import { TUserAddressSchema, userAddressSchema } from "../utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useAddressForm = (userId: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setError,
    watch,
    control,
  } = useForm<TUserAddressSchema>({
    resolver: zodResolver(userAddressSchema)
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: TUserAddressSchema) => {
    setLoading(true);
    axios.post(`/api/order`, data)
      .then((res) => {
          if (res.status === 201) {
            setLoading(false);
            router.push(`/store/payment?orderId=${res.data.orderId}`);
          } else {
            throw new Error(res.data.error)
          }
      }
      )
      .catch(err => {
        const error = err.response.data.errors;
        if (error.name) {
          setError("name", {
            type: "server",
            message: error.name
          });
        } else if (error.phone) {
          setError("phone", {
            type: "server",
            message: error.phone,
          });
        } else if (error.email) {
          setError("email", {
            type: "server",
            message: error.email,
          });
        } else if (error.country) {
          setError("country", {
            type: "server",
            message: error.country,
          });
        } else if (error.city) {
          setError("city", {
            type: "server",
            message: error.city,
          });
        } else if (error.district) {
          setError("district", {
            type: "server",
            message: error.district,
          });
        } else if (error.address) {
          setError("address", {
            type: "server",
            message: error.address,
          });
        } else if (error.zip) {
          setError("zip", {
            type: "server",
            message: error.zip,
          });
        } else if (error.paymentMethod) {
          setError("paymentMethod", {
            type: "server",
            message: error.paymentMethod,
          });
        } else (
          alert(errors)
        )
      })
      .finally(() => {
        setLoading(false);
      })
    reset();
  }
  return {
    register,
    handleSubmit,
    errors,
    isSubmitted,
    onSubmit,
    watch,
    control,
    loading
  }
}

export default useAddressForm;