import Container from "../components/Container";
import "../app/globals.css";
import InputField from "../components/form/InputField";
import { useState } from "react";
import CompromiseTable from "../components/compromisetable";
import { CalculateCompromiseHandler, ValueToPeso } from "../utils/Formatters";

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
			<div className="max-w-[600px] mx-auto w-full">
				<h1 className="text-[1.4rem] font-[700] text-center">LAND TAXES CALCULATOR</h1>
				<InputField
					name="saleValue"
					className="mt-4"
					type="number"
					label="Sale Value"
					placeholder="0"
					defaultValue={0}
					onChange={(e) => setSaleValue(+e.currentTarget.value)}
				/>
				<InputField
					name="yearsPenalty"
					className="mt-2"
					type="number"
					label="Years Penalty"
					placeholder="0"
					defaultValue={0}
					onChange={(e) => setYearsPenalty(+e.currentTarget.value)}
				/>

				<h2 className="mt-4 text-[1.25rem] font-[700]">BASIC TAXES</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={ValueToPeso(cgt)}>CGT&#40;6% of Sale&#41;</b> + <b title={ValueToPeso(dst)}>DST&#40;1.5% of Sale&#41;</b> x <b>20%</b> x{" "}
						<b title={yearsPenalty.toString()}>Years of Penalty</b>
					</p>
					<p>= {ValueToPeso(basicTaxes)}</p>
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">SURCHARGE</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={ValueToPeso(basicTaxes)}>BASIC TAXES</b> x <b>25%</b>
					</p>
					<p>= {ValueToPeso(surcharge)}</p>
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">COMPROMISE</h2>
				<div className="mt-2 flex flex-col gap-1">
					<CompromiseTable basicTaxes={basicTaxes} />
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">PENALTIES</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={ValueToPeso(basicTaxes)}>BASIC TAXES</b> + <b title={ValueToPeso(surcharge)}>SURCHARGE</b> + <b title={ValueToPeso(compromise)}>COMPROMISE</b>
					</p>
					<p>= {ValueToPeso(penalties)}</p>
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">OVERALL</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-2 flex flex-col gap-1">
					<p>
						= <b title={ValueToPeso(basicTaxes)}>BASIC TAXES</b> + <b title={ValueToPeso(penalties)}>PENALTIES</b>
					</p>
					<p>= {ValueToPeso(basicTaxes + penalties)}</p>
				</div>

				<h2 className="mt-4 text-[1.25rem] font-[700]">REFERENCE</h2>
				<hr className="mt-1 border-black" />
				<div className="mt-4 flex flex-col gap-1">
					<iframe width="100%" height="315" src="https://www.youtube.com/embed/Ma0cCJN09aM?si=0PiP3lo4fXf4YtP7" allowFullScreen/>
				</div>
			</div>
		</Container>
	);
}
