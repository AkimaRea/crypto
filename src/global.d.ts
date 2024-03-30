interface InfographicDTO {
	date: string;
	totalMarketCap: {
		marketGrowth: {
			res: "raised" | "falled";
			value: number;
		};
		totalValue: string;
		values: TotalMarketCapValue[];
	};
	btcDailyFlows: {
		flows: {
			value: number;
			res: "inflow" | "outflow";
		};
		totalValue: string;
		values: BtcDailyFlowsValue[];
	};
}

interface BtcDailyFlowsValue {
	name: string;
	values: number[];
}

interface TotalMarketCapValue {
	name: string;
	value: number;
}

interface GeneratorSettings {
	color?: string;
	background?: string;
	width?: string;
}
