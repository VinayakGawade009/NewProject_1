import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isVerified, setIsVerified] = useState(null); // null = loading, true = verified, false = not verified

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/me`, {
          withCredentials: true,
        });

        if (res.data && res.data.success) {
          console.log("User verified successfully");
          setIsVerified(true);
        } else {
          console.log("Verification failed - redirecting to login");
          setIsVerified(false);
        }
      } catch (err) {
        console.error("Error verifying user:", err);
        setIsVerified(false);
      }
    };

    verifyUser();
  }, []);

  // Show loading while verifying
  if (isVerified === null) {
    return <div>Loading...</div>;
  }

  // Redirect if not verified
  if (isVerified === false) {
    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
