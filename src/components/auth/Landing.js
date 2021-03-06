import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { NavLink, useHistory } from "react-router-dom";
import { postLoginUser } from "./servicesAuth";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("");
    }, 6000);
    return () => clearTimeout(timeout);
  }, [error]);
  const history = useHistory();

  return (
    <LoginPageStyled>
      <TitleStyled>
        In
        <SpanStyled>Kurz</SpanStyled>
      </TitleStyled>
      <LoginFormStyled onSubmit={event => handleLoginSubmit(event)}>
        <InputField>Email ID</InputField>
        <InputStyled
          autoComplete="off"
          type="text"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <InputField>Password</InputField>
        <InputStyled
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <p style={{ color: "red" }}>{error}</p>
        <ButtonStyled type="submit">Login</ButtonStyled>
      </LoginFormStyled>
      <NavlinkStyled>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/mainpage">Skip</NavLink>
      </NavlinkStyled>
    </LoginPageStyled>
  );

  function handleLoginSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    postLoginUser(data).then(res => {
      if (res.token) {
        localStorage.setItem("jwtToken", res.token);
        history.push("/mainpage");
      } else {
        setError(res.errors[0].msg);
      }
    });
  }
}

const NavlinkStyled = styled.section`
  display: flex;
  justify-content: space-around;
  color: black;
`;

const LoginPageStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonStyled = styled.button`
  color: white;
  background-color: ${props =>
    props.theme.mode === "dark" ? "#ffb930" : "#721313"};
  margin: 20px;
  width: 85%;
  height: 35px;
  outline: none !important;
  box-shadow: 0px 2px 5px grey;
  border-radius: 2rem;
`;

const InputStyled = styled.input`
  height: 40px;
  margin-bottom: 15px;
  border-radius: 0.3rem;
  border: 1px solid
    ${props => (props.theme.mode === "dark" ? "#ffb930" : "#721313")};
`;

const InputField = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

const TitleStyled = styled.h1`
  font-family: "Baloo", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 4rem;
  margin: 100px auto 10px;
  text-align: center;
`;

const SpanStyled = styled.span`
  color: ${props => (props.theme.mode === "dark" ? "#ffb930" : "#721313")};
`;
