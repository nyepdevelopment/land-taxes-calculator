export function CalculateCompromiseHandler(basicTaxes: number) {
	if (basicTaxes > 5000 && basicTaxes < 10000) {
		return 3000;
	} else if (basicTaxes > 10_000 && basicTaxes < 20_000) {
		return 5000;
	} else if (basicTaxes > 20_000 && basicTaxes < 50_000) {
		return 10_000;
	} else if (basicTaxes > 50_000 && basicTaxes < 100_000) {
		return 15_000;
	} else if (basicTaxes > 100_000 && basicTaxes < 500_000) {
		return 20_000;
	} else if (basicTaxes > 500_000 && basicTaxes < 1_000_000) {
		return 30_000;
	} else if (basicTaxes > 1_000_000 && basicTaxes < 5_000_000) {
		return 40_000;
	} else if (basicTaxes > 5_000_000) {
		return 50_000;
	} else {
		return 0;
	}
}

export function ValueToPeso(value: number) {
	return value.toLocaleString("en-US", {
		style: "currency",
		currency: "PHP",
		maximumFractionDigits: 2,
	});
}
