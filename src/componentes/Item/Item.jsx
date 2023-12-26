import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
    <div className="item">
        <img className="imagen" src={producto.imagen} alt={producto.nombre} />
        <p className="titulo"> {producto.nombre} </p>
        <p className="precio">$ {producto.precio} </p>
        <Link to={`/detalle/${producto.id}`} className="link">Ver detalles </Link>
    </div>
    );
};
export default Item;
