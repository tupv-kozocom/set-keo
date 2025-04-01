import React from 'react';
import { cn } from '@/lib/utils';

type InputProps = {
  type: string;
  placeholder?: string;
  name: string;
  id?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

function Input({ type, placeholder, name, id, className, value, onChange, onKeyDown, disabled }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      disabled={disabled}
      className={cn(
        'border border-border-light placeholder:text-text-sub rounded-md w-full p-3 text-base shadow-xs transition-all outline-none',
        'focus:ring-primary focus:outline-none focus:ring-1 focus:border-primary',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
    />
  );
}

export default Input;
