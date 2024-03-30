import { defaultSettings } from "@/6_shared/config/defaults";
import { toPng } from "html-to-image";
import { useEffect, useState } from "react";
import { InfographicPreview } from "../../../3_widgets/infographic-preview/ui/InfographicPreview";
import { infographicData } from "../model/graph-model";
import s from "./style.module.scss";

export const GraphGen = (): JSX.Element => {
	const [settings, setSettings] = useState<GeneratorSettings | null>(null);

	useEffect(() => {
		if (localStorage.getItem("settings")) {
			const temp = JSON.parse(localStorage.getItem("settings") as string);
			setSettings(temp);
		} else {
			setSettings(defaultSettings);
		}
	}, []);

	const settingChangeHandler = (e: any) => {
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
		const el = document.getElementById('infographic')
		if (el) {
			toPng(el).then(function (dataUrl) {
				const a = document.createElement("a");
				a.download = "infograph.png";
				a.href = dataUrl;
				a.click();
			});
			/* html2canvas(infographicRef.current).then((canvas) => {
				const a = document.createElement("a");
				a.download = "infograph.png";
				a.href = canvas.toDataURL("image/png");
				a.click();
			}); */
		}
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
				<label htmlFor='background'>
					<span>Ширина изображения (px)</span>
					<div>
						<input
							value={settings?.width}
							onChange={(e) => {
								if (+e.target.value > 1200) {
									e.target.value = "1200";
									settingChangeHandler(e);
								} else {
									settingChangeHandler(e);
								}
							}}
							type='text'
							id='width'
						/>
						<input
							value={settings?.width}
							onChange={(e) => settingChangeHandler(e)}
							type='range'
							max={1200}
							min={350}
							id='width'
						/>
					</div>
				</label>
				<button className={s.reset} onClick={resetSettings}>
					Сбросить
				</button>
			</div>
			<div className={s.wrapper}>
				<div
					className={s.wrapper_shadow}
					style={{ maxWidth: settings?.width + "px" }}>
					<InfographicPreview
						infographicData={infographicData}
						settings={settings}
					/>
				</div>
			</div>
		</main>
	);
};
