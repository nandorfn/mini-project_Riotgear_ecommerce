import { useForm } from "react-hook-form";
import { TUserAddressSchema, userAddressSchema } from "../utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";



const useAddressForm = (userId: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch,
    control,
  } = useForm<TUserAddressSchema>({
    resolver: zodResolver(userAddressSchema)
  });

  const onSubmit = async (data: TUserAddressSchema) => {
    axios.post(`/api/user/${userId}/order`, data)
      .then((res) => {
        console.log(res.data)
        console.log(res)
      }
      )
      .catch((err) => {
        console.log(err)
      })
    reset();
  }
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    watch,
    control
  }
}

export default useAddressForm;