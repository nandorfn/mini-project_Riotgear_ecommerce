import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "../utils/types";
import axios from "axios";
import { hashPass } from "../utils/utils";

const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: TRegisterSchema) => {
    const { salt, hashedPassword } = hashPass(data.password);
    const newData = {
      name: data.name,
      email: data.email,
      salt,
      hashedPassword
    }
    axios.post('/api/register', newData)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
          alert('Submitting form failed');
        }
      })
      .catch(errors => {
        if (errors.name) {
          setError("name", {
            type: "server",
            message: errors.name,
          });
        }
        else if (errors.email) {
          setError("email", {
            type: "server",
            message: errors.email,
          });
        } else if (errors.hashedPassword) {
          setError("password", {
            type: "server",
            message: errors.password,
          });
        } else {
          alert("Something went wrong");
        }
      })
    reset();
  }
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit
  };
}

export default useRegisterForm;
