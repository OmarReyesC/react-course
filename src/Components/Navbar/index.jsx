import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to='/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/men-clothing'
                    onClick={() => context.setSearchByCategory(`men's clothing`)}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/women-clothing'
                    onClick={() => context.setSearchByCategory("women's clothing")}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/jewelery'
                    onClick={() => context.setSearchByCategory("jewelery")}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    place@holder.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-out'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Sign Out
                    </NavLink>
                </li>
                <li className="flex"
                    onClick={() => context.openCheckoutSideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <div>
                        {context.cartProducts.length}
                    </div>                    
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;