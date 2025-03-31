import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button as UIButton } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useState } from 'react';
import Image from 'next/image';

type DatePickerProps = {
  id?: string;
  className?: string;
  placeholder?: string;
  value?: Date | null;
  onChange?: (date: Date | undefined) => void;
};

function DatePicker({ id, className, placeholder = 'Pick a date', value, onChange }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value || undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <UIButton
          id={id}
          variant="outline"
          className={cn(
            'w-full p-3 h-[50px] text-left rounded-lg bg-transparent font-normal border border-border-light',
            'focus:ring-primary focus:outline-none focus:ring-1',
            isOpen && 'ring-primary ring-2',
            !selectedDate && 'text-muted-foreground',
            className
          )}
        >
          {selectedDate ? (
            <span className="text-[16px]">{format(selectedDate, 'dd/MM/yyyy')}</span>
          ) : (
            <span className="text-[16px] text-text-sub">{placeholder}</span>
          )}
          <Image className="ml-auto" src="/calendar.svg" alt="calendar" width={20} height={20} />
        </UIButton>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          initialFocus
          className="bg-white rounded-xl"
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePicker;
