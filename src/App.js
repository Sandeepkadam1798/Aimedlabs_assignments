import styled from "styled-components";
import logo from "./logo.png";

import LoginForm from "./Login";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    display: flex;

    flex-direction: column;
  }
`;

const Boxone = styled.div`
  width: 543.22px;
  height: 500px;
  margin-left: 110px;
  margin-top: 120px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    /* Add styles for tablets */
    display: flex;

    flex-direction: column;
  }
`;

const BoxTwo = styled.div`
  width: 1047px;
  height: 600px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 25px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 10px;
  }
`;

const LogoImage = styled.img`
  width: auto;
  height: 400px;

  @media (max-width: 768px) {
    height: 400px;

    @media (min-width: 1024px) {
      /* Add styles for tablets */
      height: 400px;
      width: auto;
    }
  }
`;

const Login = styled.h1`
  font-family: "Poppins", sans-serif;
  padding: 5px;
  margin: 5px;
  font-weight: 700;
  font-size: 40px;
  line-height: 52.8px;
  align-items: center;
  margin-top: 140px;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 20px;
  }
`;

const LoginID = styled.p``;

function App() {
  return (
    <>
      <Container>
        <Boxone>
          <LogoImage src={logo} alt="Logo" />
        </Boxone>

        <BoxTwo>
          <LoginForm />
        </BoxTwo>
      </Container>
    </>
  );
}

export default App;
