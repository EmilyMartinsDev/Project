import { Box, Flex, Input, Button, Link, Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

function MeuFormulario() {
    return (
        <Flex color='white' backgroundColor='blue.500' height='100vh' alignItems='center' justifyContent='center'>
            <Box>
                   
          <Center p={4}>
                <Heading  fontSize="6xl" fontWeight="bold" color="white" textAlign="center">
                EasyCut
                </Heading>
                </Center>
            <Flex width={640} direction='column' p={8} backgroundColor='white' rounded={8}>
             
    
                <Input
                    background='gray.200'
                    variant='filled'
                    size='lg'
                    type='email'
                    placeholder='email'
                    _hover={{bg: 'none'}}
                    mb={3}
                />
                <Input
                    background='gray.200'
                    variant='filled'
                    size='lg'
                    _hover={{bg: 'none'}}
                    type='password'
                    placeholder='************'
                    mb={6}
                />
                <Button

                    background='yellow.400'
                    mt={8}
                    color='gray.900'
                    size='lg'
                    _hover={{bg: "#ffb13e"}}
                >
                    Acessar
                </Button>
                <Center color={'blue.900'} mt={2}>
                    <Link href='/register'>
                        <Box>
                            Ainda não possui uma conta? <strong>Cadastre-se</strong>
                        </Box>
                    </Link>
                </Center>
            </Flex>
            </Box>
        </Flex>   
    );
}

export default MeuFormulario;
