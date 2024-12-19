interface InputTextProps {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adiciona o evento onChange
}

export function InputText({ name, label, type, value, onChange }: InputTextProps) {
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-50">
                {label}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={label}
                    value={value}
                    onChange={onChange} // Handler necessário
                    autoComplete="given-name"
                    className="block w-full rounded-lg border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset ring-amber-300 focus:outline-none focus:shadow focus:shadow-md focus:transition focus:shadow-amber-300 sm:text-sm sm:leading-8"
                />
            </div>
        </>
    );
}
