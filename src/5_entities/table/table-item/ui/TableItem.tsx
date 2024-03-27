import cx from "classnames";
import s from "./style.module.scss";
import { useEffect, useRef, useState } from "react";

interface P {
	id: string | number;
	text: string;
	active: boolean;
}

export const TableItem = ({ active, id, text }: P): JSX.Element => {
	const [value, setValue] = useState(text);
	const [initialValue, setInitialValue] = useState(text);
	const [isEdit, setIsEdit] = useState(false);
	const [hasChanged, setHasChanged] = useState(false);
	const textareaRef = useRef(null);

	useEffect(() => {
		if (!isEdit && hasChanged) {
			setValue(initialValue);
		}
	}, [isEdit]);

	useEffect(() => {
		setIsEdit(false);
	}, [active]);

	return (
		<tr className={s.row}>
			<td className={s.cell}>{id}</td>
			<td className={s.cell}>
				<div
					id={`content_${id}`}
					className={cx("row_wrapper", active && "active")}>
					{isEdit && active ? (
						<textarea
							className={s.textarea}
							ref={textareaRef}
							value={value}
							onChange={(e) => {
								setHasChanged(true);
								setValue(e.target.value);
							}}></textarea>
					) : (
						<div className={cx("text_content")}>{initialValue}</div>
					)}
					<div className='text_actions'>
						<button
							onClick={() => {
								setIsEdit(!isEdit);
							}}
							className={cx("text_actions__button", s.button)}>
							{isEdit ? "Отменить" : "Редактировать"}
						</button>
						<button
							onClick={() => {
								setInitialValue(value);
								setIsEdit(false);
							}}
							className={cx("text_actions__button", s.button)}>
							Сохранить
						</button>
						<button className={cx("text_actions__button", s.button)}>
							Опубликовать
						</button>
						<button className={cx("text_actions__button", s.button)}>
							Перегенерировать
						</button>
					</div>
				</div>
			</td>
		</tr>
	);
};
