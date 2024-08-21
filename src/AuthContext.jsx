import { createContext, useRef, useState } from "react";

export const AuthContext = createContext({
    login: "",
    setLogin: null,
    loginRef: null,
    numberOfCoinsIncreased: 2,
    setNumberOfCoinsIncreased: null,
    coins: 0,
    setCoins: null
})

export const AuthProvider = ({children}) => {
    const [login, setLogin] = useState("")
    const loginRef = useRef(null)
    const [numberOfCoinsIncreased, setNumberOfCoinsIncreased] = useState(2)
    const [coins, setCoins] = useState(0)

    return <AuthContext.Provider value={
        {
            login,
            setLogin,
            loginRef,
            numberOfCoinsIncreased,
            setNumberOfCoinsIncreased,
            coins,
            setCoins
        }
    }>
        {children}
    </AuthContext.Provider>
}