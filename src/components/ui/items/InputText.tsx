interface InputTextProps {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputText({ name, label, type, value, onChange }: InputTextProps) {
    return (
        <div className="group">
            <label htmlFor={name} className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-primary-400 transition-colors">
                {label}
            </label>
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={label}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    className="block w-full bg-navy-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400/30 focus:border-primary-400/50 transition-all backdrop-blur-sm hover:border-white/20 sm:text-sm"
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500"></div>
            </div>
        </div>
    );
}
