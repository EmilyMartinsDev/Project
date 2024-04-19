import React from "react";
import { Flex, Button, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
type Pagination = {
    currentPage:number
    totalPages:number
    onPageChange:(page:number)=>void
}

const Pagination = ({ currentPage, totalPages, onPageChange }:Pagination) => {
  const goToPreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Flex justifyContent="center" my={4}>
   
   <IconButton    mr={2} bg="gray.400" disabled={currentPage === 1} icon={<ChevronLeftIcon />} h={'32px'} onClick={goToPreviousPage}  aria-label="Previous Month" />
     
      <Text mr={2}>
        Página {currentPage} de {totalPages}
      </Text>
      <IconButton    ml={2} bg="gray.400" disabled={currentPage === 10} icon={<ChevronRightIcon />} h={'32px'} onClick={goToPreviousPage}  aria-label="Previous Month" />
    </Flex>
  );
};

export default Pagination;
