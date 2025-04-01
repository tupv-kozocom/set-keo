import { cn } from '@/lib/utils';

type SelectProps = {
  id: string;
  name: string;
  data: { value: string; label: string }[];
  className?: string;
  placeHolder?: string;
};

function Select({ id, name, data, className, placeHolder }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        id={id}
        name={name}
        defaultValue=""
        className={cn(
          'w-full border border-border-light rounded-lg p-3 pr-10  appearance-none text-text-sub',
          'focus:ring-primary has-[option:checked:not(:first-child)]:text-foreground',
          className
        )}
      >
        <option className="text-foreground" value="">
          {placeHolder || 'Chọn'}
        </option>
        {data.map((item) => (
          <option className="text-foreground" key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {/* Custom Icon */}
      <div className="absolute mt-4 inset-y-0 right-5 flex items-center pointer-events-none">
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0L5 5L-1.93691e-07 4.9323e-07L10 0Z" fill="#828282" />
        </svg>
      </div>
    </div>
  );
}

export default Select;
