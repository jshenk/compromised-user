import { useState } from "react";
import { userData } from "../data/userData";
import { Alert } from "./Alert";

interface LoginProps {
  setCurrentPage: (page: "login" | "dashboard") => void;
  setAuth: any;
}

export const Login = ({ setCurrentPage, setAuth }: LoginProps) => {
  const [email, setEmail] = useState<undefined | string>();
  const [password, setPassword] = useState<undefined | string>();
  const [error, setError] = useState<undefined | string>();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    const selectedUser = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (!!selectedUser) {
      setCurrentPage("dashboard");
      setAuth(selectedUser);
    } else {
      setError(
        "Invalid email address or password. Please use test credentials provided."
      );
    }
    event.preventDefault();
  };

  return (
    <div className={"max-w-2xl mx-auto rounded mt-10"}>
      <h1 className={"text-lg font-extrabold text-slate-900 text-left mb-5"}>
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className={"text-left mx-auto bg-gray-50 p-5"}
      >
        <div className={"mb-5"}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border sm:text-sm border-gray-300 rounded-md p-2"
            name={"email"}
            type={"email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={"mb-5"}>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border sm:text-sm border-gray-300 rounded-md p-2"
            type="password"
            name={"password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          type={"submit"}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      {error && (
        <Alert type={"error"}>
          <p>{error}</p>
        </Alert>
      )}
    </div>
  );
};
