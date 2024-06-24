# Use uma imagem base oficial do Node.js
FROM node:18.17.0-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

# Construa o projeto Next.js
RUN npm run build

# Exponha a porta que o Next.js usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
