import styled from "styled-components";
export const SignupPageWrapper = styled.section<{ $isValid: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("./images/spring-background.jpeg") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  form {
    width: 70%;
    min-height: 70vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: var(--form);
    border-radius: 20px;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 5vh;

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      label {
        display: block;
        letter-spacing: 1px;
        color: var(--labelFc);
        text-align: center;
        font-size: 26px;
      }

      input {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #ffffffcd;
        width: 40%;
        height: 30px;
        min-width: 400px;
        padding: 2px 10px;
        font-size: 16px;
        color: var(--labelFc);
        letter-spacing: 1px;
      }

      p {
        color: #ca4c4cc0;
        font-size: 15px;
      }
    }

    button {
      font-size: 16px;
      padding: 10px 30px;
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: ${(prop) =>
        prop.$isValid ? `var(--btnBg)` : "#d5ddd7;"};
      color: #ffffff;

      letter-spacing: 1px;
      cursor: pointer;
      transition: 300ms ease;

      &:hover {
        letter-spacing: ${(prop) => prop.$isValid && "2px"};
        box-shadow: ${(prop) =>
          prop.$isValid && `0px 7px 8px 0px rgba(0, 0, 0, 0.55)`};
        -webkit-box-shadow: ${(prop) =>
          prop.$isValid && `0px 7px 8px 0px rgba(0, 0, 0, 0.55)`};
        -moz-box-shadow: ${(prop) =>
          prop.$isValid && `0px 7px 8px 0px rgba(0, 0, 0, 0.55)`};
      }
    }
  }

  @media screen and (max-width: 786px) {
    form {
      padding: 10px;
      min-width: 270px;
      div {
        label {
          font-size: 18px;
        }
        input {
          font-size: 15px;
          min-width: 90%;
          height: 20px;
          width: 90%;
        }
      }
      button {
        padding: 7px 15px;
      }
    }
  }
`;
