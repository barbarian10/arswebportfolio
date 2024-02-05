import { Avatar, Box, Button, Divider, Flex, Heading, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { CoverImage } from '../../components/CoverImage/CoverImage'
import project1 from '../../assets/projects/digital.png'
import Link from 'next/link'
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '../../components/Footer'
import Image from 'next/image'
import avatar from '../../assets/about/avatar.png'
import emptyHomePage from '../../assets/projects/project1/empty-home-page.png'
import creatingDoctype from '../../assets/projects/project1/creating-doctype.png'
import cannotGenerate from '../../assets/projects/project1/cannot-generate.png'
import addFields1 from '../../assets/projects/project1/add-fields-1.png'
import homeScreen from '../../assets/projects/project1/home-screen.png'
import editingDoctype from '../../assets/projects/project1/editing-doctype.png'
import addFields from '../../assets/projects/project1/add-fields.png'
import allFieldsData from '../../assets/projects/project1/all-fields-data.png'
import generateDataPage from '../../assets/projects/project1/generate-data-page.png'
import generatedData1 from '../../assets/projects/project1/generated-data-1.png'
import generatedData2 from '../../assets/projects/project1/generated-data-2.png'
import jsonData from '../../assets/projects/project1/JSON-format-generated-data.png'
import loginScreenDark from '../../assets/projects/project1/login-screen-dark.png'
import loginScreenLight from '../../assets/projects/project1/login-screen-light.png'
import loginSettings1 from '../../assets/projects/project1/login-settings-1.png'
import loginSettings2 from '../../assets/projects/project1/login-settings-2.png'
import loginSettings3 from '../../assets/projects/project1/login-settings-3.png'
import employeeDataExample1 from '../../assets/projects/project1/employee-data-example-1.png'
import employeeDataExample2 from '../../assets/projects/project1/employee-data-example-2.png'
import { useRouter } from 'next/navigation'
import NextProjectLink from '../../components/GetNextProject'

type Props = {}

interface DetailsStackProps {
    heading: string,
    children: React.ReactNode,
    stackSpacing: number
}

export const DetailsStack = ({ heading, children, stackSpacing }: DetailsStackProps) => {
    return (
        <Stack spacing={stackSpacing}>
            <Text textTransform='uppercase' color='gray.400'>{heading}</Text>
            {children}
        </Stack>
    )
}

interface PhaseHeadingProps {
    heading: string
}

export const PhaseHeading = ({ heading }: PhaseHeadingProps) => {
    return (
        <Heading fontSize='4xl'>{heading}</Heading>
    )
}

const Project1 = (props: Props) => {
    return (
        <>
            <Flex width='full'
                pl={{ base: 2, md: 40 }}
                pt={{ base: 28, md: 32 }}
                pr={{ base: 2, md: 24 }}
                pb={{ base: 12, md: 32 }}>

                <Stack pt={10} spacing={{ base: 8, md: 14 }}>

                    <Stack spacing={{ base: 24, md: 48 }}>

                        <Stack spacing={{ base: 8, md: 16 }}>
                            {/** Page Header */}
                            <Stack spacing={12}>
                                <Box>
                                    <CoverImage image={project1} />
                                </Box>
                                <Stack pl={{ base: 10, md: 0 }}>
                                    <Heading fontSize={{ base: '4xl', md: '5xl' }}>Digital Marketplace</Heading>
                                    <HStack>
                                        <Tag>Ecommerce</Tag>
                                    </HStack>
                                </Stack>
                            </Stack>

                            {/** Project Details */}
                            <Stack spacing={{ base: 12, md: 20 }} direction={{ base: 'column', md: 'row' }} pl={{ base: 10, md: 0 }}>
                                <Box w={{ base: '90%', md: '70%' }}>
                                    <DetailsStack heading='overview' stackSpacing={4}>
                                        <Text letterSpacing='wide'>
                                            Digital Marketplace built on Payload, Next, Tailwind, Express and more. Website functionality includes adding products to the basket and buying them, authentication system, categories collections in the navbar, admin and seller dashboards made with payload where admins can take care of users and products, and sellers can post or delete products. The payment process is made with Stripe. 
                                        </Text>
                                    </DetailsStack>
                                </Box>
                                <Stack spacing={4}>
                                    <DetailsStack heading='collaborators' stackSpacing={2}>
                                        <HStack>
                                            <Text>Arslan Bektemir</Text>
                                        </HStack>
                                    </DetailsStack>
                                    <DetailsStack heading='duration' stackSpacing={2}>
                                        <HStack><AiOutlineCalendar /><Text fontSize='sm'>November 2023 to January 2024</Text></HStack>
                                    </DetailsStack>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Stack>
                    <Divider />
                    <Flex justifyContent='space-between' pr={{ base: 5 }}>    
                        <Link href={'/projects'} passHref>
                            <Button width='fit-content' variant='ghost' colorScheme='blue' size={{ base: 'sm' }}>All Projects</Button>
                        </Link>
                        <NextProjectLink currentProject='digital-marketplace'/>
                    </Flex>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Project1