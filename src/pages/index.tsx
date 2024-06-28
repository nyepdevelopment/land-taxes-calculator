import Container from "../components/Container";
import "../app/globals.css";
import InputField from "../components/form/InputField";
import { useState } from "react";
import CompromiseTable from "../components/compromisetable";
import { CalculateCompromiseHandler } from "../utils/Formatters";

export default function Home() {
	const [saleValue, setSaleValue] = useState<number>(0);
	const [yearsPenalty, setYearsPenalty] = useState<number>(0);

	const cgt = saleValue * 0.06;
	const dst = saleValue * 0.015;
	const basicTaxes = (cgt + dst) * 0.2 * (yearsPenalty || 1);

	const compromise = CalculateCompromiseHandler(basicTaxes);

	const surcharge = basicTaxes * 0.25;

	const penalties = basicTaxes + compromise + surcharge;

	return (
		<Container>
			<div className="max-w-[500px] mx-auto w-full">
				<h1 className="text-[1.2rem] font-[700] text-center">LAND TAXES CALCULATOR</h1>
				<InputField className="mt-8" type="number" placeholder="Sale Value (PHP)" value={saleValue} onChange={(e) => setSaleValue(+e.currentTarget.value)} />
				<InputField className="mt-2" type="number" placeholder="Years of Penalty" value={yearsPenalty} onChange={(e) => setYearsPenalty(+e.currentTarget.value)} />

				<h2 className="mt-4 text-[1rem] font-[700]">BASIC TAXES</h2>
				<div className="mt-2 flex flex-col gap-1">
					<p>= CGT&#40;6% of Sale&#41; + DST&#40;1.5% of Sale&#41; x 20% x Years of Penalty</p>
					<p>
						= <u>{basicTaxes}</u>
					</p>
				</div>

				<h2 className="mt-4 text-[1rem] font-[700]">COMPROMISE</h2>
				<div className="mt-2 flex flex-col gap-1">
					<CompromiseTable basicTaxes={basicTaxes} />
				</div>

				<h2 className="mt-4 text-[1rem] font-[700]">SURCHARGE</h2>
				<div className="mt-2 flex flex-col gap-1">
					<p>= BASIC TAXES x 25%</p>
					<p>
						= <u>{surcharge}</u>
					</p>
				</div>

				<h2 className="mt-4 text-[1rem] font-[700]">PENALTIES</h2>
				<div className="mt-2 flex flex-col gap-1">
					<p>= BASIC TAXES + COMPROMISE + SURCHARGE</p>
					<p>
						= <u>{penalties}</u>
					</p>
				</div>

				<h2 className="mt-4 text-[1rem] font-[700]">OVERALL</h2>
				<div className="mt-2 flex flex-col gap-1">
					<p>= PENALTIES + BASIC TAXES</p>
					<p>
						= <u>{penalties}</u>
					</p>
				</div>
			</div>
		</Container>
	);
}
