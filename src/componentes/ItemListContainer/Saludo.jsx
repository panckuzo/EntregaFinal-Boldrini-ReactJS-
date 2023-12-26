import "./Saludo.css"

const Saludo = ({ saludo }) => {
    return(
        <div id="Saludo">
            <p>{ saludo }</p>
        </div>
    )
}

const Layout = ({children}) => (
    <div className="Layout">
        <img className= "guitarra" src="/img/guitarra.jpg" alt="guitarra" /> 
        <div className= "texto">
        <Saludo saludo='Bienvenido a 8Tonicas'/>
        <Saludo saludo='Descubre el mundo de la música en 8Tonicas, tu tienda online de instrumentos musicales.'/>
        <Saludo saludo='Nos enorgullece ofrecer una amplia selección de instrumentos de alta calidad que se adaptan a todos los estilos y niveles.'/>
        <Saludo saludo='Aquí encontrarás todo lo que necesitas para llevar tu pasión musical al siguiente nivel.'/>
        {children}
        </div>
    </div>
    );

export default Layout
