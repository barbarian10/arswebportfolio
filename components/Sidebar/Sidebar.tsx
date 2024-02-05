import { Box, ButtonGroup, IconButton, Link, Stack } from '@chakra-ui/react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
type Props = {}

export const Sidebar = (props: Props) => {

    return (
        <Stack
            display={{ base: 'none', md: 'flex' }}
            pos='fixed'
            h='100vh'
            justify='center'
            align='center'
            spacing='8'
            left='10'>
                <Box
                height='150px'
                pos='relative'
                bottom='10%'
                left='5'
                bg='gray.300'
                w='1px'>
            </Box>
            <ButtonGroup
                size='md'
                fontSize='lg'
                left='0'
                pos='absolute'
                variant='ghost'>
                <Stack spacing={6}>
                    <IconButton aria-label='telegram' icon={<FaTelegram fontSize="1.5rem" />} as={Link} isExternal href='https://t.me/arsson' />
                    <IconButton aria-label='Github' icon={<AiFillGithub fontSize="1.5rem" />} as={Link} isExternal href='https://github.com/barbarian10' />
                </Stack>
            </ButtonGroup>
            <Box
                height='150px'
                pos='relative'
                top='10%'
                left='5'
                bg='gray.300'
                w='1px'>
            </Box>
        </Stack>
    )
}