import { useState } from "react";

const ResetPassword = ({ token }) => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError("");
      } else {
        setMessage("");
        setError(data.message);
      }
    } catch (error) {
      setMessage("");
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col p-4 items-center max-md">
      <h1 className="text-4xl">Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <input
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button
          className="w-full mt-2 px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          type="submit"
        >
          Reset Password
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { token } = query;

  if (!token) {
    return {
      notFound: false,
    };
  }

  return {
    props: {
      //   token,
    },
  };
}

export default ResetPassword;
