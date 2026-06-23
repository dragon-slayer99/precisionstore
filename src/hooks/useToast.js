import { ToastContext } from "../utils/ContextProducer";
import { useContext } from "react";

export function useToast() {
  return useContext(ToastContext);
}