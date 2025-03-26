import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";
import "./index.less";

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  type?: "primary" | "default";
  onClick?: MouseEventHandler;
  children: any;
}

function Button(props: ButtonProps) {
  const {
    className = "",
    style,
    type = "primary",
    children,
    onClick = () => {},
  } = props;

  return (
    <div
      className={`btn ${className} btn-${type}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
