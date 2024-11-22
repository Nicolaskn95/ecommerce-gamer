import { InstallmentCalc } from "@gstore/core";

export default function useInstallment(value: number, quantity: number = 12) {
  const installment = new InstallmentCalc().implement(value, quantity);
  return installment;
}
