import "./index.css";
import { CalculateCompromiseHandler } from "../../utils/Formatters";

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
					<td>₱5,000</td>
					<td>₱10,000</td>
					<td>₱3,000</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 5_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>₱10,000</td>
					<td>₱20,000</td>
					<td>₱5,000</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 10_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>₱20,000</td>
					<td>₱50,000</td>
					<td>₱10,000</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 15_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>₱50,000</td>
					<td>₱100,000</td>
					<td>₱15,000</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 20_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>₱100,000</td>
					<td>₱500,000</td>
					<td>₱20,000</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 30_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>₱500,000</td>
					<td>₱1,000,000</td>
					<td>₱30,000</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 40_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>₱1,000,000</td>
					<td>₱5,000,000</td>
					<td>₱40,000</td>
				</tr>
				<tr className={CalculateCompromiseHandler(basicTaxes) === 50_000 ? "bg-[rgba(255,255,0,0.5)]" : ""}>
					<td>₱5,000,000</td>
					<td>----</td>
					<td>₱50,000</td>
				</tr>
			</tbody>
		</table>
	);
}
