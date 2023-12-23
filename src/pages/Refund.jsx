import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Link, Select, Text } from '@chakra-ui/react'
import React from 'react'
import Help2 from "../assets/Help2.svg"
import Help from "../assets/Help.svg"
import DownArrow from "../assets/down.svg"
import DownArrow2 from "../assets/DownArrow2.svg"
import { RiSearchLine } from 'react-icons/ri'
import sortIcon from "../assets/sortIcon.svg"
import download from "../assets/download.svg"
import elipsegrey from "../assets/elipsegrey.svg"
import elipsegreen from "../assets/elipsegreen.svg"

const Refund = ({handlePage}) => {
    const arr = [
        {
            orderId: "#281209",
            status: "Successful",
            transactionId: 131634495747,
            refundDate:"Today, 08:45 PM",
            orderAmount: "₹1,125.00"
        },
        {
            orderId: "#281208",
            status: "Processing",
            transactionId: 131634495747,
            refundDate:"Yesterday, 3:00 PM",
            orderAmount: "₹1,125.00"
        },
        {
            orderId: "#281207",
            status: "Successful",
            transactionId: 131634495747,
            refundDate:"12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00"
        },
        {
            orderId: "#281206",
            status: "Successful",
            transactionId: 131634495747,
            refundDate:"12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00"
        },
        {
            orderId: "#281205",
            status: "Successful",
            transactionId: 131634495747,
            refundDate:"12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00"
        },
        {
            orderId: "#281204",
            status: "Successful",
            transactionId: 131634495747,
            refundDate:"12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00"
        }
    ]
    return (
        <div>
            <Box fontFamily={"Inter"}>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={"20px"} fontWeight={500}>Overview</Text>
                    <Select name="" id="" w={"137px"} fontSize={"16px"}>
                        <option value="this month">This Month</option>
                    </Select>
                </Flex>
                <Flex mt={"24px"} gap={"20px"}>
                    <Box flex={1} p={"20px"} color={'white'} bgColor={"#146EB4"} borderRadius={"8px"} position={"relative"}>
                        <Flex fontSize={"16px"} gap={"4px"}>
                            <Text fontSize={"12px"}>Next Payout</Text>
                            <Image src={Help2} color={"white"} w={"14px"} />
                        </Flex>
                        <Flex mt={"16px"} alignItems={"center"} justifyContent={"space-between"}>
                            <Text fontSize={"32px"} fontWeight={500}>₹2,312.23</Text>
                            <Flex>
                                <Link fontSize={"16px"} fontWeight={500} textDecor={"underline"}>23 orders</Link>
                                <Image src={DownArrow} transform={'rotate(-90deg)'} />
                            </Flex>
                        </Flex>
                        <Text visibility={"hidden"}>5</Text>
                        <Flex borderRadius={"8px"} py={"8px"} bgColor={"#0E4F82"} px="24px" w={"100%"}
                            position={"absolute"} right={"-0.003px"}
                            color={"#F2F2F2"} fontSize={"14px"} fontWeight={400}
                            justifyContent={"space-between"}
                        >
                            <Text>Next payout date:</Text>
                            <Text>Today, 04:00PM</Text>
                        </Flex>
                    </Box>
                    <Box flex={1} h={"120px"} p={"20px"} color={'white'} bgColor={"#ffffff"} borderRadius={"8px"} boxShadow={'sm'}
                    >
                        <Flex fontSize={"16px"} gap={"4px"}>
                            <Text fontSize={"12px"} color={"#4D4D4D"}>Amount Pending</Text>
                            <Image src={Help} color={"white"} w={"14px"} />
                        </Flex>
                        <Flex mt={"16px"} alignItems={"center"} justifyContent={"space-between"} color={"#1A181E"}
                        >
                            <Text fontSize={"32px"} fontWeight={500}>₹2,312.23</Text>
                            <Flex>
                                <Link color={"#146EB4"} fontSize={"16px"} fontWeight={500} textDecor={"underline"}>13 orders</Link>
                                <Image src={DownArrow2} transform={'rotate(-90deg)'} />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box flex={1} h={"120px"} p={"20px"} color={'white'} bgColor={"#ffffff"} borderRadius={"8px"} boxShadow={'sm'}
                    >
                        <Flex fontSize={"16px"} gap={"4px"}>
                            <Text fontSize={"12px"} color={"#4D4D4D"}>Amount Processed</Text>
                            <Image src={Help} color={"white"} w={"14px"} />
                        </Flex>
                        <Flex mt={"16px"} alignItems={"center"} justifyContent={"space-between"} color={"#1A181E"}
                        >
                            <Text fontSize={"32px"} fontWeight={500}>₹23,92,312.19</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Text mt={"44px"} fontSize={"20px"} fontWeight={500}>Transactions | This Month</Text>
                <Flex mt={"20px"} gap={"12px"}>
                    <Text p={"6px 16px"} color={"#808080"} borderRadius={"full"} bgColor={"#E6E6E6"} cursor={"pointer"} onClick={()=>handlePage("payout")}
                    >Payouts (22)</Text>
                    <Text p={"6px 16px"} color={"#ffffff"} borderRadius={"full"} bgColor={"#146EB4"} cursor={"pointer"} onClick={()=>handlePage("refund")}>Refunds {(arr.length)}</Text>
                </Flex>
                <Box mt={"24px"} px={"12px"} pt={"12px"} pb={"8px"} bgColor={"white"}>
                    <Flex>
                        <InputGroup
                        >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<RiSearchLine size={"14px"} color="#999999" />}
                            />
                            <Input bgColor={"#FFFFFF"} py={"10px"} px={"16px"} type="text" fontWeight={400} fontSize={"14px"} w={"248px"}
                                boxSizing='border-box' placeholder="Order ID or transaction ID" _placeholder={{ color: "#999999" }} />
                        </InputGroup>
                        <Flex gap={"16px"}>
                            <Button bgColor={"#FFFFFF"} variant={'outline'}><Text fontSize={"16px"} fontWeight={400} color={"#4D4D4D"}>Sort</Text> <Image w="16px" src={sortIcon} /></Button>
                            <Button p={"8px"} bgColor={"#FFFFFF"} variant={'outline'}><Image w="16px" src={download} /></Button>
                        </Flex>
                    </Flex>
                    <Flex color={"#4D4D4D"} fontWeight={500} fontSize={"14px"} mt={"12px"} py={"10px"} px={"12px"} bgColor={"#F2F2F2"}
                        justifyContent={"space-between"} borderRadius={"4px"}
                    >
                        <Text flex={1}>Order ID</Text>
                        <Text flex={1}>Status</Text>
                        <Text flex={1}>Transaction ID</Text>
                        <Text flex={1}>Refund date</Text>
                        <Text flex={1} textAlign={"right"}>Order amount</Text>
                    </Flex>
                    {
                        arr?.map((el,i) => (
                            <Flex key={el.orderId} color={"#1A181E"} fontSize={"14px"} py={"14px"} px={"12px"} bgColor={"#ffffff"} justifyContent={"space-between"} borderBottom={(arr.length-1)==i?"":"1px solid #E6E6E6"} fontWeight={400}
                            >
                                <Text flex={1} color={"#146EB4"}>{el.orderId}</Text>
                                <Text display={"flex"} gap={"6px"} flex={1}
                                 alignItems={"center"}
                                >
                                    <Image src={el.status=="Processing"?elipsegrey:elipsegreen}/>{el.status}
                                </Text>
                                <Text flex={1}>{el.transactionId}</Text>
                                <Text flex={1}>{el.refundDate}</Text>
                                <Text flex={1} textAlign={"right"}>{el.orderAmount}</Text>
                            </Flex>
                        ))
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Refund
