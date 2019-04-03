import React, { createContext } from 'react'
import {useReducer} from 'react'
import { authReducer } from './Reducer'


const initialState = {
  crap: true,
  user: {}
}



export const Context = createContext()

export const ContextProvider = ({children}) => {
  const contextValue = useReducer(authReducer, initialState)

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

