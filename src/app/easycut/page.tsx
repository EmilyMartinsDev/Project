'use client'

import { AuthContext } from "@/contexts/AuthContext";
import { Box, Flex, Input, Button, Link, Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { FormEvent, useContext, useState } from "react";





function MeuFormulario() {

    const { signin } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  
   async function handleLogin(event: FormEvent){
        event.preventDefault()
  
        if(email === '' || password === ''){
         
          return;
        }
  
        setLoading(true)
  
        let data = {
         email, password
        }
  
       await signin(data)
      
       setLoading(false)
    }
  


    return (
        <Flex color='white' backgroundColor='blue.500' height='100vh' alignItems='center' justifyContent='center'>
            <Box>
                   
          <Center p={4}>
                <Heading  fontSize="6xl" fontWeight="bold" color="white" textAlign="center">
                EasyCut
                </Heading>
                </Center>
            <Flex width={640} direction='column' p={8} backgroundColor='white' rounded={8}>
             <form onSubmit={handleLogin}>
    
                <Input
                    background='gray.200'
                    variant='filled'
                    size='lg'
                    type='email'
                    color={'gray.700'}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    color={'gray.700'}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    background='yellow.400'
                    mt={8}
                    color='gray.900'
                    size='lg'
                    w={'100%'}
                    _hover={{bg: "#ffb13e"}}
                >
                    Acessar
                </Button>
                <Center color={'blue.900'} mt={2}>
                    <Link href='easycut/register'>
                        <Box>
                            Ainda não possui uma conta? <strong>Cadastre-se</strong>
                        </Box>
                    </Link>
                </Center>
                </form>
            </Flex>
            </Box>
        </Flex>   
    );
}

export default MeuFormulario;
