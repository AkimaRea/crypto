import { TableItem } from "@/5_entities/table/table-item";
import s from "./style.module.scss";
import cx from "classnames";
import { useEffect, useState } from "react";

const fakeData = [
	{
		text: "Culpa consequat fugiat pariatur sit aliqua proident id labore reprehenderit velit. Amet ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum labore irure proident qui adipisicing enim voluptate cillum. Est proident elit officia dolore exercitatioulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consen minim et qui sunt sint exercitation quis. Amet fugiat id laboris nisi labore. Fugiat occaecat deserunt nisi enim et proident exercitation commodo veniam incididunt dolore et nulla. Sit duis excepteur cillum ex elit esse quis exercitation sint elit do veniam.",
		plan: "20.01.2002 15:00",
		fact: "20.01.2002 15:00",
		changed: 1,
	},
];

export const Home = (): JSX.Element => {
	const [active, setActive] = useState("");

	useEffect(() => {
		//@ts-ignore
		const listener = (event) => {
			event.preventDefault();
			const el = event.target;
			const parent = el.parentNode;

			if (el.id.includes("content_") || parent?.id?.includes("content_")) {
				const id = el.id.includes("content_") ? el.id : parent.id;
				setActive(id);
			} else if (!el.classList.value.includes("text_actions")) {
				setActive("");
			}
		};

		document.addEventListener("mouseup", listener);

		return () => {
			document.removeEventListener("mouseup", listener);
		};
	}, []);

	return (
		<main className={s.wrapper}>
			<table className={s.table}>
				<thead>
					<tr>
						<th className={cx(s.table__head)}>#</th>
						<th className={cx(s.table__head)}>Текст</th>
						<th className={cx(s.table__head, s.date)}>План</th>
						<th className={cx(s.table__head, s.date)}>Факт</th>
						<th className={cx(s.table__head)}>Изм.</th>
					</tr>
				</thead>
				<tbody>
					{fakeData.map((el, i) => (
						<TableItem
							active={active === `content_${i}` ? true : false}
							id={i}
							{...el}
						/>
					))}
				</tbody>
			</table>
		</main>
	);
};
