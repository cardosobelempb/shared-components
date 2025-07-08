// components/PasswordInput.tsx
"use client";

import React, { useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";
import InputRoot from "../input-root";

export default function PasswordInput(
  props: React.ComponentProps<typeof InputRoot>
) {
  const [visible, setVisible] = useState(false);

  return (
    <InputRoot
      {...props}
      type={visible ? "text" : "password"}
      icon={visible ? FiEyeOff : FiEye}
      iconPosition="end"
      onClick={() => setVisible((v) => !v)}
    />
  );
}
