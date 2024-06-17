"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/ui/header/page";
import FileUpload from "../components/ui/input/page";
import Dash from '../../public/dash.png';
import dmSans from "../app/layout";
import axios from "axios";
  import Button from "../components/ui/button/page";
const Home: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setMessage('Selecione um arquivo para enviar.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Falha ao enviar o arquivo.');
    }
  };

  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-evenly md:flex-row items-center justify-center gap-4 px-5 md:px-10 bg-primary dark:bg-background">
        <div className="w-full md:w-[500px] h-full flex-initial flex-col items-center px-5 gap-2">
          <h1 className="text-2xl font-semibold text-primary dark:text-foreground my-1">
            Cadastro de processos
          </h1>
          <p className={`${dmSans} text-base text-secondary dark:text-secondary font-normal my-1`}>
            Anexe aqui sua planilha para iniciar
          </p>
          <form onSubmit={handleSubmit}>
            <div className="w-full my-1 p-2 flex flex-col items-start rounded-md container-bg dark:bg-gray-800 my-1">
              <FileUpload onFileSelect={handleFileSelect} />
            </div>
            <div className="w-full flex flex-row items-center justify-center">
            <Button
                type="submit"
                backgroundColor="#334155"
                rounded="rounded"
                width="w-[150px]"
                hoverBackgroundColor="bg-primary"
                hoverTextColor="text-white"
              >
                Iniciar
              </Button>
            </div>
            {message && <p>{message}</p>}
          </form>
        </div>
        <div className="hidden md:flex flex-col w-full md:w-[500px] h-full items-center justify-center px-5">
          <Image
            className="w-[300px] h-[300px] md:w-[300px] md:h-[300px]"
            src={Dash}
            alt="Profiling"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
