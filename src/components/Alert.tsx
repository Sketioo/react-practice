import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      <button
        onClick={onClose}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        {children}
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
