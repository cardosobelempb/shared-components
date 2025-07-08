// components/TextareaRoot.tsx
"use client";

import React, { useId } from "react";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { inputVariants, type InputVariants } from "./input.type";
import type { UseFormRegister } from "react-hook-form";

type TextareaRootProps<T extends Record<string, unknown>> =
  ComponentPropsWithoutRef<"textarea"> &
    InputVariants & {
      label?: string;
      helperText?: string;
      error?: string;
      full?: boolean;
      register?: UseFormRegister<T>;
    };

export default function TextareaRoot({
  className,
  scale,
  variant = "default",
  full,
  disabled,
  label,
  helperText,
  error,
  name,
  id,
  register,
  ...props
}: TextareaRootProps<Record<string, unknown>>) {
  const generatedId = useId();
  const inputId = id || `${name}-${generatedId}`;
  const isError = Boolean(error);
  const effectiveVariant = isError ? "error" : variant;

  const descriptionId = helperText || error ? `${inputId}-desc` : undefined;

  const textareaClasses = clsx(
    inputVariants({ scale, variant: effectiveVariant, full, disabled }),
    "resize-none", // impedir resize, pode customizar
    className
  );

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        disabled={disabled}
        aria-invalid={isError || undefined}
        aria-describedby={descriptionId}
        className={textareaClasses}
        {...(register ? register(name!) : { name })}
        {...props}
      />
      {helperText && !isError && (
        <p id={descriptionId} className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      )}
      {error && (
        <p id={descriptionId} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
