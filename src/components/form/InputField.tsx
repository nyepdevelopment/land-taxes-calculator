import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}
export default function InputField({ label, ...rest }: InputFieldProps) {
	return (
		<div className={rest.className}>
			<label className="font-[600]">{label}</label>
			<input {...rest} className="border-black border-[1px] px-2 py-1 w-full mt-1" />
		</div>
	);
}
