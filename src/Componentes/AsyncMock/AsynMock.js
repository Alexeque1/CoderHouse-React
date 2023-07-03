
const FunkoPop = [
    {id: "1", categoria: "4", nombre: "Gwen Stacy", precio: "2,000", img: '../src/Componentes/IMG/GwenSMSale.png'},
    {id: "2", categoria: "1", nombre: "Hades", precio: "1,200", img: '../src/Componentes/IMG/HadesSale.png'},
    {id: "3", categoria: "4", nombre: "Harry Potter", precio: "2,000", img: '../src/Componentes/IMG/HarryPotterSale.png'},
    {id: "4", categoria: "4", nombre: "Chucky", precio: "1,800", img: '../src/Componentes/IMG/ChuckySale.png'},
    {id: "5", categoria: "1", nombre: "Stitch", precio: "1,800", img: '../src/Componentes/IMG/StitchSale.png'},
    {id: "6", categoria: "1", nombre: "Loki", precio: "2,200", img: '../src/Componentes/IMG/LokiSale.png'},
    {id: "7", categoria: "4", nombre: "The Flash", precio: "2,000", img: '../src/Componentes/IMG/TheFlashSale.png'},
    {id: "8", categoria: "3", nombre: "Super Saiyan Goku", precio: "1,800", img: '../src/Componentes/IMG/GokuSuperSaiyanSale.png'},
    {id: "9", categoria: "1", nombre: "La Sirenita", precio: "2,500", img: '../src/Componentes/IMG/SirenitaSale.png'},
    {id: "10", categoria: "2", nombre: "Michael Jordan", precio: "2,000", img: '../src/Componentes/IMG/MichaelJordanSale.png'},
]

export const getMyProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FunkoPop)
        }, 1000);
    })
}

export const getAProducts = (idProd) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = FunkoPop.find(prod => prod.id === idProd);
        resolve(producto);
        }, 500);
    })
}

export const getProductByCategory = (idCatProd) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            const productos = FunkoPop.filter((prod) => prod.categoria === idCatProd)
            resolve(productos)
        }, 500);
    })
}
