'use client'
import axios from "axios";
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Flex } from "../components/Container/Flex";
import { Heading } from "../components/Container/Heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "../utils/types";
import { Text } from "../components/Container/Text";
import { hashPass } from "../utils/utils";
import { checkUser } from "../utils/queryDb";
let bcrypt = require('bcryptjs');

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: TLoginSchema) => {
    axios.post('/api/login', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        if (error.response) {
          const errors = error.response.data.errors;
          if (errors.email) {
            console.log(errors.email);
            setError("email", {
              type: "server",
              message: errors.email,
            });
          } else if (errors.password) {
            setError("password", {
              type: "server",
              message: errors.password,
            });
          } else {
            alert("Something went wrong");
          }
        } else {
          console.error("Something went wrong");
        }
      });
    reset();
  };


  return (
    <>
      <div className="mx-4">
        <Heading fs={'xl3'}>
          Hello again! Sign in here.
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3 mt-3">
          <label>
            Email
            <input
              {...register("email")}
              type="email"
              placeholder="Type here"
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
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          {errors.password &&
            <span className="text-red-500">{errors.password.message}</span>
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
            >Login
            </Button>
          </Flex>
        </form>
        <Flex className="gap-1 mt-3">
          <Text clr={'base3'}>Didn&apos;t have an account?</Text>
          <Link className="font-medium" href={'/register'}>Register here!</Link>
        </Flex>
      </div>
    </>
  );
};

export default Page;