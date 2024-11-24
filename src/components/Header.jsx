import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Header() {
    return (
        <header className="bg-white text-black py-5 px-36 flex justify-between items-center">
            
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-10">
                    
                    <h1 className="text-2xl font-bold">CreatiConnect</h1>
                </div>
            </div>
            <div className="flex items-center gap-x-10">
                <NavLink to="/">Home</NavLink>
                <NavLink>Assets</NavLink>
                <NavLink>Jobs</NavLink>
                
                <div className="relative">
                    <input 
                        type="text"
                        placeholder="Search..."
                        className="px-8 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                </div>
                
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </header>
    )
}