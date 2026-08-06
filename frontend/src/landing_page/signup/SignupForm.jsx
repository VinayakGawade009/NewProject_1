import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function SignupForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5173";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) { 
        handleError(error.response.data.message);
      } else {
        handleError("Signup failed. Please try again.");
      }
    }
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <>
      {/* FIX: Removed the negative marginTop */}
      <div className="container p-3 p-md-5">
        <div className="row p-3 p-md-5 d-flex flex-wrap align-items-center">
          
          {/* FIX: Changed col-7 to col-12 col-md-7. Image will stack on top for mobile. */}
          <div className="col-12 col-md-7 p-3 p-md-5 text-center text-md-start">
            <img src="media/images/signupimg1.svg" className="img-fluid" alt="signup" />
          </div>
          
          {/* FIX: Changed col-4 to col-12 col-md-4 */}
          <div className="col-12 col-md-4 offset-md-1 p-3 d-flex flex-column justify-content-center mt-4 mt-md-0">
            <h1 className="fs-3 mb-4 text-center text-md-start">Signup now</h1>

            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="email" style={{ fontSize: "1.1rem" }}>Email</label>
                  <input
                    style={{ width: "100%", height: "2.5rem" }}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="username" style={{ fontSize: "1.1rem" }}>Username</label>
                  <input
                    style={{ width: "100%", height: "2.5rem" }}
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                    required
                    minLength={3}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" style={{ fontSize: "1.1rem" }}>Password</label>
                  <input
                    style={{ width: "100%", height: "2.5rem" }}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                    required
                    minLength={3}
                  />
                </div>
                {/* FIX: Changed width from 37% to 100% on mobile using Bootstrap w-100 */}
                <button type="submit" className="p-2 btn fs-5 mb-3 w-100" style={{ backgroundColor: "#387ed1", color: "white", borderRadius: "3px" }}>Submit</button>
                <div className="text-center text-md-start">
                  <span>
                    Already have an account? <Link to={"/login"}>Login</Link>
                  </span>
                </div>
              </form>
              <ToastContainer />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}