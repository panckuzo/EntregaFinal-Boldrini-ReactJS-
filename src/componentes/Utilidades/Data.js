const productos = [
    {
        id:"1",
        nombre: "Tama Imperial Star",
        descripcion: "5 Cuerpos + Fierros " ,
        stock: 10,
        precio: 1078346,
        imagen: "/img/TAMA.webp",
        categoria:"percusion"
    },
    {
        id: "2",
        nombre: "Pearl Master Maple",
        descripcion: "4 Cuerpos + Fierros",
        stock: 2,
        precio: 2056750,
        imagen: "/img/PEARL.webp", 
        categoria:"percusion"    
    },
    {
        id: "3",
        nombre: "Cajón Flamenco Dual",
        descripcion: "Material eucalipto y Guatambú",
        stock: 2,
        precio: 32990,
        imagen: "/img/CAJON.webp", 
        categoria:"percusion"    
    },
    {
        id: "4",
        nombre: "Guitarra Eléctrica Fender",
        descripcion: "Stratocaster",
        stock: 25,
        precio: 1712871,
        imagen: "/img/FENDER.webp",
        categoria:"cuerdas"
    },
    {
        id: "5",
        nombre: "Guitarra Eléctrica Gibson" ,
        descripcion: "Les Paul Standard",
        stock: 3,
        precio: 5881215,
        imagen: "/img/GIBSON.webp",
        categoria:"cuerdas"
    },
    {
        id: "6",
        nombre: "Ibanez Bajo Electrico" ,
        descripcion: "Nogal Walnut 5 Cuerdas",
        stock: 5,
        precio: 526900,
        imagen: "/img/IBANEZ.webp",
        categoria:"cuerdas"
    },
    {
        id: "7",
        nombre: "Teclado Casio Ctk3500  " ,
        descripcion: "5 Octavas Sensitivo",
        stock: 5,
        precio: 265050,
        imagen: "/img/CASIO.webp",
        categoria:"teclas"
    },
    {
        id: "8",
        nombre: "Piano Vertical Digital" ,
        descripcion: " 88 Teclas Accion Martillo Sensitivas ",
        stock: 1,
        precio: 1753425,
        imagen: "/img/PIANO.webp",
        categoria:"teclas"
    },
    {
        id: "9",
        nombre: " Sintetizador Korg I3" ,
        descripcion: "Korg I3 Workstation 61 Teclas",
        stock: 3,
        precio: 919085,
        imagen: "/img/SINTETIZADOR.webp",
        categoria:"teclas"
    },
    {
        id: "10",
        nombre: "Saxo Alto Parquer" ,
        descripcion: "Custom Estudio + Estuche",
        stock: 10,
        precio: 700995,
        imagen: "/img/SAXO.webp",
        categoria:"vientos"
    },
    {
        id: "11",
        nombre: "Trompeta Parquer Custom" ,
        descripcion: "Si Bemol Metal Dorado + Estuche",
        stock: 10,
        precio: 239469,
        imagen: "/img/TROMPETA.webp",
        categoria:"vientos"
    },
    {
        id: "12",
        nombre: "Trombon Tenor Parquer" ,
        descripcion: "De vara",
        stock: 10,
        precio: 463578,
        imagen: "/img/TROMBON.webp",
        categoria:"vientos"
    },
    {
        id: "13",
        nombre: "Amplificador Marshall Code 50  " ,
        descripcion: "Transistor para guitarra de 50W color negro 220V",
        stock: 5,
        precio: 552871,
        imagen: "/img/AMPLI-M.webp",
        categoria:"equipos"
    },
    {
        id: "14",
        nombre: "Amplificador Fender Series 100   " ,
        descripcion: "Para guitarra de 100W color negro/plata 220V",
        stock: 5,
        precio: 523450,
        imagen: "/img/AMPLI-F.webp",
        categoria:"equipos"
    },
    {
        id: "15",
        nombre: "Combo Amplificador Bajo Peavey" ,
        descripcion: "Para bajo de 100W color negro 220V",
        stock: 5,
        precio: 523450,
        imagen: "/img/AMPLI-B.webp",
        categoria:"equipos"
    },
];


const obtenerProductos = new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

export default obtenerProductos