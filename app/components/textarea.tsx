import React from "react";

interface Props {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      placeholder = "Type here...",
      value,
      onChange,
      onPaste,
    }: Props,
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        className={`textarea textarea-primary resize-none w-full ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
      />
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
