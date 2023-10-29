import React, { useState } from "react";
import styled from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
</style>;

const GlobalStyle = styled.div`
  a {
    color: rgba(247, 135, 25, 1);
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Center vertically in the viewport */
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const LoginTitle = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 5px;
  margin: 5px;
  font-weight: 700;
  font-size: 40px;
  line-height: 52.8px;
  align-items: center;
  margin-top: 20px;
`;

const CenteredText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

const LoginLabel = styled.div`
  font-size: 15px;
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
  margin-right: 470px;

  @media (max-width: 768px) {
    margin-left: 0; /* Center on smaller screens */
    margin-right: auto;
  }
`;

const LoginInput = styled.input`
  width: 550px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0; /* Center on smaller screens */
    width: 250px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-family: "Poppins", sans-serif;
  margin-right: auto;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  margin-left: 0px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    margin-left: 0; /* Center on smaller screens */
    margin-right: -210px;
    font-size: 12px;
  }
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin: 20px 0;
  cursor: pointer;
  width: 400px;
  font-family: "Poppins", sans-serif;
  background-color: rgba(21, 117, 167, 1);

  @media (max-width: 768px) {
    width: 229px;
    font-size: 12px;
  }
`;

const RegisterLink = styled.div`
  font-size: 14px;
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
`;

const YellowLink = styled.a`
  color: rgba(247, 135, 25, 1);
  font-family: "Poppins", sans-serif;
  margin-left: 260px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const YellowLink2 = styled.a`
  color: rgba(247, 135, 25, 1);
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    /* Center on smaller screens */

    font-size: 12px;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
`;

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <GlobalStyle>
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <CenteredText>
          <LoginLabel>Login ID</LoginLabel>
          <LoginInput type="text" placeholder="Login ID" />
          <LoginLabel>Password</LoginLabel>

          <div style={{ position: "relative" }}>
            <LoginInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <PasswordToggle onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </PasswordToggle>
          </div>

          {/* <LoginInput type="password" placeholder="Password" /> */}
        </CenteredText>

        <CenteredText>
          <CheckboxContainer>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <CheckboxLabel htmlFor="rememberMe">Remember Me</CheckboxLabel>
            <YellowLink href="/terms" style={{ textDecoration: "underline" }}>
              Change Password
            </YellowLink>
          </CheckboxContainer>

          <CheckboxContainer>
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={agreeToTerms}
              onChange={handleAgreeToTermsChange}
            />
            <CheckboxLabel htmlFor="agreeToTerms">
              Agree to{" "}
              <YellowLink2 href="#" style={{ textDecoration: "underline" }}>
                Terms & Conditions
              </YellowLink2>
            </CheckboxLabel>
          </CheckboxContainer>
        </CenteredText>

        <CenteredText>
          <LoginButton>Login</LoginButton>
          <RegisterLink>
            Don’t have an account?{" "}
            <a href="/register" style={{ textDecoration: "underline" }}>
              Register Here
            </a>
          </RegisterLink>
        </CenteredText>
      </LoginContainer>
    </GlobalStyle>
  );
}

export default LoginForm;
