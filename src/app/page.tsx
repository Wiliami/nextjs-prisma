export default function App() {   
    const products = [
        { id: 1, name: 'Mouse', category: 'Periféricos', price: 80 },
        { id: 2, name: 'Teclado', category: 'Periféricos', price: 100 },
        { id: 3, name: 'Headset', category: 'Periféricos', price: 150 },
        { id: 4, name: 'Monitor', category: 'Monitores', price: 600 },
        { id: 5, name: 'Monitor Samsung', category: 'Monitores', price: 20 },
        { id: 5, name: 'Mesa deslizadora', category: 'Acessórios', price: 20 },
    ]

    const groupedProducts = Object.groupBy(
        products,
        (product) => product.category
    )

    // if(groupedProducts[index].category === 'Periféricos') {
    //     console.log(groupedProducts[index].category)
    // }

    console.log('Periféricos: ', groupedProducts.Periféricos[0].name)
    console.log('Monitores: ', groupedProducts.Monitores)
    console.log('Acessórios: ', groupedProducts.Acessórios)


    // agrupar 
    
    return (
     <h1>{groupedProducts.Periféricos[0].id}</h1>
    )
}