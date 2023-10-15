import styled from "styled-components";

export const LoginPageWrapper = styled.section<{ $isValid: boolean }>`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightGray);

  form {
    width: 55%;
    height: 60vh;
    min-height: 400px;
    background-color: white;
    z-index: 100;
    background-color: var(--white);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 1000px;
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: var(--onyx);
      gap: 10px;
      label {
        display: block;
        font-size: 28px;
        letter-spacing: 2px;
      }
      input {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: var(--lightGray);
        width: 40%;
        height: 30px;
        min-width: 400px;
        padding: 2px 10px;
        font-size: 16px;
        color: var(--onyx);
        letter-spacing: 1px;
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
      width: 70%;
      height: 60vh;
      min-width: 270px;
      div {
        width: 90%;
        label {
          font-size: 18px;
        }

        input {
          min-width: 0px;
          width: 80%;
          font-size: 15px;
          height: 25px;
        }
      }
      button {
        padding: 7px 25px;
      }
    }
  }
`;
