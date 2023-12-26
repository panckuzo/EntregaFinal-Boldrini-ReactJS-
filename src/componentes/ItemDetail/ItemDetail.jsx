import "./ItemDetail.css"
import { Link } from "react-router-dom";
const ItemDetail = ({ producto }) => 
{
    return (
        <div className="ItemDetail">
            <img className="imagen" src={producto.imagen} alt="{producto.nombre}" />
            <div className="detalle"> 
                <p className="nombre" > {producto.nombre}</p>
                <p className="descripcion"> {producto.descripcion}</p>
                <p className="precio">$ {producto.precio}</p>
                <Link to={`/carrito/${producto.id}`} className="link">Agregar al Carrito </Link>
            </div>
        </div>
    )
    }
    
export default ItemDetail