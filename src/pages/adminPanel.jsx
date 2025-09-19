import { Link, Route, Routes } from "react-router-dom";

export default function AdminPanel() {
    return (
        <div className="w-full h-screen flex flex-row bg-amber-600">
            <div className="w-[300px] h-full shadow-md p-4 bg-red-300 flex flex-col gap-4">
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/settings">Settings</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-green-300">
                <Routes>
                    <Route path="products" element={<h1>Products Page</h1>} />
                    <Route path="orders" element={<h1>Orders Page</h1>} />
                    <Route path="users" element={<h1>Users Page</h1>} />
                    <Route path="settings" element={<h1>Settings Page</h1>} />
                    <Route path="" element={<h1>Welcome to Admin Panel</h1>} />
                </Routes>
            </div>
        </div>
    )
}