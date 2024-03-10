import { useNavigate } from 'react-router-dom'
import { isLoggedIn, loggedInUserDetails } from '../lib/localStorageItems'
import { mockServerCall, stringify } from '../lib/utils'
import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react'

type UserContext = {
  email: string
  isAdmin: boolean
}

// Create the context
const AuthContext = createContext<{
  authed: boolean
  user: UserContext | null
  setAuthed: (auth: boolean) => void
  login: (email: string, isAdmin: boolean) => Promise<void>
  logout: () => void
}>({
  authed: false,
  user: null,
  setAuthed: (auth: boolean) => {},
  login: async (email: string, isAdmin: boolean) => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
  // Using the useState hook to keep track of the value authed (if a
  // user is logged in)
  const [authed, setAuthed] = useState<boolean>(false)
  const [user, setUser] = useState<UserContext | null>(null)

  const login = async (email: string, isAdmin: boolean): Promise<void> => {
    await mockServerCall()

    localStorage.setItem(isLoggedIn, stringify(true))
    localStorage.setItem(
      loggedInUserDetails,
      stringify({
        isAdmin,
        email,
      })
    )

    setAuthed(true)
    setUser({ isAdmin: isAdmin, email })
  }

  const logout = async (): Promise<void> => {
    localStorage.removeItem(isLoggedIn)
    localStorage.removeItem(loggedInUserDetails)

    setAuthed(false)
    setUser(null)

    console.log('The User has logged out')
  }

  const value = useMemo(() => ({ authed, setAuthed, login, logout, user }), [authed, user])

  return (
    // Using the provider so that ANY component in our application can
    // use the values that we are sending.
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

// Finally creating the custom hook
export const useAuth = () => useContext(AuthContext)
