import { FormEvent, useState } from "react";
import { SignupPageWrapper } from "./utils/signupPage-style";
import { signupSchema } from "./utils/signupSchema";
import { ErrorObjType } from "./utils/signupTypes";

export const SignupPage = () => {
  const [params, setParams] = useState({});
  const [errors, setErrors] = useState<ErrorObjType>();
  const [isValid, setIsValid] = useState(false);
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const obj = {
      ...params,
      [id]: value,
    };
    setParams(obj);

    const errorsObj: any = {};
    const validation = signupSchema.validate(params, { abortEarly: false });
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
    setErrors(errorsObj);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(params),
      })
        .then((res) => res.ok && res.json())
        .then((data) => console.log(data));
    } catch (err) {
      throw err;
    }
  };

  return (
    <SignupPageWrapper $isValid={isValid}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={handleInputs} />
          <p>{errors?.username ? errors.username : null}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={handleInputs} />
          <p>{errors?.password ? errors.password : null}</p>
        </div>
        <div>
          <label htmlFor="firstName">Firstname</label>
          <input id="firstName" type="text" onChange={handleInputs} />
          <p>{errors?.firstName ? errors.firstName : null}</p>
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" type="text" onChange={handleInputs} />
          <p>{errors?.lastName ? errors.lastName : null}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" onChange={handleInputs} />
          <p>{errors?.email ? errors.email : null}</p>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text" onChange={handleInputs} />
          <p>{errors?.phone ? errors.phone : null}</p>
        </div>

        <button disabled={!isValid}>Signup!</button>
      </form>
    </SignupPageWrapper>
  );
};
