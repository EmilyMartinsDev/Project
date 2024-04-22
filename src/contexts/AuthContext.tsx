
'use client'
import { createContext, ReactNode, useState, useEffect } from "react";
import {destroyCookie} from 'nookies'
import  Router  from "next/router";
import { api } from "../services/apiClient";
import { setCookie, parseCookies } from "nookies";
import { UserType } from "@/enums/UserType";

type AuthContextData ={
    user?: UserProps;
    isAuthenticated: boolean;
    signin: (credentials: SignInProps)=> Promise<void>;
    signOut: ()=> void;
    signUp: (credentials: SignUpProps)=> Promise<void>
 }

type  UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type  SignUpProps = {
    name: string;
    email: string;
    password: string;
    fone:string
    userType:UserType
}



export const AuthContext = createContext({} as AuthContextData);


export function signOut(){
    try{
        destroyCookie(undefined, '@nextauth.token');
        Router.push('/easycut')
    }catch{
        console.log('erro ao deslogar')
    }
}


export function AuthProvider({children}:AuthProviderProps){
    


    const [user, setUser] = useState<UserProps> ()
    const isAuthenticated = !!user


    useEffect(()=>{
        const {"nextauth.token": token} = parseCookies()
        if(token){
            api.get('/user/me').then(res=>{
                const {email, name, id} = res.data

                setUser({
                    id, email, name
                })
            })
            .catch(() =>{
                signOut()
            })
        }
    },[])






   async function signin({email, password}: SignInProps){
      try{
        const response = await api.post('/login', {
            email, password
           
        });

        const {id, name, token} = response.data

        setCookie(undefined, '@nextauth.token', token, {

            maxAge: 60 * 60 * 24 * 30,
            path: '/' // todos os caminhos tem acesso ao cookie
        } );


        setUser({
            id, name, email
        })
        

        // passar o token para todas as requisições

        api.defaults.headers['Authorization'] = `Bearer ${token}`
      

        // redirecionar / dashboard
        window.location.href = '/easycut/dashboard'
        // Router.push()

      }catch(err){
        console.log(err)
        console.log('erro ao acessar')
      
      }
    }


    async function signUp({name, email, password, fone, userType}: SignUpProps){
        try{
            const response = api.post('/user', {
                name, email, password, fone, userType
            });
        
           window.location.href = '/easycut'

        }catch(e){
      
            console.log('erro ao cadastrar',e )
        }
    }


    return(
        <AuthContext.Provider value={{user, isAuthenticated, signin, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}