import Link from "next/link";

interface HeaderStepCheckoutProps {
  step: "shopping-cart" | "payment";
}

export default function HeaderStepCheckout(props: HeaderStepCheckoutProps) {
  function selectedColor(step: string) {
    return props.step === step ? "text-pink-500" : "text-zinc-400";
  }

  function selectedBG(step: string) {
    return props.step === step
      ? "bg-pink-500 text-white"
      : "bg-zinc-400 text-black";
  }

  function renderItem(
    step: "shopping-cart" | "payment",
    index: number,
    title: string,
    path: string
  ) {
    return (
      <Link
        href={path}
        className={`
                    flex items-center gap-2 cursor-pointer
                    ${selectedColor(step)}
                `}
      >
        <span
          className={`
                        flex justify-center items-center 
                        text-xs font-bold w-5 h-5 rounded-full 
                        ${selectedBG(step)}
                    `}
        >
          {index}
        </span>
        <span>{title}</span>
      </Link>
    );
  }

  return (
    <div className="flex justify-center items-center gap-6 h-20 select-none">
      {renderItem("shopping-cart", 1, "Carrinho", "/checkout/shopping-cart")}
      <div className="bg-zinc-300 h-px w-12"></div>
      {renderItem("payment", 2, "Pagamento", "/checkout/payment")}
    </div>
  );
}
