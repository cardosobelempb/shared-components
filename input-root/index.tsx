"use client";

import React, { useId } from "react";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { IconType } from "react-icons";
import { inputVariants, type InputVariants } from "./input.type";
import type { UseFormRegister, FieldValues } from "react-hook-form";

const iconColorVariants: Record<
  NonNullable<InputVariants["variant"]>,
  string
> = {
  default: "text-gray-500",
  error: "text-pink-500",
  success: "text-green-500",
};

type InputRootProps<T extends FieldValues = FieldValues> =
  ComponentPropsWithoutRef<ElementType> &
    InputVariants & {
      as?: ElementType;
      disabled?: boolean;
      className?: string;
      icon?: IconType;
      iconPosition?: "start" | "end";
      spin?: boolean;
      label?: string;
      helperText?: string;
      error?: string;
      name: string;
      prefix?: React.ReactNode;
      suffix?: React.ReactNode;
      register?: ReturnType<UseFormRegister<T>>;
    };

export default function InputRoot<T extends FieldValues = FieldValues>({
  as = "input",
  className,
  scale,
  variant = "default",
  full,
  disabled,
  icon: Icon,
  iconPosition = "start",
  spin,
  label,
  helperText,
  error,
  id,
  name,
  register,
  prefix,
  suffix,
  ...props
}: InputRootProps<T>) {
  const generatedId = useId();
  const inputId = id || `${name}-${generatedId}`;
  const isError = Boolean(error);
  const effectiveVariant = isError ? "error" : variant || "default";

  const iconColor = iconColorVariants[effectiveVariant];

  const inputClasses = clsx(
    inputVariants({ scale, variant: effectiveVariant, full, disabled }),
    Icon && iconPosition === "start" && "pl-10",
    Icon && iconPosition === "end" && "pr-10",
    className
  );

  const iconClass = clsx(
    "absolute top-1/2 -translate-y-1/2 h-4 w-4",
    iconColor,
    spin && "animate-spin",
    iconPosition === "start" ? "left-3" : "right-3"
  );

  const descriptionId = helperText || error ? `${inputId}-desc` : undefined;

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

      <div className="relative w-full">
        {Icon && iconPosition === "start" && (
          <Icon className={iconClass} aria-hidden="true" />
        )}

        {prefix && (
          <span className={`text-sm text-gray-500 iconClass`}>{prefix}</span>
        )}

        {React.createElement(as, {
          id: inputId,
          name,
          className: inputClasses,
          disabled,
          "aria-invalid": isError || undefined,
          "aria-describedby": descriptionId,
          ...(register && register.onChange ? register.onChange : {}),
          ...props,
        })}

        {suffix && (
          <span className={`text-sm text-gray-500 iconClass`}>{suffix}</span>
        )}

        {Icon && iconPosition === "end" && (
          <Icon className={iconClass} aria-hidden="true" />
        )}
      </div>

      {helperText && !isError && (
        <p id={descriptionId} className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      )}
      {error && (
        <p id={descriptionId} className="mt-1 text-xs text-pink-500">
          {error}
        </p>
      )}
    </div>
  );
}

/*
import { useForm } from "react-hook-form";
import InputRoot from "./InputRoot";
import { FiMail } from "react-icons/fi";

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)} className="space-y-4">
      <InputRoot
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        icon={FiMail}
        iconPosition="start"
        size="md"
        variant="default"
        register={register}
        error={errors.email?.message as string}
      />

      <button type="submit" className="mt-2 px-4 py-2 bg-black text-white">
        Enviar
      </button>
    </form>
  );
}
import { useForm } from "react-hook-form";
import InputRoot from "./InputRoot";
import { FiMail } from "react-icons/fi";

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)} className="space-y-4">
      <InputRoot
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        icon={FiMail}
        iconPosition="start"
        size="md"
        variant="default"
        register={register}
        error={errors.email?.message as string}
      />

      <button type="submit" className="mt-2 px-4 py-2 bg-black text-white">
        Enviar
      </button>
    </form>
  );
}

*/
