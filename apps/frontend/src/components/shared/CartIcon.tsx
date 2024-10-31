import { HiOutlineShoppingCart } from "react-icons/hi";

interface CartIconProps {
  itensQtd: number;
}
function CartIcon({ itensQtd }: CartIconProps) {
  return (
    <div className="flex justify-center items-center rounded-full w-14 h-14 bg-violet-dark relative ">
      <HiOutlineShoppingCart size={30} color="white" />
      <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
        {itensQtd ?? 0}
      </div>
    </div>
  );
}

export default CartIcon;
