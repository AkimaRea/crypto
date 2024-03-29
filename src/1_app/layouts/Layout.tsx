import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import cx from "classnames";
import { Header } from "../../3_widgets/header/ui/Header";
import { Outlet } from "react-router";

interface P {}

export const Layout = ({}: P): JSX.Element => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
