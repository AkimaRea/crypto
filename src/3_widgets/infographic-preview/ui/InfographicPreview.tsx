import { TotalMarketCap } from "@/5_entities/total-market-cap-card";
import s from "./style.module.scss";
import { BtcDailyFlowsCard } from "@/5_entities/btc-daily-flows-card";
import { AssetCard } from "@/5_entities/asset-card";

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
				<BtcDailyFlowsCard
					infographicData={infographicData}
					className={s.card}
				/>
			</div>
			<div className={s.infographic_body_coins}>
				<AssetCard asset={infographicData.assets.btc} className={s.card} />
				<AssetCard asset={infographicData.assets.eth} className={s.card} />
				<AssetCard asset={infographicData.assets.snp} className={s.card} />
			</div>
			<div className={s.infographic_body_outflow_graphs}>
				<div className={s.card}></div>
				<div className={s.card}></div>
				<div className={s.card}></div>
			</div>
		</div>
	);
};
