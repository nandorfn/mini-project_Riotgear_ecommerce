'use client'
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import Input from "@/app/components/Form/Input";
import OptionInput from "@/app/components/Form/Option";
import Select from "@/app/components/Form/Select";
import { countryOption } from "@/app/helpers/dataObject";
import { useState } from "react";

const initialState = {
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    address: '',
    zip: '',
}

const CheckoutBody = ({ children }: { children: React.ReactNode }) => {
    const [form, setForm] = useState(initialState);

    const handleInput = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <>
            <Flex className="gap-10">
                <section className="flex flex-col w-1/2">
                    <Heading>BILLING DETAILS</Heading>
                    <form>
                        <label className="font-medium">
                            Name
                            <Input
                                name="name"
                                value={form.name}
                                type="text"
                                placeholder="Input your name"
                                handleInput={handleInput}
                            />
                        </label>
                        <label className="font-medium">
                            Phone
                            <Input
                                name="phone"
                                value={form.phone}
                                type="text"
                                placeholder="Input your phone number"
                                handleInput={handleInput}
                            />
                        </label>
                        <label className="font-medium">
                            Email
                            <Input
                                name="email"
                                value={form.email}
                                type="email"
                                placeholder="Input your email"
                                handleInput={handleInput}
                            />
                        </label>
                        <OptionInput
                            label="Country"
                            name="country"
                            addClass=" select-bordered mt-2"
                            optionValue={countryOption}
                            value={form.country}
                            handleInput={handleInput}
                        />
                        <OptionInput
                            label="City"
                            name="city"
                            addClass=" select-bordered mt-2"
                            optionValue={countryOption}
                            value={form.city}
                            handleInput={handleInput}
                        />
                    </form>
                    
                </section>
                <section className="flex flex-col gap-5 w-1/2">
                    {children}
                </section>
            </Flex>
        </>
    );
};

export default CheckoutBody;