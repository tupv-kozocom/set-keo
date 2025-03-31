type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
};

function RadioGroup({ name, options, selectedValue, onChange }: RadioGroupProps) {
  return (
    <div className="flex items-center gap-6 mt-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedValue === option.value ? 'border-primary' : 'border-stroke'
            }`}
          >
            {selectedValue === option.value && <div className="w-3 h-3 bg-primary rounded-full"></div>}
          </div>
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;
