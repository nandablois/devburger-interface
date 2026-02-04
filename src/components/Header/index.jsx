import { Link } from "react-router-dom";
import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content} from "./styles";
import { UserIcon , ShoppingCartIcon} from "@phosphor-icons/react";
 export function Header() {
  return (
    <Container>
      <Content>
          <Navigation>
            <div>
              <HeaderLink>Home</HeaderLink>
              <HeaderLink>Cardápio</HeaderLink>
            </div>
          </Navigation>
          <Options>
            <Profile>
                <UserIcon color="#fff" size={24}/>
              <div>
                <p>
                  Olá, <span>Nanda</span>
                </p>
                <Logout>Sair</Logout>
              </div>
            </Profile>
          <LinkContainer>
            <ShoppingCartIcon color="#fff" size={24}/>
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
          </Options>
      </Content>
    </Container>
  );
}
