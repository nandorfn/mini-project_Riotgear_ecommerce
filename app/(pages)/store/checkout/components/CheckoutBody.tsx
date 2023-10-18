'use client'
import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import Input from "@/app/components/Form/Input";
import OptionInput from "@/app/components/Form/Option";
import { TextArea } from "@/app/components/Form/TextArea";
import useFetchLocation from "@/app/hooks/useFetchLocation";
import useForm from "@/app/hooks/useForm";

const initialState = {
    name: '',
    phone: '',
    email: '',
    country: 'DEF',
    city: 'DEF',
    district: 'DEF',
    village: '',
    address: '',
    zip: '',
}

const CheckoutBody = ({ children }: { children: React.ReactNode }) => {
    const { form, handleInput } = useForm(initialState);
    const country = useFetchLocation('');
    const cityQuery = form.country && `/${form?.country}/states`
    const cities = useFetchLocation(cityQuery);
    const districtQuery = form.city && `/${form?.country}/states/${form?.city}/cities`
    const districts = useFetchLocation(districtQuery);

    return (
        <>
            <Flex variant={'colToRow'} className="gap-10">
                <section className="flex flex-col w-full md:w-1/2">
                    <Heading>BILLING DETAILS</Heading>
                    <form className="flex flex-col gap-3 md:gap-5 mt-5">
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
                            addClass=" select-bordered mt-2 capitalize"
                            optionValue={country}
                            value={form.country}
                            handleInput={handleInput}
                        />
                        <OptionInput
                            label="City / Regency"
                            name="city"
                            addClass=" select-bordered mt-2 capitalize"
                            optionValue={cities}
                            value={form.city}
                            handleInput={handleInput}
                        />
                        <OptionInput
                            label="Subdistrict"
                            name="district"
                            addClass=" select-bordered mt-2 capitalize"
                            optionValue={districts}
                            value={form.district}
                            handleInput={handleInput}
                        />
                        <label className="font-medium">
                            Street Address
                            <TextArea
                                name="address"
                                handleInput={handleInput}
                                value={form.address}
                            />
                        </label>
                        <label className="font-medium">
                            Postcode / ZIP
                            <Input
                                name="zip"
                                value={form.zip}
                                type="text"
                                placeholder="Postcode"
                                handleInput={handleInput}
                            />
                        </label>
                    </form>

                </section>
                <section className="flex flex-col gap-5 w-full md:w-1/2">
                    {children}
                </section>
            </Flex>
        </>
    );
};

export default CheckoutBody;