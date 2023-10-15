import { FormEvent, useState } from "react";
import { LoginPageWrapper } from "./utils/loginpage-style";
import { loginSchema } from "./utils/loginSchema";
import { useAppDispatch } from "../../../store/store";
import { userLogin } from "../../../store/user/userSlice";

export const LoginPage = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [params, setParams] = useState({});
  const dispatch = useAppDispatch();
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    const obj = {
      ...params,
      [id]: value,
    };
    setParams(obj);

    const errorsObj: any = {};
    const validation = loginSchema.validate(params, { abortEarly: false });
    if (validation.error) {
      const error = validation.error.details.find((c) => c.context?.key === id);
      if (error) {
        errorsObj[id] = error.message;
      }
      setIsValid(false);
    }
    if (validation.error === undefined) {
      setIsValid(true);
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(params),
      })
        .then((res) => res.ok && res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
        });
    } catch (err) {
      throw err;
    }
  }

  return (
    <LoginPageWrapper $isValid={isValid}>
      <form onSubmit={(e) => dispatch(userLogin({ e, params }))}>
        <div>
          <label>Username</label>
          <input type="text" id="username" onChange={handleInputs} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" onChange={handleInputs} />
        </div>
        <button disabled={!isValid}>Login!</button>
      </form>
    </LoginPageWrapper>
  );
};
