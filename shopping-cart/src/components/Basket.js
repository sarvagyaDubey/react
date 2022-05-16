import React from 'react'
function Basket(props) {
    const { cartItems, onAdd, onRemove } = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const totalPrice = itemsPrice;

    return (
        <aside className="block col-1">
            <h2> cart items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button className="btn btn-danger" onClick={() => onRemove(item)} >
                            -
                        </button>{' '}
                        <button className="btn btn-success" onClick={() => onAdd(item)} >
                            +
                        </button>
                    </div>

                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                </>
            )
            }
        </aside>
    )
}
export default Basket