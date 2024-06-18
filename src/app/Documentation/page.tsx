import Header from "@/components/ui/header/page";


export default function Documentation() {
  return (
    <>
    <Header />
    <main className="flex  gap-4 justify-evenly md:flex-col items-start justify-center p-10 md:px-10 bg-primary dark:bg-background">
            <div className="pt-8">
            <h1 className="text-2xl font-semibold text-primary dark:text-foreground my-1">Documentação</h1>
            </div>
          <div className="w-full container-bg p-5 rounded-[10px]">
          <div>
            <h2 className="text-md font-semibold text-secondary my-1">Introdução</h2>
            <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Este guia oferece um passo a passo detalhado para que você, usuário, possa utilizar nosso sistema de automação.
               O sistema requer que você envie um arquivo Excel para iniciar o processo de automação..</p>
          </div>
          </div>
          <div className=" w-full container-bg p-5 rounded-[10px] ">
            <h2 className="text-md font-semibold text-secondary my-1">Requisitos</h2>
            <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">
            Um arquivo Excel (.xlsx) pronto para ser enviado.
            </p>
          <h1 className="text-md font-semibold text-secondary my-1">Passos para utilização do sistema</h1>
          <h1 className="text-md font-semibold text-tertiary my-1">1. Selecione o arquivo: </h1>
          <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Clique no botão de upload de arquivo para selecionar um arquivo em Excel.</p>
          <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Após selecionar o arquivo, ele aparecerá como selecionado.</p>
          <h1 className="text-md font-semibold text-tertiary my-1">2. Enviar o arquivo</h1>
          <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Clique no botão Iniciar para enviar o arquivo.</p>
          <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Aguarde a confirmação do envio. Você verá uma mensagem indicando se o envio foi bem-sucedido ou se ocorreu algum erro.</p>
          <h1 className="text-md font-semibold text-tertiary my-1">3. Acompanhe o progresso</h1>
          <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Após enviar o arquivo, o sistema processará o conteúdo do Excel e executará a automação conforme configurado. </p>
          </div>
          <div className="w-full container-bg p-5 rounded-[10px]">
          <h1 className="text-md font-semibold text-secondary my-1">Mensagens de Status</h1>
                <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Selecione um arquivo para enviar. – quando nenhum arquivo foi selecionado.</p>
                <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Arquivo enviado com sucesso! – quando o arquivo foi enviado com sucesso.</p>
                <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Falha ao enviar o arquivo. – quando houve um problema no envio do arquivo.</p>
                <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Arquivo enviado com sucesso! – quando o arquivo foi enviado com sucesso.</p>
                <p className="text-sm font-normal text-tertiary dark:text-foreground my-1">Falha ao enviar o arquivo. – quando houve um problema no envio do arquivo.</p>
          </div>
          
      </main>
    </>
  );
}
