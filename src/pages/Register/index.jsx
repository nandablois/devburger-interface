import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import Logo from "./../../assets/logo.svg";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required("Nome é obrigatório"),
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("E-mail obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha obrigatória"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais")
        .required("Confirma sua senha"),
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
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true }
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        toast.success("Cadastro realizado com sucesso!");
      } else if (status === 409) {
        toast.error("Email já cadastrato. Faça login para continuar");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Falha no sistema! Tente novamente.");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar Conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome:</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

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

          <InputContainer>
            <label>Confirmar senha:</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Confirmar Cadastro</Button>
        </Form>

        <p>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
