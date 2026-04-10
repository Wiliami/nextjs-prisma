import { createContext, useState } from "react"

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState()

    const login = () => {
        
    } 

    return (
        <AuthContext.Provider value={{}}>
            <>{children}</>
        </AuthContext.Provider>
    )
}