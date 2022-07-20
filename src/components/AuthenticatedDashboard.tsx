import { PasswordAlert } from "./PasswordAlert";
import { Notification } from "./Notification";

interface AuthenticatedDashboardProps {
  userData: any;
  setAuth: (meta: any) => void;
  setLogin: (arg0: boolean) => void;
}

export const AuthenticatedDashboard = ({
  userData,
  setAuth,
  setLogin,
}: AuthenticatedDashboardProps) => {
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
      {userData?.meta &&
        userData.meta.isPasswordCompromised &&
        userData.meta.compromisedAccounts && (
          <Notification type={"warning"}>
            <PasswordAlert
              setAuth={setAuth}
              accounts={userData.meta.compromisedAccounts}
            />
          </Notification>
        )}
    </div>
  );
};
