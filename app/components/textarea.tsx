import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  isDraggable?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      placeholder = "Type code or drop a file here...",
      value,
      onChange,
      onPaste,
      isDraggable = false,
    }: Props,
    ref
  ) => {
    const onDrop = useCallback(
      (acceptedFiles: any[]) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();

          reader.onabort = () => console.log("file reading was aborted");
          reader.onerror = () => console.log("file reading has failed");
          reader.onload = () => {
            const svgSource = reader?.result || "";
            onChange(svgSource.toString() || "");
          };
          reader.readAsText(file);
        });
      },
      [onChange]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {
        "image/svg": [".svg"],
      },
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      onChange(e.target.value);
    };

    return (
      <div {...getRootProps()} className="w-full h-full flex flex-col">
        {isDragActive && <input {...getInputProps()} />}
        <textarea
          ref={ref}
          className={`textarea textarea-primary resize-none flex-1 ${
            isDraggable && isDragActive
              ? "border-dashed drop-shadow-lg transition-all"
              : ""
          } ${className}`}
          placeholder={
            isDraggable && isDragActive ? "drop the file" : placeholder
          }
          value={value}
          onChange={handleOnChange}
          onPaste={onPaste}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
