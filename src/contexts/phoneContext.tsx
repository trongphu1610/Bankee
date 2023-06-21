import React, { createContext, ReactNode, useContext, useState } from 'react'

type PhoneContextType = {
  phone?: string
  setPhoneNumber?: (phone?: string) => void
}
type PhoneProviderProps = {
  children: ReactNode
}

export const PhoneContext = createContext<PhoneContextType>({})

/**
 * @returns PhoneContext.Provider
 */
export const PhoneProvider = ({ children }: PhoneProviderProps) => {
  const [phone, setPhone] = useState<string | undefined>('')
  const value = {
    phone,
    setPhoneNumber: setPhone,
  }

  return <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
}
/**
 * get useContext
 */
export const usePhone = () => useContext(PhoneContext)
