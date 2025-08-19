import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  // Use environment variable
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/greet`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log("Fetch error:", err));
  }, []);
  console.log("API URL:", API_URL); // Log the API URL for debugging
  return (
    <div style={{ padding: "2rem" }}>
      <h1>React + Vite Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}
