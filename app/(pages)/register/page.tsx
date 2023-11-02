'use client'
import Link from "next/link";
import useRegisterForm from "@/app/hooks/useRegisterForm";

import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { Transparent } from "@/app/components/Container/Transparent";

const Page = () => {
  const {
    register,
    handleSubmit,
    errors,
    loading,
    isSubmitting,
    onSubmit
  } = useRegisterForm();

  return (
    <>
      {loading
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>
        : <div className="mx-4">
          <Heading fs={'xl3'}>
            Create an account
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3 mt-3">
            <label>
              {'Name'}
              <input
                {...register("name")}
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </label>
            {
              errors.name &&
              <span className="text-red-500">{errors.name.message}</span>
            }
            <label>
              {'Email'}
              <input
                {...register("email")}
                type="email"
                placeholder="example@example.com"
                className="input input-bordered w-full"
              />
            </label>
            {
              errors.email &&
              <span className="text-red-500">{errors.email.message}</span>
            }

            <label>
              {'Password'}
              <input
                {...register("password")}
                type="password"
                placeholder="Min. 8 characters"
                className="input input-bordered w-full"
              />
            </label>
            {
              errors.password &&
              <span className="text-red-500">{errors.password.message}</span>
            }

            <label>
              {'Confirm Password'}
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
              />
            </label>
            {
              errors.confirmPassword &&
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
              >
                Register
              </Button>
            </Flex>
          </form>
          <Flex className="gap-1 mt-3">
            <Text clr={'base3'}>Already have an account?</Text>
            <Link className="font-medium" href={'/login'}>Login here!</Link>
          </Flex>
        </div>
      }

    </>
  );
};

export default Page;