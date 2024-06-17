"use client";
import React, { ChangeEvent, useState } from 'react';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
    const [fileName, setFileName] = useState<string>('Nenhum arquivo escolhido');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileExtension = file.name.split('.').pop()?.toLowerCase();
            if (fileExtension === 'xls' || fileExtension === 'xlsx') {
                setFileName(file.name);
                onFileSelect(file);
            } else {
                alert('Por favor, selecione um arquivo Excel (.xls ou .xlsx).');
                event.target.value = '';
            }
        }
    };

    return (
        <div className="flex flex-row items-center gap-2 rounded-md ">
            <label className="flex items-center justify-center text-center text-[12px] p-2 button font-medium text-blue-500 rounded-md cursor-pointer transition-all duration-300 ease-in-out dark:button">
                Escolher arquivo
                <input
                    type="file"
                    accept='.xls, .xlsx'
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
            <span className="mt-2 text-[12px] text-gray-500 items-center">{fileName}</span>
        </div>
    );
};

export default FileUpload;
