import Image from "next/image";
import Link from "next/link";
import CartIcon from "../shared/CartIcon";

function Header() {
  const itemsqtd = 0;
  return (
    <div
      className="flex-flex-col mb-6"
      style={{
        background:
          "linear-gradient(90deg, #14002D 0%, #14002D 50%, #420093 100%)",
      }}
    >
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image alt="logo" src={"/gamerLogo.png"} width={350} height={350} />
        </Link>
        <Link href={"/checkout/cart"} className="mr-5">
          <CartIcon itensQtd={itemsqtd} />
        </Link>
      </div>
      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
    </div>
  );
}

export default Header;
