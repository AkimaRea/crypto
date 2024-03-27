import { TableItem } from "@/5_entities/table/table-item";
import s from "./style.module.scss";
import cx from "classnames";
import { useEffect, useState } from "react";

const fakeData = [
	{
		text: "Culpa consequat fugiat pariatur sit aliqua proident id labore reprehenderit velit. Amet ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum labore irure proident qui adipisicing enim voluptate cillum. Est proident elit officia dolore exercitatioulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consen minim et qui sunt sint exercitation quis. Amet fugiat id laboris nisi labore. Fugiat occaecat deserunt nisi enim et proident exercitation commodo veniam incididunt dolore et nulla. Sit duis excepteur cillum ex elit esse quis exercitation sint elit do veniam.",
	},
	{
		text: "Nostrud occaecat sit non non duis amet pariatur nulla. Duis anim aliquip dolor irure minimulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex conse laborum. Officia occaecat aute aliqua occaecat duis magna. Commodo elit esse commodo irure commodo aute adipisicing fugiat minim nostrud reprehenderit. Adipisicing fugiat mollit quis nulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consequat ad Lorem ullamco et sit velit quis elit sit. Lorem nulla in consequat Lorem ullamco enim nostrud.",
	},
	{
		text: "Lorem nulla in consequat Lorem ullamco enim nostrud. Amet ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum et ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum labore irure proident qui adipisilabore irure proident qui adipisicing enim voluptate cillum.Nostrud occaecat sit non non duis amet pariatur nulla. Duis anim aliquip dolor irure minim laborum. Officia occaecat aute aliqua occaecat duis magna. Commodo elit esse commodo irure commodo aute adipisicing.",
	},
	{
		text: "Nostrud occaecat sit non non duis amet pariatur nulla. Duis anim aliquip dolor irure minim laborum. Officia occaecat aute aliqua occaecat duis magna. Commodo elit esse commodo irure commodo aute adipisicing fugiat minim nostrud reprehenderit. Adipisicing fugiat mollit quis nulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consequat ad Lorem ullamco et sit velit quis elit sit. Lorem nulla in consequat Lorem ullamco enim nostrud.",
	},{
		text: "Culpa consequat fugiat pariatur sit aliqua proident id labore reprehenderit velit. Amet ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum labore irure proident qui adipisicing enim voluptate cillum. Est proident elit officia dolore exercitatioulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consen minim et qui sunt sint exercitation quis. Amet fugiat id laboris nisi labore. Fugiat occaecat deserunt nisi enim et proident exercitation commodo veniam incididunt dolore et nulla. Sit duis excepteur cillum ex elit esse quis exercitation sint elit do veniam.",
	},
	{
		text: "Nostrud occaecat sit non non duis amet pariatur nulla. Duis anim aliquip dolor irure minimulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex conse laborum. Officia occaecat aute aliqua occaecat duis magna. Commodo elit esse commodo irure commodo aute adipisicing fugiat minim nostrud reprehenderit. Adipisicing fugiat mollit quis nulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consequat ad Lorem ullamco et sit velit quis elit sit. Lorem nulla in consequat Lorem ullamco enim nostrud.",
	},	{
		text: "Nostrud occaecat sit non non duis amet pariatur nulla. Duis anim aliquip dolor irure minim laborum. Officia occaecat aute aliqua occaecat duis magna. Commodo elit esse commodo irure commodo aute adipisicing fugiat minim nostrud reprehenderit. Adipisicing fugiat mollit quis nulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consequat ad Lorem ullamco et sit velit quis elit sit. Lorem nulla in consequat Lorem ullamco enim nostrud.",
	},{
		text: "Culpa consequat fugiat pariatur sit aliqua proident id labore reprehenderit velit. Amet ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum labore irure proident qui adipisicing enim voluptate cillum. Est proident elit officia dolore exercitatioulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consen minim et qui sunt sint exercitation quis. Amet fugiat id laboris nisi labore. Fugiat occaecat deserunt nisi enim et proident exercitation commodo veniam incididunt dolore et nulla. Sit duis excepteur cillum ex elit esse quis exercitation sint elit do veniam.",
	},
	{
		text: "Est proident elit officia dolore exercitation minim et qui sunt sint exercitation quis. Amet fugiat id laboris nisi labore. Fugiat occaecat deserunt nisi enim et proident exercitation commodo veniam incididunt dolore et nulla. Sit duis excepteur cillum ex elit esse quis exercitation sint elit do veniam. Culpa consequat fugiat pariatur sit aliqua proident id labore reprehenderit velit. Amet ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum labore irure proident amco quis dolore adipisicing proident. Voluptate Lorem reprehenderit mollit ex id exercitation esse duis consectetur quis ipsum do occaecat eiusmod. Culpa proident adipisicing elit qui veniam laborum aliqqui adipisicing enim voluptate cillum.",
	},	{
		text: "Nostrud occaecat sit non non duis amet pariatur nulla. Duis anim aliquip dolor irure minim laborum. Officia occaecat aute aliqua occaecat duis magna. Commodo elit esse commodo irure commodo aute adipisicing fugiat minim nostrud reprehenderit. Adipisicing fugiat mollit quis nulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consequat ad Lorem ullamco et sit velit quis elit sit. Lorem nulla in consequat Lorem ullamco enim nostrud.",
	},{
		text: "Culpa consequat fugiat pariatur sit aliqua proident id labore reprehenderit velit. Amet ut incididunt labore proident adipisicing aliquip tempor cupidatat occaecat. Esse consectetur officia nulla cillum aliqua eiusmod laboris ut aliquip. Tempor duis ipsum labore irure proident qui adipisicing enim voluptate cillum. Est proident elit officia dolore exercitatioulla labore nisi aliqua.Nisi anim excepteur elit duis voluptate. Sit consectetur in irure minim irure ad quis nulla qui voluptate in officia. Ex consen minim et qui sunt sint exercitation quis. Amet fugiat id laboris nisi labore. Fugiat occaecat deserunt nisi enim et proident exercitation commodo veniam incididunt dolore et nulla. Sit duis excepteur cillum ex elit esse quis exercitation sint elit do veniam.",
	},
	{
		text: "Ullamco aute minim dolore cillum occaecat proident voluptate culpa enim nulla reprehenderit. Tempor mollit amet deserunt adipisicing occaecat excepteur culpa adipisicing. Idt exercitation commodo veniam incididunt dolore et nulla. Sit duis excepteur cillum ex elit esse quis exercitation sint elit do veniam. Culpa consequat fugiat pariatur sit aliqua proident id labore reprehenderit  proident excepteur eu qui reprehenderit culpa ipsum nostrud aute ullamco quis dolore adipisicing proident. Voluptate Lorem reprehenderit mollit ex id exercitation esse duis consectetur quis ipsum do occaecat eiusmod. Culpa proident adipisicing elit qui veniam laborum aliqua deserunt culpa ullamco elit cillum pariatur ullamco. Proident esse minim velit dolor aliquip occaecat incididunt consequat duis.",
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
						<th className={cx(s.table__head)}>Таблица</th>
					</tr>
				</thead>
				<tbody>
					{fakeData.map((el, i) => (
						<TableItem
							active={active === `content_${i}` ? true : false}
							id={i}
							text={el.text}
						/>
					))}
				</tbody>
			</table>
		</main>
	);
};
