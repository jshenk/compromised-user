import { UserDataResponse } from "../models/userDataResponse";
import { Alert } from "./Alert";
import { CompromisedAccountsAlert } from "./CompromisedAccountsAlert";

interface DashboardProps {
  auth: UserDataResponse;
  setAuth: (meta: any) => void;
  setCurrentPage: (page: "login" | "dashboard") => void;
}

export const Dashboard = ({
  auth,
  setAuth,
  setCurrentPage,
}: DashboardProps) => {
  return (
    <div className={"min-h-screen text-left"}>
      <div
        className={
          "max-w-2xl mx-auto pt-10 flex justify-between items-end pb-2 mb-5 border-b border-gray-200"
        }
      >
        <div>
          <h1 className={"text-lg font-extrabold text-slate-900"}>Dashboard</h1>
          <p className={"text-slate-900"}>Welcome, {auth.name}!</p>
        </div>
        <button
          onClick={() => setCurrentPage("login")}
          className={"uppercase text-sm"}
        >
          Logout
        </button>
      </div>
      {auth.isPasswordCompromised && auth.compromisedAccounts && (
        <Alert type={"warning"}>
          <CompromisedAccountsAlert
            auth={auth}
            setAuth={setAuth}
            accounts={auth.compromisedAccounts}
          />
        </Alert>
      )}
      {!auth.isPasswordCompromised && auth.compromisedAccounts === undefined && (
        <Alert type={"success"}>
          <p>
            We reviwed your account for a data breach, and no issues were
            detected!
          </p>
        </Alert>
      )}
    </div>
  );
};
