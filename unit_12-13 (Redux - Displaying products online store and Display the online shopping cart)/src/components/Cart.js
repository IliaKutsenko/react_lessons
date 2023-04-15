const Cart = (props) => {
    return (
        <div className='cart-block'>
            <img src={props.image} alt="" className="cart-img" />
            <table>
                <tbody>
                    <tr>
                        <td>{props.title}</td>
                        <td>{props.cost}</td>
                        <td>{props.count}</td>
                        <td>{props.priceAll}</td>
                        <td>
                            <button className='minus-from-cart' data-key={props.articul}>-</button>
                        </td>
                        <td>
                            <button className='remove-from-cart' data-key={props.articul}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Cart;