import { useState } from "react"
export default function LoginForm () {
    const [values, setValues] = useState({
        login: "",
        password: "",
    });

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]:
            evt.target.value,
        });
    };
    const handleSubmit = 
    (evt) => {
        evt.preventDefault();

        setValues({
            logins: "",
            password: "",
        });
    };

    return (
        <Form onSubmit = {handleSubmit}>
            <input
            type="text"
            name="login"
            value={values.login}
            onChange={handleChange} />
          <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}  />

          <button
          type="submit">Login</button>
        
          </Form>
    );
};