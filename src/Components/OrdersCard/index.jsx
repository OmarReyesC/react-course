const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center mb-4 border border-black p-4 w-80 rounded-lg">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">01.02.23</span>
                    <span className="font-light">{totalProducts} items</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">{totalPrice}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="h-6 w-6 text-black cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default OrdersCard;