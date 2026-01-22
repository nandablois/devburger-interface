import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import Logo from "./../../assets/logo.svg";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

export default function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("E-mail obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha obrigatória"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await api.post("/sessions", {
      email: data.email,
      password: data.password,
    });

    console.log(response);
  };

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

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email:</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha:</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui conta? <a href="#">Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  );
}
