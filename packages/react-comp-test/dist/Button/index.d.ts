import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";
import "./index.less";
export interface ButtonProps extends PropsWithChildren {
    className?: string;
    style?: CSSProperties;
    type?: "primary" | "default";
    onClick?: MouseEventHandler;
    children: any;
}
declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export default Button;
