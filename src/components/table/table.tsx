import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Flex, Button } from "@chakra-ui/react";
import Pagination from "../Pagination/pagination";

interface Professional {
  id: number;
  name: string;
  specialty: string;
  location: string;
}

interface Props {
  headers: string[];
  data: Professional[];
}

function CustomTable({ headers, data }: Props) {
  return (
    <Table variant="striped"   colorScheme="gray" size="lg">
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.specialty}</Td>
            <Td>{item.location}</Td>
            <Td>
                <Flex gap={4}>
                    <Button bg={'yellow.400'}>Editar</Button>
                    <Button color={'white'} bg={'red.600'}>Desativar</Button>
                </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
     
    </Table>
    
  );
}

export default CustomTable;
