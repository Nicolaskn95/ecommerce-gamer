import { MAX_AMOUNT_INSTALLMENTS, INTEREST_RATE_MONTHLY } from "../constants";
import Installment from "./Installment";

export default class InstallmentCalc {
  implement(
    value: number,
    installmentQtd: number = MAX_AMOUNT_INSTALLMENTS,
    interestRate: number = INTEREST_RATE_MONTHLY
  ): Installment {
    if (installmentQtd < 2 || installmentQtd > MAX_AMOUNT_INSTALLMENTS) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_AMOUNT_INSTALLMENTS}`
      );
    }

    const interesWithFees = this.compoundInteresFeed(
      value,
      interestRate,
      installmentQtd
    );

    return {
      installmentValue: this.withTwoDecimalPlaces(
        interesWithFees / MAX_AMOUNT_INSTALLMENTS
      ),
      totalValue: this.withTwoDecimalPlaces(interesWithFees),
      installmentQtd,
      interestRate,
    };
  }

  private compoundInteresFeed(
    totalValue: number,
    monthTax: number,
    intallmentQtd: number
  ): number {
    return totalValue * Math.pow(1 + monthTax, intallmentQtd);
  }

  private withTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
