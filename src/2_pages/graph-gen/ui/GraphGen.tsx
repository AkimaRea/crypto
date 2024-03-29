import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import cx from "classnames";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import html2canvas from "html2canvas";

const data = [
	{
		name: "Coin A",
		value: 4000,
	},
	{
		name: "Coin B",
		value: 3000,
	},
];

const infographicData = {
	date: "01-01-2000 12:00",
};

const defaultSettings: GeneratorSettings = {
	color: "#fff",
	background: "rgba(64, 64, 64, 1)",
};

export const GraphGen = (): JSX.Element => {
	const [settings, setSettings] = useState<GeneratorSettings | null>(null);
	const infographicRef = useRef(null);

	useEffect(() => {
		if (localStorage.getItem("settings")) {
			const temp = JSON.parse(localStorage.getItem("settings") as string);
			setSettings(temp);
		} else {
			setSettings(defaultSettings);
		}
	}, []);

	const settingChangeHandler = (e) => {
		setSettings({ ...settings, [e.target.id]: e.target.value });
		localStorage.setItem(
			"settings",
			JSON.stringify({ ...settings, [e.target.id]: e.target.value })
		);
	};

	const resetSettings = () => {
		setSettings(defaultSettings);
		localStorage.setItem("settings", JSON.stringify(defaultSettings));
	};

	const downloadImage = () => {
		if (infographicRef.current)
			html2canvas(infographicRef.current).then((canvas) => {
				const a = document.createElement("a");
				a.download = "ss.png";
				a.href = canvas.toDataURL("image/png");
				a.click(); // MAY NOT ALWAYS WORK!
			});
	};

	return (
		<main className={s.infographic}>
			<button className={s.infographic_save} onClick={downloadImage}>
				Скачать инфографику
			</button>
			<div className={s.settings}>
				<label htmlFor='color'>
					<span>Цвет текста (HEX, RGB(a), key words)</span>
					<input
						value={settings?.color}
						onChange={(e) => settingChangeHandler(e)}
						type='text'
						id='color'
					/>
				</label>
				<label htmlFor='background'>
					<span>Цвет фона (HEX, RGB(a), key words)</span>
					<input
						value={settings?.background}
						onChange={(e) => settingChangeHandler(e)}
						type='text'
						id='background'
					/>
				</label>
				<button className={s.reset} onClick={resetSettings}>
					Сбросить
				</button>
			</div>
			<div className={s.wrapper}>
				<div className={s.wrapper_shadow}>
					<div
						ref={infographicRef}
						className={s.infographic_body}
						style={{
							color: settings?.color,
							background: settings?.background,
						}}>
						<div className={s.infographic_body_header}>
							<h1>CryptoSummary Daily</h1>
							<span>{infographicData.date}</span>
						</div>
						<div className={s.infographic_body_graphs}>
							<div className={s.card}></div>
							<div className={s.card}></div>
						</div>
						<div className={s.infographic_body_coins}>
							<div className={s.card}></div>
							<div className={s.card}></div>
							<div className={s.card}></div>
						</div>
						<div className={s.infographic_body_outflow_graphs}>
							<div className={s.card}></div>
							<div className={s.card}></div>
							<div className={s.card}></div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

{
	/* <BarChart
				data={data}
				width={600}
				height={400}
				className={s.bar_chart}
				layout='vertical'>
				<XAxis type='number' dataKey='value' />
				<YAxis type='category' dataKey='name' />
				<Bar dataKey='value' />
			</BarChart> */
}
