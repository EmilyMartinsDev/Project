// app/providers.tsx
'use client'

import { AuthProvider } from '@/contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (


<ChakraProvider>{children}</ChakraProvider>
   
  )
}