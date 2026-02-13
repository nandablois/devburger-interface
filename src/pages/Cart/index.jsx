import Logo from "../../assets/logo.svg";
import { CartItems } from "../../components/CartItems";
import { Banner, Container, Content, Title } from "./styles";

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo-devburguer" />
      </Banner>
      <Title>
        Chekout - Pedido
        <Content>
          <CartItems />
          {/* <CartResume />  */}
        </Content>
      </Title>
    </Container>
  );
}
