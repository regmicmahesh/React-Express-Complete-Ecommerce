import React, { useContext, useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { Alert, IAlert } from "../components/Alert";
import { UserContext } from "../context/UserContext";
const LoginPage: React.FC = () => {

  const history = useHistory();

  const [alert, setAlert] = useState<IAlert>({} as IAlert);

  const [iusername, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { login, isLoggedIn, username } = useContext(UserContext);

  const onUsernameChange = (e: any) => setUsername(e.target.value);
  const onPasswordChange = (e: any) => setPassword(e.target.value);

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);

    axios({
      withCredentials: true,
      method: "POST",
      url: "http://localhost:8000/auth/login",
      data: {
        username: iusername,
        password,
      },
    })
      .then((data) => {
        console.log(data);
        if (data.data.status === "success") {
          login(iusername);
          localStorage.setItem("username", iusername);
          setAlert({ style: "primary", message: "Logged in succesfully. Redirecting in 3 seconds." });
          setDisabled(false);
          setTimeout(() => history.push("/"), 3000);
        } else {
          throw new Error("Failed");
        }
        //User Logged in Succesfully.
        //Populate Context
        //Update Local Storage.
      })
      .catch((err) => {
        if (err.response.data.message) {
          setAlert({ style: "danger", message: err.response.data.message });
        } else {
          setAlert({ style: "danger", message: "Something went wrong." });
        }

        setDisabled(false);
      });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-3">Login</h1>
              <hr />
              {alert.message && (
                <Alert style={alert.style} message={alert.message} />
              )}
              <form onSubmit={onFormSubmit}>
                <div className="form-group">
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={iusername}
                    onChange={onUsernameChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                    required
                  />
                </div>

                <button
                  className="btn btn-raised btn-primary"
                  type="submit"
                  disabled={disabled}
                >
                  {disabled ? "Logging in.." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
