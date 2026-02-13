import PropTypes from "prop-types";
import { CardImage, Container } from "./styles";
import { CartButton } from "../CartButton";

import { useCart } from '../../hooks/CartContext'
import { formatPrice } from "../../utils/formatPrice";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />

      <div>
        <p>{product.name}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>

      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </Container>
  );
}

CardProduct.proptypes = {
  product: PropTypes.object,
};
