import { useContext } from "react";
import { AuthContext } from "../src/AuthContext";

export function useAuth() {
    return useContext(AuthContext)
}