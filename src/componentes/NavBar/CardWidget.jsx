import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { carrito, totalCantidad } = useContext(CartContext);

    return (
    <Link to="/carrito" id="cartwidget">
        <img src="/img/carrito.png" alt="" />
        {carrito.length !== 0 && <p>{totalCantidad()}</p>}
    </Link>
    )
    }

export default CartWidget