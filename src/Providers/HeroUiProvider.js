// app/providers.tsx
'use client'
import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";
export function HeroUiProvider({children}) {
  return (
    <HeroUIProvider>
      
      {children}
      <ToastProvider /> 
    </HeroUIProvider>
  )
}