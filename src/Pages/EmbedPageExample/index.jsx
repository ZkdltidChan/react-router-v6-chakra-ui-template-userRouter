import React, {
    // 
} from "react";
import {
    Button,
    Heading,
} from "@chakra-ui/react";
import { useNavigate, Outlet } from 'react-router-dom';

const EmbedPageExample = () => {
    const navigate = useNavigate()
    return (
        <>
            <Heading>
                Embed Page Example
            </Heading>
            <Button onClick={() => navigate("/embed_page_example/" + 1)}>
                1
            </Button>
            <Button onClick={() => navigate("/embed_page_example/" + 2)}>
                2
            </Button>
            <Button onClick={() => navigate("/embed_page_example/" + 3)}>
                3
            </Button>
            <Outlet />
        </>
    )
}
export default EmbedPageExample;