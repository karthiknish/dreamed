import { useState } from "react";
import Head from "next/head";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/resetPassword", {
        method: "POST",
        body: email,
      });
      setMessage(response.data.message);
      setError("");
    } catch (error) {
      setError(error.response.data.message);
      setMessage("");
    }
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="flex flex-col items-center p-2">
        <h1 className="text-4xl p-2">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-2  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="w-full mt-2 px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            type="submit"
          >
            Submit
          </button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default ForgotPassword;
