import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    };

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                className='cursor-pointer'
                onClick={() => context.closeCheckoutSideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id} 
                            id={product.id} 
                            title={product.title} 
                            imageUrl={product.image} 
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </aside>
    )
};

export default CheckoutSideMenu