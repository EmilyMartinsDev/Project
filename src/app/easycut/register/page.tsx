'use client'

import { UserType } from "@/enums/UserType";
import { AuthContext } from "@/contexts/AuthContext";
import { Box, Flex, Input, Button, Link, Heading, Select } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from 'yup'
import ReactInputMask from "react-input-mask";
import { useContext } from "react";
type RegisterForm = {
    name:string
    email:string
    password:string
    fone:string
    userType:UserType
}

function Register() {
 const {signUp} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<RegisterForm>({})

      const onSubmit: SubmitHandler<RegisterForm> = async(data) => {

  
        try{
            await signUp({...data})
        }catch(err){
            console.log(err)
        }
      }
    return (
        <Flex color='white' backgroundColor='blue.500' height='100vh' alignItems='center' justifyContent='center'>
           <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Box>
                   
          <Center p={4}>
                <Heading  fontSize="6xl" fontWeight="bold" color="white" textAlign="center">
                EasyCut
                </Heading>
                </Center>
            <Flex width={640} direction='column' p={8} backgroundColor='white' rounded={8}>
             
    
            <Input
                  {...register("name")}
                    background='gray.200'
                    variant='filled'
                    size='lg'
                    type='text'
                    placeholder='nome'
                    _hover={{bg: 'none'}}
                    color={'gray.500'}
                    mb={3}
                />
                <Input
                   {...register("email")}
                    background='gray.200'
                    variant='filled'
                    size='lg'
                    type='email'
                    placeholder='email'
                    _hover={{bg: 'none'}}
                    color={'gray.500'}
                    mb={3}
                />
                   <Input
                      {...register("fone")}
                    as={ReactInputMask}
                    mask={'(99) 99999-9999'}
                    background='gray.200'
                    variant='filled'
                    size='lg'
                    type='text'
                    color={'gray.500'}
                    placeholder='fone'
                    _hover={{bg: 'none'}}
                    mb={3}
                />
                <Input
                   {...register("password")}
                    background='gray.200'
                    variant='filled'
                    size='lg'
                    _hover={{bg: 'none'}}
                    type='password'
                    color={'gray.500'}
                    placeholder='************'
                    mb={6}
                />
                <Select     {...register("userType")}   background='gray.200' color={'gray.600'}  placeContent={''}>
                    <option value='PROVIDER'>Sou Prestador</option>
                    <option value='CUSTOMER'>Sou Cliente</option>
                </Select>
                <Button
                    type="submit"
                    background='yellow.400'
                    mt={8}
                    color='gray.900'
                    size='lg'
                    _hover={{bg: "#ffb13e"}}
                >

                    Cadastrar
                </Button>
                <Center color={'blue.900'} mt={2}>
                    <Link href='/register'>
                        <Box>
                            Já possui uma conta? <strong>Faça Login!</strong>
                        </Box>
                    </Link>
                </Center>
            </Flex>
            
            </Box>
            </form>
        </Flex>   
    );
}

export default Register;
