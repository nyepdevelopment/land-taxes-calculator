import "./index.css";
import { CalculateCompromiseHandler, ValueToPeso } from "../../utils/Formatters";

interface CompromiseTableProps {
	basicTaxes: number;
}

export default function CompromiseTable({ basicTaxes }: CompromiseTableProps) {
	return (
		<table>
			<thead>
				<tr>
					<th>Exceeds</th>
					<th>But does not exceed</th>
					<th>Compromise is</th>
				</tr>
			</thead>
			<tbody>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 3_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(5000)}</td>
					<td>{ValueToPeso(10000)}</td>
					<td>{ValueToPeso(3000)}</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 5_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(10000)}</td>
					<td>{ValueToPeso(20000)}</td>
					<td>{ValueToPeso(5000)}</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 10_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(20000)}</td>
					<td>{ValueToPeso(50000)}</td>
					<td>{ValueToPeso(10000)}</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 15_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(50000)}</td>
					<td>{ValueToPeso(100000)}</td>
					<td>{ValueToPeso(15000)}</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 20_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(100000)}</td>
					<td>{ValueToPeso(500000)}</td>
					<td>{ValueToPeso(20000)}</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 30_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(500000)}</td>
					<td>{ValueToPeso(1000000)}</td>
					<td>{ValueToPeso(30000)}</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 40_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(1000000)}</td>
					<td>{ValueToPeso(5000000)}</td>
					<td>{ValueToPeso(40000)}</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 50_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>{ValueToPeso(5000000)}</td>
					<td>----</td>
					<td>{ValueToPeso(50000)}</td>
				</tr>
			</tbody>
		</table>
	);
}
