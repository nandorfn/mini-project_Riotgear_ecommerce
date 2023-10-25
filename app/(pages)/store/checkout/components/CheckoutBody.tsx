'use client'
import Image from "next/image";
import Link from "next/link";
import { Controller } from "react-hook-form";

import useAddressForm from "@/app/hooks/useAddressForm";
import useFetchLocation from "@/app/hooks/useFetchLocation";
import { paymentOption } from "@/app/helpers/dataObject";
import { Button } from "@/app/components/Button/Button";
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import ErrorMsg from "@/app/components/ErrorMsg";
import { Select } from "@/app/components/Form/Select";
import { Textarea } from "@/app/components/Form/Textarea";
import bankIcon from '@/app/assets/icon/bank.svg'
import { Transparent } from "@/app/components/Container/Transparent";

type CheckoutBodyProps = {
    children: React.ReactNode;
    userId: string;
}

const CheckoutBody = ({ children, userId }: CheckoutBodyProps) => {
    const {
        register,
        handleSubmit,
        errors,
        onSubmit,
        watch,
        control,
        loading
    } = useAddressForm(userId);
    const form = watch();
    const country = useFetchLocation('');
    const cityQuery = form.country && `/${form?.country}/states`
    const cities = useFetchLocation(cityQuery);
    const districtQuery = form.city && `/${form?.country}/states/${form?.city}/cities`
    const districts = useFetchLocation(districtQuery);

    return (
        <>
            {loading
                ? <Transparent>
                    <span className="loading loading-spinner loading-lg"></span>
                </Transparent>
                : <Flex variant={'colToRowReverse'} className="gap-10">
                    <section className="flex flex-col w-full md:w-1/2">
                        <Heading>BILLING DETAILS</Heading>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 md:gap-5 mt-5">

                            <label className="font-medium">
                                Name
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-bordered w-full font-normal mt-3 mb-2"
                                />
                                {errors.name && <ErrorMsg error={errors.name.message} />}
                            </label>
                            <label className="font-medium">
                                Phone
                                <input
                                    {...register("phone")}
                                    type="text"
                                    placeholder="Input your phone number"
                                    className="input input-bordered w-full font-normal mt-3"
                                />
                                {errors.phone && <ErrorMsg error={errors.phone.message} />}
                            </label>
                            <label className="font-medium">
                                Email
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Input your email"
                                    className="input input-bordered w-full font-normal mt-3"
                                />
                                {errors.email && <ErrorMsg error={errors.email.message} />}
                            </label>

                            <label className="flex flex-col font-medium">
                                Country
                                <Controller
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            data={country}
                                            variant={'border'}
                                            className="mt-3"
                                        />
                                    )}
                                    name="country"
                                    control={control}
                                    defaultValue=""
                                />
                                {errors.country && <ErrorMsg error={errors.country.message} />}
                            </label>

                            <label className="flex flex-col font-medium ">
                                City
                                <Controller
                                    name="city"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            data={cities}
                                            variant={'border'}
                                            className="mt-3"
                                        />
                                    )}
                                />
                                {errors.city && <ErrorMsg error={errors.city.message} />}
                            </label>

                            <label className="flex flex-col font-medium ">
                                District
                                <Controller
                                    name="district"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            data={districts}
                                            variant={'border'}
                                            className="mt-3"
                                        />
                                    )}
                                />
                                {errors.district && <ErrorMsg error={errors.district.message} />}
                            </label>

                            <label className="font-medium flex flex-col">
                                Street Address
                                <Controller
                                    name="address"
                                    control={control}
                                    render={({ field }) => (
                                        <Textarea
                                            {...field}
                                            variant={'border'}
                                            size={'standard'}
                                            className="mt-3"
                                        />
                                    )}
                                />
                                {errors.address && <ErrorMsg error={errors.address.message} />}
                            </label>

                            <label className="font-medium">
                                Postcode / ZIP
                                <input
                                    {...register("zip")}
                                    name="zip"
                                    type="text"
                                    placeholder="Postcode"
                                    className="input input-bordered w-full font-normal mt-3"
                                />
                                {errors.zip && <ErrorMsg error={errors.zip.message} />}
                            </label>

                            <Flex className="mt-2" variant={'col'}>
                                <Heading className="border-t-2 flex w-full pt-5">PAYMENT METHOD</Heading>
                                <Flex variant={'col'} className="gap-[10px] mt-5">
                                    {paymentOption.map((option) => (
                                        <div key={option.id} className="flex flex-row bg-base-200 p-3 rounded-lg items-center justify-between">
                                            <Flex variant={'row'} className="gap-3">
                                                <input
                                                    {...register("paymentMethod")}
                                                    type="radio"
                                                    value={option.value}
                                                    className="radio radio-sm rounded-md"
                                                />
                                                <Text>{option.label}</Text>
                                            </Flex>
                                            <Image src={bankIcon} alt="bank icon" />
                                        </div>
                                    ))
                                    }
                                </Flex>
                                {errors.paymentMethod && <ErrorMsg error={errors.paymentMethod.message} />}
                            </Flex>

                            <Flex variant={'row'} className="gap-5">
                                <Link className="flex w-[48.5%]" href={'/store'}>
                                    <Button size={'full'} variant={'white'}>BACK TO STORE</Button>
                                </Link>
                                <Button
                                    className="disabled:opacity-50"
                                    size={'half'}
                                    variant={'red'}
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading
                                        ? <span className="loading loading-spinner"></span>
                                        : 'ORDER'

                                    }
                                </Button>
                            </Flex>
                        </form>

                    </section>
                    <section className="flex flex-col gap-5 w-full md:w-1/2">
                        {children}
                    </section>
                </Flex>
            }
        </>
    );
};

export default CheckoutBody;