"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="fixed w-full flex flex-row justify-between items-center p-4  h-[43px] bg-primary">
      <div className="flex items-center">
        <button className="text-neutral-500 hover:text-neutral-400" onClick={handle}>
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <a className="text-neutral-500 hover:text-neutral-400" href="/">
          Inicial
        </a>
        <a className="text-neutral-500 hover:text-neutral-400" href="./Documentation">
          Documentação
        </a>
      </div>
    </header>
  );
}
