import { useContext } from "react";
import { AuthContext } from "../utils/contextProducer";

export function useAuth() {
     return useContext(AuthContext);
}