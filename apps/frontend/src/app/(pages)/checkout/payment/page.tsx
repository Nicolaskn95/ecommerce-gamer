"use client";
import HeaderStepCheckout from "@/components/checkout/HeaderStepCheckout";
import DeliveryForms from "@/components/checkout/payment/DeliveryForms";
import PaymentMethodSelect from "@/components/checkout/payment/PaymentMethodSelect";
import PaymentSummary from "@/components/checkout/payment/PaymentSummary";
import usePayment from "@/data/hooks/usePayment";
import useShoppingCart from "@/data/hooks/useShoppingCart";

export default function Page() {
  const { installment, qttItems, totalValue, fullTotalValue } =
    useShoppingCart();
  const {
    checkout,
    delivered,
    modifyDelivered,
    modifyPaymentMethod,
    paymentMethod,
  } = usePayment();

  return (
    <div className="flex flex-col gap-7 container">
      <HeaderStepCheckout step="payment" />
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <PaymentMethodSelect
            paymentMethod={paymentMethod}
            hasChangedPaymentMethod={modifyPaymentMethod}
          />
          <DeliveryForms
            delivery={delivered}
            hasChangeDelivery={modifyDelivered}
          />
        </div>
        <PaymentSummary
          qttItens={qttItems}
          totalValue={totalValue}
          fullyTotalValue={fullTotalValue}
          installment={installment}
          checkout={checkout}
          className="mt-12"
        />
      </div>
    </div>
  );
}
