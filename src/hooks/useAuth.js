import { useContext } from "react";
import { AuthContext } from "../utils/ContextProducer";

export function useAuth() {
     return useContext(AuthContext);
}