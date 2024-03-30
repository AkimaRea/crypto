import cx from "classnames";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import s from "./style.module.scss";

interface P {
	infographicData: InfographicDTO;
	className: any;
}

export const TotalMarketCap = ({className, infographicData }: P): JSX.Element => {
	return (
		<div className={cx(className, s.totalMarketCap)}>
			<div className={s.totalMarketCap_header}>
				Market is{" "}
				{infographicData.totalMarketCap.marketGrowth.res === "raised"
					? "growing"
					: "falling"}
			</div>
			<ResponsiveContainer height={100}>
				<AreaChart
					margin={{ left: 0, right: 0 }}
					data={infographicData.totalMarketCap.values}>
					<defs>
						<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='0.8'>
							<stop offset='5%' stopColor='#8884d8' stopOpacity={0.2} />
							<stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
						</linearGradient>
					</defs>
					<Area
						type='monotone'
						dataKey='value'
						stroke='#8884d8'
						fillOpacity={1}
						fill='url(#colorUv)'
					/>
				</AreaChart>
			</ResponsiveContainer>
			<div className={s.totalMarketCap_footer}>
				<div className={s.totalMarketCap_footer_totalValue}>
					<div>MARKET CAP</div>
					<div>${infographicData.totalMarketCap.totalValue}</div>
				</div>
				<div className={s.totalMarketCap_footer_percentage}>
					<span
						data-dir={infographicData.totalMarketCap.marketGrowth.res}
						className={s.totalMarketCap_footer_percentage_dir}>
						{infographicData.totalMarketCap.marketGrowth.res === "raised"
							? "▲"
							: "▼"}{" "}
					</span>
					{infographicData.totalMarketCap.marketGrowth.value} %
				</div>
			</div>
		</div>
	);
};
