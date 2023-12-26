import "./Saludo.css"

const Saludo = ({ saludo }) => {
    return(
        <div id="Saludo">
            <img src="/img/guitarra.jpg" alt="" />
            <div className="texto">
            <p>{ saludo }</p>
            </div>
        </div>
    )
}

const Layout = ({children}) => (
    <div>
        <Saludo saludo="Bienvenido a 8Tonicas - Tu Destino Musical." />
        <Saludo saludo="Descubre el mundo de la música en 8Tonicas, tu tienda online de instrumentos musicales. Nos enorgullece ofrecer una amplia selección de instrumentos de alta calidad que se adaptan a todos los estilos y niveles. Desde guitarras y pianos hasta equipos de estudio, aquí encontrarás todo lo que necesitas para llevar tu pasión musical al siguiente nivel"/>
        {children}
    </div>
);

export default Layout
