/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axios from 'axios'
import Table from 'react-bootstrap/Table';

function Axios() {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true);
    let [searchTerm, setSearchTerm] = useState("");
    let [formData, setFormData] = useState("");


    function GetData() {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => setData(res.data))
            .finally(() => {
                setLoading(false);
            });
        console.log(data);

    }
    useEffect(() => {
        GetData()
    }, [])


    const filteredProducts = data.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    async function handleDelete(id) {
        await axios.delete(`https://northwind.vercel.app/api/products/${id}`)
        let filtered = data.filter((product) => product.id !== id)
        setData(filtered)

    }
    async function handlePost(e) {
        e.preventDefault();
        const newProduct = {
            name: formData.name,
            quantityPerUnit: formData.quantityPerUnit,
            unitPrice: parseFloat(formData.unitPrice),
            unitsInStock: parseInt(formData.unitsInStock, 10),
        };


        const res = await axios.post("https://northwind.vercel.app/api/products", newProduct);
        setData([...data, res.data]);
        setFormData({ name: "", quantityPerUnit: "", unitPrice: "", unitsInStock: "" });

    }
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }


    return (

        <>
            <BasicExampleForm 
                formData={formData} 
                onInputChange={handleInputChange} 
                onSubmit={handlePost} 
            />
            <>
                <input
                    type="text"
                    placeholder="search product"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "20px",
                        fontSize: "16px",
                    }}
                />
            </>

            {loading ? (

                <div className="loader">Loading...</div>
            ) : (

                <BasicExample data={filteredProducts} onDelete={handleDelete} />
            )}
        </>
    )
}
function BasicExample({ data, onDelete }) {
    return (
        <Table
        //  striped bordered hover
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Quantity Per Unit</th>
                    <th>Unit Price</th>
                    <th>stock</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td style={{ color: product.discontinued ? "red" : "black" }}>
                            {product.unitPrice}
                        </td>
                        <td style={{ color: product.unitsInStock > 10 ? "green" : "black" }}>{product.unitsInStock}</td>
                        <td>
                            <button onClick={() => onDelete(product.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExampleForm({ formData, onInputChange, onSubmit }) {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    placeholder="Product Name"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quantity Per Unit</Form.Label>
                <Form.Control
                    type="text"
                    name="quantityPerUnit"
                    value={formData.quantityPerUnit}
                    onChange={onInputChange}
                    placeholder="Quantity Per Unit"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Unit Price</Form.Label>
                <Form.Control
                    type="text"
                    name="unitPrice"
                    value={formData.unitPrice}
                    onChange={onInputChange}
                    placeholder="Unit Price"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    type="text"
                    name="unitsInStock"
                    value={formData.unitsInStock}
                    onChange={onInputChange}
                    placeholder="Stock"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Axios