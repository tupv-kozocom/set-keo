import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type RadioOption = {
  value: string;
  label: string;
};

type CustomRadioGroupProps = {
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
};

function CustomRadioGroup({ options, selectedValue, onChange, className }: CustomRadioGroupProps) {
  return (
    <RadioGroup value={selectedValue} onValueChange={onChange} className={'flex flex-col gap-2 ' + className}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-2">
          <RadioGroupItem id={option.value} value={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export default CustomRadioGroup;
