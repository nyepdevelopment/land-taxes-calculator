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
				<h1 className="text-[1.4rem] font-[700] text-center">LAND TAXES CALCULATOR</h1>
				<InputField className="mt-4" type="number" placeholder="Sale Value (in Peso)" defaultValue={saleValue} onChange={(e) => setSaleValue(+e.currentTarget.value)} />
				<InputField className="mt-2" type="number" placeholder="Penalty (in years)" defaultValue={yearsPenalty} onChange={(e) => setYearsPenalty(+e.currentTarget.value)} />

				<h2 className="mt-4 text-[1.25rem] font-[700]">BASIC TAXES</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={cgt.toString()}>CGT&#40;6% of Sale&#41;</b> + <b title={dst.toString()}>DST&#40;1.5% of Sale&#41;</b> x <b>20%</b> x{" "}
						<b title={yearsPenalty.toString()}>Years of Penalty</b>
					</p>
					<p>
						= <u>{basicTaxes}</u>
					</p>
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">SURCHARGE</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={basicTaxes.toString()}>BASIC TAXES</b> x <b>25%</b>
					</p>
					<p>
						= <u>{surcharge}</u>
					</p>
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">COMPROMISE</h2>
				<div className="mt-2 flex flex-col gap-1">
					<CompromiseTable basicTaxes={basicTaxes} />
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">PENALTIES</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={basicTaxes.toString()}>BASIC TAXES</b> + <b title={surcharge.toString()}>SURCHARGE</b> + <b title={compromise.toString()}>COMPROMISE</b>
					</p>
					<p>
						= <u>{penalties}</u>
					</p>
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">OVERALL</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={basicTaxes.toString()}>BASIC TAXES</b> + <b title={penalties.toString()}>PENALTIES</b>
					</p>
					<p>
						= <u>{basicTaxes + penalties}</u>
					</p>
				</div>
			</div>
		</Container>
	);
}
