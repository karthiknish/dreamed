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
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-96 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl mb-4 text-center">Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              className="w-full py-2 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="submit"
            >
              Submit
            </button>
          </form>
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
