import { PasswordAlert } from "./PasswordAlert";
import { Notification } from "./Notification";

interface DashboardProps {
  auth: {
    email: string;
    meta: {
      isPasswordCompromised: boolean;
      compromisedAccounts: {
        name: string;
        date: string;
      }[];
    };
  };
  setAuth: any;
  setLogin: (loginStatus: boolean) => void;
}

export const AuthenticatedDashboard = ({ auth, setAuth, setLogin }: any) => {
  console.log("auth", auth);
  return (
    <div className={"min-h-screen text-left"}>
      <div
        className={
          "max-w-2xl mx-auto pt-10 flex justify-between items-end pb-2 mb-5 border-b border-gray-200"
        }
      >
        <div>
          <h1 className={"text-lg font-extrabold text-slate-900"}>Dashboard</h1>
          <p className={"text-slate-900"}>Welcome, user!</p>
        </div>
        <button onClick={() => setLogin(true)} className={"uppercase text-sm"}>
          Logout
        </button>
      </div>
      {auth?.meta && auth.meta.isPasswordCompromised && (
        <Notification type={"warning"}>
          <PasswordAlert
            setAuth={setAuth}
            accounts={auth.meta.compromisedAccounts}
          />
        </Notification>
      )}
    </div>
  );
};
