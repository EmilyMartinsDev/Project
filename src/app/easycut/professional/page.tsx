'use client'

import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Header from "@/components/Header";
import CustomTable from "@/components/table/table";
import Link from "next/link";
import Pagination from "@/components/Pagination/pagination";
import SearchBar from "@/components/Search/Search";

export default function ProfessionalList() {
  const headers = ["ID", "Nome", "Especialidade", "Localização"];
  const professionals = [
    { id: 1, name: "João Silva", specialty: "Dentista", location: "Coronel Fabriciano" },
    { id: 2, name: "Maria Santos", specialty: "Clínico Geral", location: "Ipatinga" },
    { id: 3, name: "Pedro Oliveira", specialty: "Ortopedista", location: "Coronel Fabriciano" },
    { id: 3, name: "Pedro Oliveira", specialty: "Ortopedista", location: "Coronel Fabriciano" },
    { id: 3, name: "Pedro Oliveira", specialty: "Ortopedista", location: "Coronel Fabriciano" },
    { id: 3, name: "Pedro Oliveira", specialty: "Ortopedista", location: "Coronel Fabriciano" }
  ];
  function onSearch (){

  }
  return (
    <>
      <Box>
        <Header />
        <Flex justifyContent="center" alignItems="center" h="80%">
  
          <Box w="90%">
          <Flex justifyContent="space-between" alignItems="center" mb={8}>
            <Flex gap={8}>
            <Heading fontSize="4xl" textAlign="center">
                Profissionais
            </Heading>
            <Button size="md" bg="blue.600" color="white">
                <Link href="/easycut/professional/new">Novo</Link>
            </Button>
            </Flex>
            <Flex gap={4} >
                <SearchBar  onSearch={onSearch} />
               
            </Flex>
            </Flex>

            <Flex justifyContent="center">
              <CustomTable headers={headers} data={professionals} />
              
            </Flex>
            <Pagination currentPage={1} onPageChange={()=>{}} totalPages={20} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
