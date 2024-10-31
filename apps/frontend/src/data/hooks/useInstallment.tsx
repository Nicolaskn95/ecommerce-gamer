import { InstallmentCalc } from "@/core";

export default function useInstallment(value: number, quantity: number = 1) {
  const installment = new InstallmentCalc().implement(value, quantity);
  return installment;
}
