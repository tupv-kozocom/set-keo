import React from 'react';

type InputProps = {
  type: string;
  placeholder?: string;
  name: string;
  id?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function Input({ type, placeholder, name, id, className, value, onChange, onKeyDown }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      name={name}
      value={value}
      className={`border border-border-light placeholder:text-text-sub rounded-lg w-full p-3 ${className}`}
    />
  );
}

export default Input;
