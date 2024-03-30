import { TotalMarketCap } from "@/5_entities/total-market-cap-card";
import cx from "classnames";
import { Bar, BarChart, Customized, ResponsiveContainer } from "recharts";
import s from "./style.module.scss";

interface P {
	settings: GeneratorSettings | null;
	infographicData: InfographicDTO;
}

export const InfographicPreview = ({
	infographicData,
	settings,
}: P): JSX.Element => {
	return (
		<div
			id='infographic'
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
				<TotalMarketCap infographicData={infographicData} className={s.card} />
				<div className={cx(s.card, s.btcDailyFlows)}>
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
	);
};
