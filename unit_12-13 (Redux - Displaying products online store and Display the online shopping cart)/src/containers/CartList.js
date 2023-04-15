import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { minus, remove } from '../store/cartSlice';
import Cart from '../components/Cart';
import {
    selectCart
} from '../store/cartSlice';
import {
    selectGoods
} from '../store/goodsSlice';

function CartList() {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const goods = useSelector(selectGoods);
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('minus-from-cart')) {
            dispatch(minus(t.getAttribute('data-key')));
        };
        if (t.classList.contains('remove-from-cart')) {
            dispatch(remove(t.getAttribute('data-key')));
        };

    }
    let sum = 0;
    const cartPrice = goods.reduce((accum, item) => {
        accum[item['articul']] = item['cost'];
        return accum;
    }, {});
    sum = Object.keys(cart).reduce((accum, key) => accum += cartPrice[key] * cart[key], 0);



    return (
        <div className='cart-field' onClick={clickHandler}>
            {Object.keys(cart).map(item => <Cart title={goodsObj[item]['title']} cost={goodsObj[item]['cost']} count={cart[item]}
                ke={item + goodsObj[item]['title']} priceAll={goodsObj[item]['cost'] * cart[item]} articul={goodsObj[item]['articul']} image={goodsObj[item]['image']} />)}
            <div className='cart-sum'>
                {sum}
            </div>
        </div>
    );
}

export default CartList;