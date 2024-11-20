import { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

const useShoppingCart = () => useContext(ShoppingCartContext);

export default useShoppingCart;
