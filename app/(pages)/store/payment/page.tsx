import Link from "next/link";
import { getUserCurrentOrder } from "@/app/utils/queryDb";
import { checkSubtotal } from "@/app/utils/utils";

import { Flex } from "@/app/components/Container/Flex";
import { Heading } from "@/app/components/Container/Heading";
import { Text } from "@/app/components/Container/Text";
import { redirect } from "next/navigation";


const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const date = new Date().toLocaleDateString('en-US', { day: '2-digit', month: "long", year: "numeric" });
    const order = await getUserCurrentOrder(searchParams.orderId);
    let { subTotal } = checkSubtotal(order);
    let orderStatus = order?.map((item) => item.status);
    if (!searchParams.orderId) redirect('/store')
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
                    <Heading variant={'fourthRwd'} className="mt-3 mb-5">Payment Details</Heading>
                    {orderStatus && orderStatus[0] === 'Ordered' &&
                        <p className="italictext-xs md:text-base text-base-300">Thank you. Your order has been received. If you didn&apos;t complete the payment 24 hours from now, your order will be cancelled.</p>
                    }
                    <Flex variant={'colToRow'} className="p-4 mt-5 md:px-4 md:py-2 bg-base-200 rounded-md md:justify-between">
                        <Text fs={'lg'} className="md:w-1/5">{`Order Number: 12345`}</Text>
                        <div className="divider divider-horizontal"></div>
                        <Text fs={'lg'} className="md:w-1/5">{`Date: ${date}`}</Text>
                        <div className="divider divider-horizontal"></div>
                        <Text fs={'lg'} className="md:w-1/5">{`Total: ${`Rp${(subTotal || 0).toLocaleString('ID-id')}`}`}</Text>
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
                        <Text fs={'lg'} className="md:w-[40%]">{`Account Name: RIOTGEAR`}</Text>
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
                                <td className="flex flex-col">
                                    {order?.map((item) => (
                                        <p key={item.id}>
                                            {item.productName}
                                        </p>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td>{subTotal || 0}</td>
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
                                <td>{`Rp${(subTotal || 0).toLocaleString('ID-id')}`}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </main>
        </>
    );
};

export default Page;