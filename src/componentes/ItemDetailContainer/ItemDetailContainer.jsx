// import { useEffect, useState } from "react"
// import obtenerProductos from "../Utilidades/Data"
// import ItemDetail from "../ItemDetail/ItemDetail"
// import { useParams } from "react-router-dom"
// import "./ItemDetailContainer.css"

// const ItemDetailContainer = () => {
//     const [producto, setProducto] = useState({})
//     const { id } = useParams()

//     useEffect(()=>{
//     obtenerProductos
//         .then((respuesta)=> {
//         const productoEncontrado = respuesta.find( (prod)=> prod.id === id)
//         setProducto(productoEncontrado)
//         })
//         .catch((err)=>{
//         console.log(err)
//         })

//     }, [])

//     return (
//     <div className="ItemDetailContainer">
//         <ItemDetail producto={producto} />
//     </div>
//     )
// }
// export default ItemDetailContainer

import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
    const productoRef = doc(db, "productos", id);
    getDoc(productoRef)
    .then((respuesta) => {
        const productoDb = { id: respuesta.id, ...respuesta.data() };
        setProducto(productoDb);
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))
    }, [id]);

    return  (
        <>
            {cargando ? (
            <div className="cargando">
                <ScaleLoader color="#000000" />
            </div>
            ) : (
            <div>
                <ItemDetail producto={producto} />
            </div>
            )}
        </>
        );
    };
    
    
    
    
    
//     (
//     <div>
//         <ItemDetail producto={producto} />
//     </div>
//     );
// };
export default ItemDetailContainer;