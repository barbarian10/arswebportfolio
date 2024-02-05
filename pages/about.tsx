import { Box, Center, Flex, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAlternateEmail, MdOutlineCake } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import Image from 'next/image'
import workspaceLight from '../assets/about/workspace-light.jpg'
import workspaceDark from '../assets/about/workspace-dark.jpg'
import avatar from '../assets/about/avatar.jpg'
import arrowDark from '../assets/curved-arrow-dark.png'
import arrowLight from '../assets/curved-arrow-light.png'
import styles from '../styles/CustomStyles.module.css'
import { CustomHeading } from '../components/CustomHeading/CustomHeading'
import { Footer } from '../components/Footer'

const About = () => {

    const workspace = useColorModeValue(workspaceLight, workspaceDark)
    const arrow = useColorModeValue(arrowLight, arrowDark)
    const textColor = useColorModeValue('gray.500', 'gray.400')

    return (
        <>
            <Flex
                pl={{ base: 8, md: 24, lg: 40 }}
                pr={{ base: 8, md: 12, lg: 40 }}
                pt={{ base: 32, md: 36 }}
                pb={{ base: 12, md: 32 }}>
                <HStack spacing={4} align='flex-start' flexDirection={{ base: 'column', md: 'row' }}>
                    <Stack spacing={{ base: 2, md: 6 }}>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <CustomHeading headingText='About Info' boxColor='blue.100' chars={4.5} />
                        </Box>
                        <Center display={{ base: 'block', md: 'none' }} pl={6}>
                            <CustomHeading headingText='Info' boxColor='blue.100' chars={4.5} />
                        </Center>
                        <Stack spacing={4} py={6} display={{ base: 'flex', md: 'none' }}>
                            <Center>
                                <Image src={avatar} alt='my picture' height={300} width={300} />
                            </Center>
                            <Center px={4} textAlign='center'>
                                <Text className={styles.customFont}>
                                    I&apos;m fascinated by the intersection between tech, business and life.
                                </Text>
                            </Center>
                        </Stack>
                        <Stack spacing={{ base: 16, md: 6 }} direction={{ base: 'column-reverse', md: 'column' }}>
                            <Stack spacing={{ base: 4, md: 4 }} width={{ base: '100%', md: '70%' }}>
                                <Stack spacing={2}>
                                    {/* <Heading as='h3'
                                        fontWeight={{ base: 'bold', md: 'semibold' }}
                                        fontSize={{ base: '2xl', md: 'lg' }}>
                                        Education</Heading> */}
                                    <Text as='p'>
                                        I graduated with a Bachelor of English and American Studies
                                        from Eotvos Lorand University, Budapest, in the year 2021.
                                    </Text>
                                </Stack>
                                <Stack spacing={2}>
                                    <Stack spacing={0}>
                                        <Text as='p'>
                                        In my quest to discover what I'm truly passionate about, I explored various fields. However, I ultimately found front-end development to be the most captivating.
                                        </Text>
                                        <Text as='p'>
                                            I have started my development journey from taking FreeCodeCamp courses on html, css, javascript, react and algorithms and data structures, then proceeded to watch youtube tutorials from various authors, and finally, found myself doing pet-projects necessary to get a job in the field.

                                        </Text>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Box width={{ base: '100%', md: '60%' }} px={{ base: 16, md: 0 }}>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                                    <HStack spacing={2}><MdOutlineAlternateEmail fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Arslan Bektemir</Text></HStack>
                                    <HStack spacing={2}><HiOutlineLocationMarker fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Astana, Kazakhstan</Text></HStack>
                                    <HStack spacing={2}><MdOutlineCake fontSize='1.2em' /><Text color={textColor} fontSize={{ base: 'sm' }}>23 y.o.</Text></HStack>
                                    <HStack spacing={2}><HiOutlineMail size={'1.2em'} /><Text color={textColor} fontSize={{ base: 'sm' }}>arslanbektemir1@gmail.com</Text></HStack>
                                </SimpleGrid>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack spacing={10} display={{ base: 'none', md: 'flex' }}>
                        <Box pt='50px'>
                            <Image style={{ borderRadius: '10px' }} src={avatar} alt='my picture' height={300} width={300} />
                        </Box>
                        <Box className={styles.tiltBox} width='250px'>
                            <Text className={styles.customFont}>
                                I find the connection between technology, business, and life really interesting. My aim is to contribute to creating amazing products that make a lasting difference.
                            </Text>
                        </Box>
                    </Stack>
                </HStack>
            </Flex>

            <Footer />
        </>
    )
}

export default About