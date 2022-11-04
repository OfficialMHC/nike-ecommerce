import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, setCloseCart, selectCartItems, setClearCartItems, setGetTotals, selectTotalAmount, selectTotalQty } from '../app/cartSlice';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';

const Cart = () => {
    
    const ifCartState = useSelector(selectCartState);
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const totalAmount = useSelector(selectTotalAmount);
    const totalQuantity = useSelector(selectTotalQty);

    useEffect(() => {
        dispatch(setGetTotals())
    }, [cartItems, dispatch]);

    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false
        }))
    }

    const cartClearHandler = () => {
        dispatch(setClearCartItems())
    }

    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`}>
            <div className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}>
                <CartCount totalQuantity={totalQuantity} onCartToggle={onCartToggle} cartClearHandler={cartClearHandler} />
                {
                    cartItems?.length > 0
                    ? (
                        <div>
                            <div className='flex flex-col gap-y-7 lg:gap-y-5 items-center justify-start overflow-y-scroll h-[85vh] scroll-smooth scroll-hidden py-3'>
                                {
                                    cartItems?.map((item, i) => <CartItem key={i} item={item} />)
                                }
                            </div>

                            <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-base font-semibold uppercase'>Subtotal</h1>
                                    <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</h1>
                                </div>
                                <div className='grid items-center gap-2'>
                                    <p className='text-sm font-medium text-center'>Taxes and Shipping Will Calculate At Shipping</p>
                                    <button type='button' className='button-theme bg-theme-cart text-white'>Check Out</button>
                                </div>
                            </div>
                        </div>
                    )
                    : <CartEmpty onCartToggle={onCartToggle} />
                }
            </div>
        </div>
    )
}

export default Cart