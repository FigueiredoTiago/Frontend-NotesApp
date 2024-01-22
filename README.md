###INSTRUCTION

Para usar o meu repositório ReactJS, primeiro, certifique-se de ter o Node.js e o npm instalados na sua máquina. Clone o repositório usando o comando git clone e navegue até o diretório do projeto com cd. Execute npm install para instalar as dependências listadas no arquivo package.json e, se necessário, Para iniciar a aplicação em modo de desenvolvimento, use npm run dev e acesse http://localhost:PORTA/ no seu navegador. Durante o desenvolvimento, o modo de desenvolvimento oferece recarregamento automático. Para construir a aplicação para produção, use npm run build, gerando uma versão otimizada no diretório build/. Certifique-se de revisar o arquivo README para quaisquer instruções específicas do projeto, LEMBRE-SE de Iniciar o Servidor Local da API que foi criada para esse projeto, As Portas Ja estão configuradas, Não e necessario criar variaveis de Ambiente.

Considerações Finais para o Avaliador:

peço desculpas pois não consegui finalizar alguns estilos, devido a ter apenas 4 dias fara fazer tudo pois tive problemas com meu computador, no mais, o aplicativo atende as funcionalidades exigidas pelos requisitos, grato Tiago.

Tecnologias Usadas:
React, TypeScript, React Hook Form, React Router.

Explicando o Codigo:

Arquivo de Service da API, Responsavel por Fazer todos os Fetch para buscar ou alterar dados por meio de hooks personalizados:

useGetNotes:
Essa função é um hook de efeito personalizado que realiza uma requisição assíncrona para obter todas as notas de uma determinada API. Utiliza o useState para gerenciar o estado do componente, mantendo a lista de notas (data) e um indicador de carregamento (loading). O useEffect é utilizado para realizar a chamada à API assim que o componente é montado. Além disso, fornece métodos auxiliares (getFavoriteNotes e getNonFavoriteNotes) para filtrar as notas favoritas e não favoritas, respectivamente.

useCreateNote:
Este hook é projetado para criar novas notas. Ele mantém o estado da nota criada (note) e um indicador de carregamento (loading). A função createNote é assíncrona e realiza uma solicitação POST para a API com os dados da nova nota. O estado é então atualizado com a resposta da API ou qualquer erro que ocorra durante o processo.

deleteNote:
Essa função assíncrona realiza uma solicitação DELETE para excluir uma nota com base em seu ID. Ela recebe o ID da nota como parâmetro e constrói a URL correspondente. Em caso de sucesso, imprime a resposta da API no console. Em caso de erro, registra uma mensagem de erro no console.

useUpdateNote:
Este hook é usado para atualizar uma nota existente. Mantém o estado da nota atualizada (note) e um indicador de carregamento (loading). A função updateNote é assíncrona e faz uma solicitação PATCH para a API com os dados atualizados da nota. O estado é então atualizado com a resposta da API ou qualquer erro que ocorra durante o processo.

useGetNoteById:
Esse hook é semelhante ao useGetNotes, mas é projetado para buscar uma única nota com base em seu ID. Mantém o estado da nota única (data) e um indicador de carregamento (loading). O useEffect é utilizado para realizar a chamada à API assim que o componente é montado ou quando o ID da nota é alterado.

useGetNoteByTitle:
Este hook é utilizado para buscar notas com base em seus títulos. Mantém o estado da lista de notas correspondentes (data), um indicador de carregamento (loading), e um possível erro (error). A função getNoteByTitle realiza uma solicitação GET para a API, passando o título como parâmetro. O estado é atualizado com os resultados da API ou um erro, se ocorrer. O useEffect é utilizado para realizar alguma ação na montagem do componente, se necessário.

//

Estrutura de Pastas:

components:

A pasta components contém os componentes reutilizáveis do aplicativo React.
Aqui, você pode encontrar elementos da interface do usuário que são utilizados em várias partes do aplicativo, e encontrado em cada componente um Arquivo SASS com os Estilos de cada componente.

interfaces:

A pasta interfaces abriga as definições de tipos ou interfaces TypeScript.

pages:

A pasta pages concentra-se no componente que representam páginas específicas do aplicativo.

sass:

A pasta sass é dedicada aos estilos do aplicativo, utilizando o pré-processador de CSS, Sass.
Aqui, você pode encontrar arquivos que definem estilos globais, variáveis, mixins, ou estilos específicos para componentes.
