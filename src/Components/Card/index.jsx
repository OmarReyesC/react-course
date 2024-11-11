import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {  //Deestructurado para no tener que hacer data.data. en toda la info de la API.
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    };

    const addProductsToCart = (productData) => {
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        console.log('CART:', context.cartProducts);
    };

    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={() => showProduct(data)}>
            <figure className="relative mb-4 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title} />
                <div 
                className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" 
                onClick={() => addProductsToCart(data)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    );
};

export default Card;