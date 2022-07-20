import { UserDataResponse } from "../models/userDataResponse";

interface CompromisedAccountsAlertProps {
  auth: UserDataResponse;
  accounts: {
    date: string;
    name: string;
  }[];
  setAuth: (auth: UserDataResponse) => void;
}

/** Alert user to their compromised accounts. */
export const CompromisedAccountsAlert = ({
  accounts,
  setAuth,
  auth,
}: CompromisedAccountsAlertProps) => {
  const handleDismiss = () => {
    setAuth({ ...auth, isPasswordCompromised: false });
  };

  return (
    <div>
      <p className={"mb-2"}>
        Your data may have been a part of a breach. Please reset passwords for
        the following accounts:
      </p>
      <ul>
        {accounts.map((item: { date: string; name: string }, index) => {
          return (
            <li key={index}>
              {item.date} - {item.name}
            </li>
          );
        })}
      </ul>
      <div className={"mt-10"}>
        <button
          type={"button"}
          onClick={() => console.log("change your password")}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Change Password
        </button>
        <button
          type={"button"}
          onClick={handleDismiss}
          className="inline-flex justify-center py-2 px-4 border border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-5"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
