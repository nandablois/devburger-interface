import { Button } from "../../components/Button";
import { ContainerButton } from "../../components/Button/styles";
import Logo from "./../../assets/logo.svg";
import {
  
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from "./styles";

export default function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>

        <Form>
          <InputContainer>
            <label>Email:</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha:</label>
            <input type="password" />
          </InputContainer>

          <Button>Entrar</Button>
          
        </Form>

        <p>
          Não possui conta? <a href="#">Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  );
}
