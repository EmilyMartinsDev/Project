import { Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowDown  } from 'react-icons/io';

function Header() {
  return (
    <Box bg="blue.400" p={4} mb={8}>
      <Flex justify="space-between" align="center">
        <Text fontSize="4xl" fontWeight="bold" color="white">EasyCut</Text>
        <Flex>
          <Menu>
            <MenuButton        _hover={{ bg: "white", color: "gray.800" }}
              _expanded={{ bg: "white", color: "gray.800" }} as={Button} rightIcon={<IoIosArrowDown />} variant="ghost" color="white" mr={4}>
            Controle
            </MenuButton>
            
            <MenuList>
            <MenuItem> <Link href={'/easycut/schedule'}>Agenda</Link></MenuItem>
              <Divider />
            <MenuItem> <Link href={'/easycut/professional'}>Profissionais</Link></MenuItem>
              <Divider />
            <MenuItem>  <Link href={'/easycut/customer'}>Clientes</Link></MenuItem>
            <Divider />
            <MenuItem>  <Link href={'/easycut/customer'}>Serviços</Link></MenuItem>
            <Divider />
            <MenuItem>  <Link href={'/easycut/subscription'}>Assinaturas</Link></MenuItem>

            </MenuList>
          </Menu>
          <Menu>
            <MenuButton        _hover={{ bg: "white", color: "gray.800" }}
              _expanded={{ bg: "white", color: "gray.800" }} as={Button} rightIcon={<IoIosArrowDown />} variant="ghost" color="white" mr={4}>
            Relatórios
            </MenuButton>
            <MenuList>
              <MenuItem>Relatório de Faturamento</MenuItem>
            
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton         _hover={{ bg: "white", color: "gray.800" }}
              _expanded={{ bg: "white", color: "gray.800" }}as={Button} rightIcon={<IoIosArrowDown />} variant="ghost" color="white">
              Configurações
            </MenuButton>
            <MenuList>
              <MenuItem>Perfil</MenuItem>
              <MenuItem>Notificações</MenuItem>
              <MenuItem>Preferências</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
