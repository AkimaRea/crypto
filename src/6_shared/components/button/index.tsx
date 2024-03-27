import cx from "classnames";
import React from "react";
import s from "./style.module.css";

interface P {
	className?: string | undefined;
	children?: React.ReactNode;
	type?: "purple" | "default" | 'dark';
}

export const Button = ({
	children,
	type = "default",
	className,
}: P): JSX.Element => {
	return (
		<button className={cx(s.button, s[type], className)}>{children}</button>
	);
};
