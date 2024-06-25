import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/cart/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {totalCuantityCart} =useContext (CartContext)
    return (
        <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="notification-bubble">
                {totalCuantityCart}
            </span>
        </div>
    );
};

export default CartWidget;
