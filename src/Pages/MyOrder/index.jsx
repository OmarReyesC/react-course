import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to={'/my-orders'} className="absolute left-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="h-6 w-6 text-black cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </Link>
          <h1>MyOrder</h1>
        </div>
        <div className='flex flex-col w-80'>
            {
              context.order?.slice(-1)[0].products.map(product => (  // <= Si hay 'order', muestrame el último elemento.
                <OrderCard 
                    key={product.id} 
                    id={product.id} 
                    title={product.title} 
                    imageUrl={product.image} 
                    price={product.price}
                />
              ))
            }
        </div>
      </Layout>
    );
  }
  
  export default MyOrder
  