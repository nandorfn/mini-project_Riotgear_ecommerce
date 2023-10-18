import { useState } from "react";

const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const handleInput = (e: React.SyntheticEvent) => {
      const { name, value } = (e.target as HTMLInputElement);
      setForm({
          ...form,
          [name]: value
      })
  }
  
  return {
    form,
    handleInput,
    setForm
  }
}

export default useForm;