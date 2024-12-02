import {useState, useEffect} from 'react';

const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    

    const handleEdit = (id) => {
        const name = prompt("Enter new product name:");
        const price = prompt("Enter new product price:");
        const image = prompt("Enter new product image URL:");
    
        if (!name || !price || !image) {
            alert("All fields are required!");
            return;
        }
    
        const updatedProduct = { name, price, image };
    
        fetch(`http://localhost:5000/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(() => {
                setProducts(products.map(product => 
                    product._id === id ? { ...product, ...updatedProduct } : product
                ));
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };
    
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            fetch(`http://localhost:5000/api/products/${id}`, {
                method: 'DELETE',
            })
                .then(() => {
                    setProducts(products.filter(product => product._id !== id));
                })
                .catch(error => {
                    console.error('Error deleting product:', error);
                });
        }
    };
    

    const handleAddNewProduct = () => {
        const name = prompt("Enter product name:");
        const price = prompt("Enter product price:");
        const image = prompt("Enter product image URL:");
    
        if (!name || !price || !image) {
            alert("All fields are required!");
            return;
        }
    
        const newProduct = { name, price, image };
    
        fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => {
                setProducts(prevProducts => [...prevProducts, data]);
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };
    

    return (
        <div>
            <h1>Admin Panel</h1>
            <button onClick={handleAddNewProduct}>Add New Product</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.image}</td>
                            <td>
                                <button onClick={() => handleEdit(product._id)}>Edit</button>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;