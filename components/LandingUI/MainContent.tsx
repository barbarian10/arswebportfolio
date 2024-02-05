import { Box, Button, Heading, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false })

export const MainContent = () => {


    const headingColor = useColorModeValue('linear(to-r, pink.200, blue.200)', 'linear(to-r, pink.200, blue.700)')

    return (
        <Stack px='12%' justify={'center'} w='full' height={{ base: '90vh', md: '100vh' }}>
            <Stack spacing={{ base: 4, md: 10 }} maxW='3xl'>
                <Stack spacing={2}>
                    <Text fontSize={{ base: 'lg', md: 'xl' }}>Hi <span>👋</span>, I am</Text>
                    <Heading fontSize={{ base: '6xl', md: '8xl' }}
                        bgGradient={headingColor}
                        bgClip='text'>
                        Arslan Bektemir
                    </Heading>
                    <Heading as='div' fontSize='5xl'
                        display={{ base: 'none', md: 'flex' }}
                        bgGradient='linear(to-r, blue.200, blue.700)'
                        bgClip='text'>
                        <HStack spacing={0} pb={2}>
                            <Text>I&apos;m a&nbsp;</Text>
                            <Box>
                                <Typewriter
                                
                                    options={{
                                        strings: ['front-end developer', 'beginner full-stack dev'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Box>
                        </HStack>
                    </Heading>
                    <Heading as='div' fontSize='2xl'
                        display={{ base: 'flex', md: 'none' }}
                        bgGradient='linear(to-r, blue.200, blue.700)'
                        bgClip='text'>
                        <HStack spacing={0}>
                            <Text>I&apos;m a&nbsp;</Text>
                            <Box>
                                <Typewriter
                                    options={{
                                        strings: ['software developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Box>
                        </HStack>
                    </Heading>
                </Stack>
                <Text as='p' fontSize={{ base: 'md', md: 'lg' }} color='gray.500'>
                    I&apos;m a beginner full-stack software developer.{' '}
                    {/* I help create applications that address customer needs and solve complex business challenges. */}
                    My expertise lies within front-end web app development and my go-to tech stack includes
                    TypeScript, React, NextJS, and HTML & CSS.
                </Text>
                <Button
                    colorScheme='blue'
                    variant='outline'
                    width='fit-content'>
                    <Link href='/contact'>
                        <HStack>
                            <Text>Get in touch</Text>
                            <FaTelegramPlane />
                        </HStack>
                    </Link>
                </Button>
            </Stack>
        </Stack>
    )
}