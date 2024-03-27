interface P {
	size: number;
}

export const Spacing = ({ size }: P): JSX.Element => {
	return <div style={{ margin: `${size / 2}px 0` }}> </div>;
};
