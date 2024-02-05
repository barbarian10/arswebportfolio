import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import projectdigital from '../assets/projects/digital.png'
import project2 from '../assets/projects/portfolio-preview.png'
import project3 from '../assets/projects/cardgame-preview.png'
import { Footer } from '../components/Footer'
import { ProjectBox } from '../components/ProjectBox/ProjectBox'
import githubIcon from '../assets/projects/github.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { AiFillHtml5} from 'react-icons/ai'
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb'
import { SiChakraui, SiCss3, SiExpress, SiJavascript, SiTypescript } from 'react-icons/si'
import PayloadIcon from '../assets/tech logos/payload-cms.png'
import StripeIcon from '../assets/tech logos/stripe-icon.png'

type Props = {}

const Projects = (props: Props) => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
        <>
            <Flex width='full'
                pl={{ base: 2, md: 40 }}
                pt={{ base: 28, md: 44 }}
                pr={{ base: 2, md: 24 }}
                pb={{ base: 12, md: 32 }}>

                <Stack px={{ base: 8, md: 20 }} spacing={{ base: 4, md: 0 }}>
                    <Heading
                        fontSize={{ base: '4xl', md: '6xl' }}
                        bgGradient={headingColor}
                        bgClip='text'
                        p={5}
                    >My projects
                    </Heading>
                    <HStack>
                        <Box pt={1}>
                            <Image src={githubIcon} alt='github icon' className='h-24 w-24' />
                        </Box>.

                        <Link
                            href='https://github.com/barbarian10' passHref
                            legacyBehavior>
                            <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>Github</Text></a>
                        </Link>
                    </HStack>

                    <SimpleGrid
                        columns={1}
                        spacing={{ base: 12, md: 14 }}
                        py={{ base: 4, md: 8 }}
                        rounded='xl'>

                        <ProjectBox
                            image={projectdigital}
                            heading='Digital Marketplace'
                            data='A cool marketplace with a seller and admin dashboards, authorization, cart, buying and selling functionalities.
                            Made with Payload, Express, TRPc, Next.'
                            link='/projects/digital-marketplace'
                            projectLink='https://mrktplace.up.railway.app/'
                            >
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiExpress} color='blue.300' />
                                <Text>Express</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                            <Image width={17} height={17} src={PayloadIcon} alt='payloadcms'/>
                                <Text>Payload</Text>
                            </HStack>
                            <HStack>
                            <Image width={17} height={17} src={StripeIcon} alt='stripe'/>
                                <Text>Stripe</Text>
                            </HStack>

                        </ProjectBox>


                        <ProjectBox
                            image={project2}
                            heading='Portfolio Website'
                            data='I&apos;ve developed this project as a means of consolidating my recent endeavors, providing a comprehensive overview for prospective employers to gain insights into my capabilities and experiences.'
                            link='/projects/portfolio-website'
                            projectLink=''
                            githubLink=''>
                            <HStack>
                                <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                                <Text>NextJS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiChakraui} color='blue.300' />
                                <Text>Chakra UI</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiTypescript} color='blue.300' />
                                <Text>TypeScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>

                        <ProjectBox
                            image={project3}
                            heading='Card Game using JS'
                            data='
                            The game has a bunch of cards arranged in a grid. You can flip them over to find pairs. If you find a match, the cards stay flipped. If not, they turn back. Keep going until all the cards are matched.'
                            link='/projects/memory-game'
                            projectLink='https://cardgame-beta-orcin.vercel.app/'
                            githubLink='https://github.com/barbarian10/cardgame'>
                            <HStack>
                                <Icon as={SiJavascript} color='blue.300' />
                                <Text>JavaScript</Text>
                            </HStack>
                            <HStack>
                                <Icon as={AiFillHtml5} fontSize='1.2em' color='blue.300' />
                                <Text>HTML</Text>
                            </HStack>
                            <HStack>
                                <Icon as={SiCss3} color='blue.300' />
                                <Text>CSS</Text>
                            </HStack>
                            <HStack>
                                <Icon as={TbBrandVercel} color='blue.300' />
                                <Text>Vercel</Text>
                            </HStack>
                        </ProjectBox>

                    </SimpleGrid>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}

export default Projects