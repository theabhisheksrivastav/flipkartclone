import { useState, useEffect } from 'react';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({ name: '', price: '', image: '' });
    const [editingProductId, setEditingProductId] = useState(null);

    // Fetch products on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Handle input change in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission for creating or updating products
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price || !formData.image) {
            alert("All fields are required!");
            return;
        }

        try {
            if (isEditMode) {
                // Update product
                await fetch(`http://localhost:5000/api/products/${editingProductId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                setProducts(products.map(product =>
                    product._id === editingProductId ? { ...product, ...formData } : product
                ));
            } else {
                // Create new product
                const response = await fetch('http://localhost:5000/api/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const newProduct = await response.json();
                setProducts(prevProducts => [...prevProducts, newProduct]);
            }

            // Reset form
            setFormData({ name: '', price: '', image: '' });
            setIsEditMode(false);
            setEditingProductId(null);
        } catch (error) {
            console.error('Error handling form submission:', error);
        }
    };

    // Initialize form for editing a product
    const handleEdit = (product) => {
        setIsEditMode(true);
        setEditingProductId(product._id);
        setFormData({ name: product.name, price: product.price, image: product.image });
    };

    // Handle product deletion
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await fetch(`http://localhost:5000/api/products/${id}`, {
                    method: 'DELETE',
                });
                setProducts(products.filter(product => product._id !== id));
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Admin Panel</h1>

            {/* Form for creating or editing a product */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded shadow-md mb-6 max-w-lg"
            >
                <h2 className="text-2xl font-semibold mb-4">
                    {isEditMode ? 'Edit Product' : 'Add New Product'}
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div className="flex space-x-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        {isEditMode ? 'Update Product' : 'Add Product'}
                    </button>
                    {isEditMode && (
                        <button
                            type="button"
                            onClick={() => {
                                setIsEditMode(false);
                                setFormData({ name: '', price: '', image: '' });
                                setEditingProductId(null);
                            }}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* Product list */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow rounded">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="text-left py-3 px-4">ID</th>
                            <th className="text-left py-3 px-4">Name</th>
                            <th className="text-left py-3 px-4">Price</th>
                            <th className="text-left py-3 px-4">Image</th>
                            <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="border-b hover:bg-gray-100">
                                <td className="py-3 px-4">{product._id}</td>
                                <td className="py-3 px-4">{product.name}</td>
                                <td className="py-3 px-4">{product.price}</td>
                                <td className="py-3 px-4">
                                    <img src={product.image} alt={product.name} className="h-10 w-10 rounded" />
                                </td>
                                <td className="py-3 px-4 flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
