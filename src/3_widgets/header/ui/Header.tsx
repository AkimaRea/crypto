import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";

export const Header = (): JSX.Element => {
	const location = useLocation();
	return (
		<header className={s.header}>
			<nav>
				<Link
					className={cx(
						s.link,
						location.pathname === "/" ? s.active : null
					)}
					to='/'>
					Таблица
				</Link>
				<Link
					className={cx(
						s.link,
						location.pathname === "/graph-gen" ? s.active : null
					)}
					to='/graph-gen'>
					Генератор инфографики
				</Link>
			</nav>
		</header>
	);
};
