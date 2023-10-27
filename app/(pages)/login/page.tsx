'use client'
import Link from "next/link";
import useLoginForm from "@/app/hooks/useLoginForm";
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { Transparent } from "@/app/components/Container/Transparent";


const Page = () => {
  const {
    register,
    loading,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit
  } = useLoginForm();
  return (
    <>
      {loading
        ? <Transparent>
          <span className="loading loading-spinner loading-lg"></span>
        </Transparent>
        : <div className="mx-4">
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
            {
              errors.email &&
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
            {
              errors.password &&
              <span className="text-red-500">{errors.password.message}</span>
            }
            <Flex align={'between'}>
              <Link
                className="w-[48.5%]"
                href={'/store'}
              >
                <Button
                  variant={'default'}
                  size={'full'}
                  type="button"
                >
                  Return to Store
                </Button>
              </Link>
              <Button
                variant={'login'}
                size={'half'}
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </Flex>
          </form>
          <Flex className="gap-1 mt-3">
            <Text clr={'base3'}>Didn&apos;t have an account?</Text>
            <Link className="font-medium" href={'/register'}>Register here!</Link>
          </Flex>
        </div>
      }
    </>
  );
};

export default Page;