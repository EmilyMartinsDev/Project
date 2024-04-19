import Header from "@/components/Header";
import { Box, Heading, Stack, FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

function CreateProfessional() {
  return (
    <>
       
   <Header/>
   <Flex justifyContent={'end'} mr={10} gap={8}>
          
    <Button w={40} bg={'transparent'} border={'1px solid'} borderColor={'blue.500'}  color={'blue.500'}><Link href={'/easycut/professional'}>Voltar</Link></Button>
  </Flex>
   <Box p={4} maxWidth="600px" mx="auto" w={'100%'} justifyContent={'center'}  display={'flex'} alignItems={'center'} flexDirection={'column'}> {/* Define a largura máxima e centraliza o formulário */}
   <Heading fontSize="3xl" my={4}>Cadastro de Profissional</Heading>
   <Stack spacing={4} w={'100%'}   p={5} border={'2px solid'} borderColor={'gray.200'} borderRadius={12}>
     <FormControl id="name">
       <FormLabel>Nome</FormLabel>
       <Input type="text" placeholder="Digite o nome do profissional" />
     </FormControl>

     <FormControl id="email">
       <FormLabel>E-mail</FormLabel>
       <Input type="email" placeholder="Digite o e-mail do profissional" />
     </FormControl>

     <FormControl id="phone">
       <FormLabel>Telefone</FormLabel>
       <Input type="tel" placeholder="Digite o telefone do profissional" />
     </FormControl>

     <FormControl id="address">
       <FormLabel>Endereço</FormLabel>
       <Input type="text" placeholder="Digite o endereço do profissional" />
     </FormControl>

     <Button colorScheme="blue" type="submit">
       Cadastrar
     </Button>
   </Stack>
 </Box>
    </>
  );
}

export default CreateProfessional;
