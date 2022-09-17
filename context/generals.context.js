import { createContext, useContext, useState } from 'react'

const GeneralsContext = createContext()

const useGeneralsController = (options, polylang) => {
  const [generals, setGenerals] = useState({ options, polylang })

  return { options: generals.options, polylang: generals.polylang }
}

export const GeneralsProvider = ({ children, options, polylang }) => {
  return (
    <GeneralsContext.Provider value={useGeneralsController(options, polylang)}>
      {children}
    </GeneralsContext.Provider>
  )
}

export const useGenerals = () => useContext(GeneralsContext)
