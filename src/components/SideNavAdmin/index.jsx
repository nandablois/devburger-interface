import { navLinks } from "./NavLinks";
import Logo from "../../assets/logo.svg";
import { SignOutIcon } from "@phosphor-icons/react";
import { Container, Footer, NavLink, NavLinkContainer } from "./styles";
import { useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  console.log(pathname);

  return (
    <Container>
      <img src={Logo} alt="Hamburguer Logo DevBurguer" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon />
          <p>Sair</p>
        </NavLink>
      </Footer>
    </Container>
  );
}
