import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { checkUserLogin } from "@/app/utils/auth";
import { getUserCurrentOrder, getUserProductCart } from "@/app/utils/queryDb";
import { orderSummary } from "@/app/utils/utils";
import Link from "next/link";


const Page = async ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
    console.log(searchParams);
    const order = await getUserCurrentOrder(searchParams.orderId);
    console.log(order);
    const user = await checkUserLogin();
    const productCart = await getUserProductCart(user?.userId ?? '');
    const date = new Date()
    let { subTotal } = orderSummary(productCart);

    return (
        <>
            <main className="px-3 md:h-[74vh]">
                <div className="text-base text-base-300 breadcrumbs">
                    <ul>
                        <li><Link href={'/'}>RIOTGEAR</Link></li>
                        <li><Link href={'/store'}>Store</Link></li>
                        <li><Link href={`/store/cart`}>Cart</Link></li>
                        <li><Link href={`/store/checkout`}>Checkout</Link></li>
                    </ul>
                </div>

                <Flex variant={'col'}>
                    <Heading variant={'fourthRwd'} className="mt-3">Payment Details</Heading>
                    <p className="italic my-5 text-xs md:text-base text-base-300">Thank you. Your order has been received. If you didn&apos;t complete the payment 24 hours from now, your order will be cancelled.</p>
                    <Flex variant={'colToRow'} className="p-4 md:px-4 md:py-2 bg-base-200 rounded-md md:justify-between">
                        <Text fs={'lg'} className="md:w-1/5">{`Order Number: 12345`}</Text>
                        <div className="divider divider-horizontal"></div>
                        <Text fs={'lg'} className="md:w-1/5">{`Date: ${date.toLocaleDateString('en-US', { day:'2-digit', month: "long", year:"numeric"})}`}</Text>
                        <div className="divider divider-horizontal"></div>
                        <Text fs={'lg'} className="md:w-1/5">{`Total: ${subTotal.toLocaleString('ID-id')}`}</Text>
                        <div className="divider divider-horizontal"></div>
                        <Text fs={'lg'} className="md:w-2/5">{`Payment Method: Direct Bank Transfer`}</Text>
                    </Flex>
                    <div className="divider divider-vertikal"></div>
                    <Heading>OUR BANK DETAILS</Heading>
                    <Flex variant={'colToRow'} className="p-4 mt-3 md:px-4 md:py-2 bg-base-200 rounded-md md:justify-between md:items-start">
                        <Text fs={'lg'} className="md:w-[20.2%]">{`Bank: BCA`}</Text>
                        <div className="divider divider-horizontal"></div>
                        <Text fs={'lg'} className="md:w-[44.2%]">{`Account Number: 142-077-0845`}</Text>
                        <div className="divider divider-horizontal"></div>
                        <Text fs={'lg'} className="md:w-2/5">{`Account Name: RIOTGEAR`}</Text>
                    </Flex>
                    <div className="divider divider-horizontal"></div>
                </Flex>

                <div className="divider divider-vertikal"></div>
                <Heading>ORDER DETAILS</Heading>
                <div className="overflow-x-auto rounded-md mt-4">
                    <table className="table border">
                        <thead>
                            <tr className="bg-base-200 text-base">
                                <th className="font-normal text-black">Product</th>
                                <th className="font-normal text-black">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <tr className="flex flex-col">
                                {productCart?.map((item) => (
                                    <td key={item.id}>
                                        {item.productInfo.productName}
                                    </td>
                                ))
                                }
                                </tr>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td>{subTotal}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>JNT</td>
                            </tr>
                            <tr>
                                <td>Payment Method</td>
                                <td>Direct Bank Transfer</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{`Rp${subTotal.toLocaleString('ID-id')}`}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default Page;