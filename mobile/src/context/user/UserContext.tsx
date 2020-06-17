import React, { createContext, useState, useContext } from "react";

interface User {
    email: string
    isDriver: boolean
    searchingForRide?: boolean
}

interface IUserContext {
    user: User
    setUser(data: User): void,
}

const UserContext = createContext<IUserContext>({} as IUserContext)

const UserProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<User>({} as User)

    return (
        <UserContext.Provider value={{ user: data, setUser: setData }}>
            {children}
        </UserContext.Provider>
    )
}

function userContext() {
    const context = useContext(UserContext)
    if (!context) throw new Error('Context not initialized')

    return context
}

export { UserProvider, userContext }