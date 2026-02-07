import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>
        Desenvolvido por DevClub - &copy; {new Date().getFullYear()}- Todos os
        direitos reservados
      </p>
    </Container>
  );
}
