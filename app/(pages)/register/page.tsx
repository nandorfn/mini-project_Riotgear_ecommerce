'use client'
import axios from "axios";
import Link from "next/link";
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterSchema, registerSchema } from "@/app/utils/types";
import { Text } from "@/app/components/Container/Text";
import { hashPass } from "@/app/utils/utils";



const Page = () => {
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
  };

  return (
    <>
      <div className="mx-4">
        <Heading fs={'xl3'}>
          Create an account
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3 mt-3">
          <label>
            Name
            <input
              {...register("name")}
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
            />
          </label>
          {errors.name &&
            <span className="text-red-500">{errors.name.message}</span>
          }
          <label>
            Email
            <input
              {...register("email")}
              type="email"
              placeholder="example@example.com"
              className="input input-bordered w-full"
            />
          </label>
          {errors.email &&
            <span className="text-red-500">{errors.email.message}</span>
          }

          <label>
            Password
            <input
              {...register("password")}
              type="password"
              placeholder="Min. 8 characters"
              className="input input-bordered w-full"
            />
          </label>
          {errors.password &&
            <span className="text-red-500">{errors.password.message}</span>
          }
          
          <label>
            Confirm Password
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
            />
          </label>
          {errors.confirmPassword &&
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          }

          <Flex align={'between'}>
            <Link className="w-[48.5%]" href={'/store'}>
              <Button variant={'default'} size={'full'} type="button">Return to Store</Button>
            </Link>
            <Button
              variant={'login'}
              size={'half'}
              type="submit"
              disabled={isSubmitting}
            >Register
            </Button>
          </Flex>
        </form>
        <Flex className="gap-1 mt-3">
        <Text clr={'base3'}>Already have an account?</Text>
        <Link className="font-medium" href={'/login'}>Login here!</Link>
        </Flex>
      </div>
    </>
  );
};

export default Page;