import { Link as RouterLink, Outlet } from "react-router-dom";
import {
    Flex,
    Button,
    Heading,
    HStack,
} from '@chakra-ui/react';
export default function NavBar() {
    return (
        <>
            <Flex w="100%" p={3} direction="row" bg="#323277" justify="space-between">
                <Heading>
                    <RouterLink to="/">
                        <Heading>안녕!</Heading>
                    </RouterLink>
                </Heading>
                <HStack>
                    <Button as={RouterLink} to="login">Login</Button>
                    <Button as={RouterLink} to="embed_page_example"> Embed Page Example</Button>
                </HStack>
            </Flex>
            <Outlet />
        </>
    );
}