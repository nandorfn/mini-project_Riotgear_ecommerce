'use client'
import Link from "next/link";
import { Button } from "../components/Button/Button";
import { Flex } from "../components/Container/Flex";
import { Heading } from "../components/Container/Heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "../utils/types";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: TLoginSchema) => {
    
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
              type="text"
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
      </div>
    </>
  );
};

export default Page;