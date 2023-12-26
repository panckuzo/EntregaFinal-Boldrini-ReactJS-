import { useEffect, useState } from "react"
import obtenerProductos from "../Utilidades/Data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(()=>{
    obtenerProductos
        .then((respuesta)=> {
        const productoEncontrado = respuesta.find( (prod)=> prod.id === id)
        setProducto(productoEncontrado)
        })
        .catch((err)=>{
        console.log(err)
        })

    }, [])

    return (
    <div className="ItemDetailContainer">
        <ItemDetail producto={producto} />
    </div>
    )
}
export default ItemDetailContainer