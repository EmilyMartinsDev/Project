'use client'

import React, { ChangeEvent, useState } from "react";
import { Box, Input, Flex, Button } from "@chakra-ui/react";



const SearchBar = ({ onSearch }:{onSearch:(term:string)=>void}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm );
  };

  return (
    <Flex alignItems="center" w={'100%'} >
      <Input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
        mr={1}
        size={'lg'}
      />
      <Button bg="gray.300" size={'lg'} onClick={handleSearch}>
        Buscar
      </Button>
    </Flex>
  );
};

export default SearchBar;
