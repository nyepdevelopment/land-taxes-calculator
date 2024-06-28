import { InputHTMLAttributes } from "react";

export default function InputField({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<div className={rest.className}>	
			<label className="font-[600]">{rest.placeholder}</label>
			<input {...rest} className="border-black border-[1px] px-2 py-1 w-full mt-1" placeholder={`Input ${rest.placeholder}`} />
		</div>
	);
}
