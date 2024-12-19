import { useState } from "react"
import products from "../products.js"


function Product() {
    let [newProduct, setNewproduct] = useState("")
    let [myProductname, setMyproductname] = useState(products)
    let [searchTerm, setSearchTerm] = useState("");
    console.log(products)
    function handleDelete(id) {
        let filtered = myProductname.filter(product => product.id !== id)
        setMyproductname(filtered)

    }
    function handleSubmit(e) {
        e.preventDefault()

        let newProductS = {
            id: crypto.randomUUID(),
            productName: newProduct
        }
        setMyproductname([...myProductname, newProductS])
        setNewproduct("");
    }
    function handleSort() {
        const sorted = [...myProductname].sort((a, b) =>
            a.productName.localeCompare(b.productName)
        );
        setMyproductname(sorted);
    };
    function handleReset() {
        setMyproductname([])
    }
    const filteredProducts = myProductname.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <input
                type="text"
                placeholder="search product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="productname" value={newProduct} onChange={(e) => setNewproduct(e.target.value)} />
                <button>add myProducts</button>
            </form>
            <button onClick={handleSort}>sort</button>
            <button onClick={handleReset}>reset</button>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.productName}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div className="writing">

                {newProduct && <p>Typing: {newProduct}</p>}

            </div>
        </>
    )
}
export default Product