import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HeroForLogin from "./HeroForLogin";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/login",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5174";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) { 
        handleError(error.response.data.message);
      } else {
        handleError("Login failed. Please try again.");
      }
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <>
      <HeroForLogin />
      
      {/* FIX: Removed the negative marginTop */}
      <div className="container p-3 p-md-5">
        
        {/* FIX: Used flex-column-reverse to put form above image on mobile */}
        <div className="row p-3 p-md-5 d-flex flex-wrap align-items-center flex-column-reverse flex-md-row">
          
          {/* FIX: Changed col-5 to col-12 col-md-5 */}
          <div className="col-12 col-md-5 p-3 d-flex flex-column justify-content-center mt-4 mt-md-0">
            <h1 className="fs-3 mb-4 text-center text-md-start">Login</h1>

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
                {/* FIX: Replaced 37% width with w-100 class for full width on mobile */}
                <button type="submit" className="p-2 btn fs-5 mb-3 w-100" style={{ backgroundColor: "#387ed1", color: "white", borderRadius: "3px" }}>Submit</button>
                <div className="text-center text-md-start">
                  <span>
                    Don't have an account? <Link to={"/signup"}>Signup</Link>
                  </span>
                </div>
              </form>
              <ToastContainer />
            </div>

          </div>

          {/* FIX: Changed col-7 to col-12 col-md-6 offset-md-1 */}
          <div className="col-12 col-md-6 offset-md-1 p-3 p-md-5 text-center text-md-end">
            <img src="/media/images/kite.svg" className="img-fluid" alt="kite" style={{ maxWidth: "400px" }} />
          </div>
        </div>
      </div>
    </>
  );
}