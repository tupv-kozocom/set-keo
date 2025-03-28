type CheckboxProps = {
  name: string;
  id: string;
  className?: string;
};

function Checkbox({ name, id, className }: CheckboxProps) {
  return (
    <label className={`w-5 h-5 cursor-pointer ${className}`}>
      <input type="checkbox" id={id} name={name} className="peer hidden" />
      <div className="w-full h-full border border-border-light rounded-[3px] flex items-center justify-center peer-checked:hidden" />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden peer-checked:block"
      >
        <rect width="20" height="20" rx="2" fill="#F4751E" />
        <path
          d="M6 10.6667L8.43478 13L14 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  );
}

export default Checkbox;
