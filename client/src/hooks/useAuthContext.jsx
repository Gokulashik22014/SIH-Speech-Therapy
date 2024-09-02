import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useAuthContext = () => {
  return useContext(AuthContext)
}

export default useAuthContext