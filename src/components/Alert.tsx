interface AlertProps {
  type: "warning" | "error" | "success";
  children: JSX.Element;
}

/** Displays either warning, error or success alerts. */
export const Alert = ({ type, children }: AlertProps) => {
  return (
    <div
      className={`border-l-4 p-5 text-sm text-left mt-10 ` + alertStyles[type]}
    >
      <h2 className={"uppercase text-sm font-bold border-b pb-1 mb-2"}>
        {type}
      </h2>
      {children}
    </div>
  );
};

const alertStyles = {
  warning: "bg-yellow-50 text-amber-700 border-amber-400 ",
  error: "bg-red-50 text-red-600 border-red-400",
  success: "bg-green-50 text-green-600 border-green-400",
};
