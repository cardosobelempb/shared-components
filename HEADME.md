# 🧩 Componentes Reutilizáveis com Next.js

Este projeto contém uma coleção de componentes reutilizáveis construídos com **React** e **Next.js**, estilizados com **Tailwind CSS** e organizados com utilitários como `clsx` e `class-variance-authority` para maior flexibilidade.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — Framework React
- [React Icons](https://react-icons.github.io/react-icons/) — Biblioteca de ícones
- [Tailwind CSS](https://tailwindcss.com/) — Estilização com utility-first
- [clsx](https://github.com/lukeed/clsx) — Utilitário para condicional de classes
- [class-variance-authority (CVA)](https://cva.style/) — Gerenciador de variantes CSS com Tailwind

---

## 📦 Instalação

```bash
npm install clsx class-variance-authority react-icons
# Ou com yarn
yarn add clsx class-variance-authority react-icons

## 📁 Estrutura de Componentes

```bash
/components
  ├── Button.tsx
  ├── Icon.tsx
  └── ...

```

## 🧪 Exemplo de Uso

## ✅ Botão (Button)
- components/Button.tsx
```
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import React from 'react';

const button = cva(
  'px-4 py-2 rounded text-white transition-colors',
  {
    variants: {
      intent: {
        primary: 'bg-blue-600 hover:bg-blue-700',
        secondary: 'bg-gray-600 hover:bg-gray-700',
        danger: 'bg-red-600 hover:bg-red-700',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

export const Button: React.FC<ButtonProps> = ({ className, intent, size, ...props }) => (
  <button className={clsx(button({ intent, size }), className)} {...props} />
);

```

## ✅ Exemplo de uso

```
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div className="p-4">
      <Button intent="primary">Salvar</Button>
      <Button intent="secondary" size="sm" className="ml-2">Cancelar</Button>
    </div>
  );
}

```

## 📝 Licença
- MIT © [surb]

## 🤝 Contribuições
- Sinta-se à vontade para abrir issues, sugerir melhorias ou criar pull requests! 💡