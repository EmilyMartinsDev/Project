'use client'

import Calendar from "../../../components/Calendar/Calandar";
import Header from "../../../components/Header";
import { Box, Flex, Input, Button, Link, Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

function Dashboard() {
    

    return (
       <>
        <Header/>
        <Calendar/>
       </>  
    );
}

export default Dashboard;
