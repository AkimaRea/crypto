import s from "./style.module.scss";
import cx from "classnames";

interface P {
	asset: AssetAttr;
	className: any;
}

export const AssetCard = ({ className, asset }: P): JSX.Element => {
	return (
		<div className={cx(className, s.asset)}>
			<div>
				<div className={s.asset_name}>{asset.name}</div>
				<div data-dir={asset.daily.res} className={s.asset_percentage}>
					<span>{asset.daily.res === "raised" ? "▲" : "▼"}</span>
					{asset.daily.value} %
				</div>
			</div>
			<div className={s.asset_price}>${asset.price}</div>
		</div>
	);
};
