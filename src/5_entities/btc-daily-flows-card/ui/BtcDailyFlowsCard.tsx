import cx from "classnames";
import { Bar, BarChart, Customized, ResponsiveContainer } from "recharts";
import s from "./style.module.scss";

interface P {
	infographicData: InfographicDTO;
	className: any;
}
export const BtcDailyFlowsCard = ({
	className,
	infographicData,
}: P): JSX.Element => {
	return (
		<div className={cx(className, s.btcDailyFlows)}>
			<div className={s.btcDailyFlows_header}>
				24h Bitcoin ETF{" "}
				<span
					data-dir={infographicData.btcDailyFlows.flows.res}
					className={s.btcDailyFlows_header_total}>
					{infographicData.btcDailyFlows.flows.res}
				</span>
				: ${infographicData.btcDailyFlows.totalValue}{" "}
				<span
					data-dir={infographicData.btcDailyFlows.flows.res}
					className={s.btcDailyFlows_header_percentage}>
					{infographicData.btcDailyFlows.flows.res === "inflow" ? "▲" : "▼"}{" "}
				</span>
				{infographicData.btcDailyFlows.flows.value} %
			</div>
			<div className={s.btcDailyFlows_graph}>
				<ResponsiveContainer height={107}>
					<BarChart
						data={infographicData.btcDailyFlows.values}
						margin={{ right: 0, left: 0 }}>
						{/* <YAxis dataKey='values' width={20} tickCount={5} /> */}
						<Customized
							component={
								<svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
									<defs>
										<linearGradient
											gradientTransform='rotate(90)'
											id='MyGradient'>
											<stop offset='20%' stop-color='greenyellow' />
											<stop offset='100%' stop-color='red' />
										</linearGradient>
									</defs>
								</svg>
							}
						/>
						<Bar dataKey='values' fill='url(#MyGradient)' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
