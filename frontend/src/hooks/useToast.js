import { ToastContext } from "../utils/contextProducer";
import { useContext } from "react";

export function useToast() {
  return useContext(ToastContext);
}