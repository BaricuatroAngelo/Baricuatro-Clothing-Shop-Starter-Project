import { useContext } from "react";
import { ShopContext } from "../../context";
import { Product } from "../../models/Product";
import { Title } from "../Cart";
import {
  Cell,
  CheckOutHeader,
  CheckOutTable,
  ItemWrapper,
  OrderButton,
} from "./CheckOut.styled";

export const CheckOut = () => {
  const { products, total } = useContext(ShopContext);

  return (
    <>
      <Title>Checkout</Title>
      <CheckOutTable>
        <thead>
          <tr>
            <CheckOutHeader>Item</CheckOutHeader>
            <CheckOutHeader>Name</CheckOutHeader>
            <CheckOutHeader>Price</CheckOutHeader>
            <CheckOutHeader>Quantity</CheckOutHeader>
            <CheckOutHeader>Total</CheckOutHeader>
          </tr>
        </thead>
        {products.map((product: Product, index) => (
          <tbody key={index}>
            <tr>
              <Cell>
                <ItemWrapper background={product.imageUrl}></ItemWrapper>
              </Cell>
              <Cell>
                <p>{product.name}</p>
              </Cell>
              <Cell>
                <p>${product.price}.00</p>
              </Cell>
              <Cell>
                <p>{product.quantity}</p>
              </Cell>
              <Cell>
                <p>${product.price * product.quantity}.00</p>
              </Cell>
            </tr>
          </tbody>
        ))}
      </CheckOutTable>
        <Title>
          Grand Total: ${total}.00 <OrderButton><p>Place Order</p></OrderButton>
        </Title>
    </>
  );
};
