

**o codigo principal é o código que se encontra na pasta USER, é nescessário executar todas os códigos, 
porém acessar apenas as rotas que se encontram na pasta USER**


**O arquivo **MERCAFACIL.JSON** é o arquivo de importação dos campos no insominia/postman, recomando que o import**




para iniciar projeto:

preencha o arquivo .env.example com os dados nescessários para execução do projeto.

obs: os arquivos se encontram na raiz das pastas: user, macapa, varejao;
obs1: com o arquivo preenchido apague a extensão .example;
obs2: para cada arquivo .env escolha uma SERVER_PORT diferente;

instale as dependênicias utilizando o comando:

yarn || npm install;

obs: é nescessário ir em cada uma das pastas para instalar suas dependênicias;


com as dependênicias instaladas iremos startar o banco de dados e rodar as migrations, utilizando o comand:

yarn migrate || npm run migrate;


após isso podemos start o projeto.

podendo utilizalo em ambiente dev com typescript, utilizando o comando:

yarn dev || npm run dev


** em caso de erro no typescript, recomando fazer os passos abaixo. **


ou podemos buildar e rodar também em ambiente dev mas no javascript, o código qual para produção com os seguintes comandos:

yarn build || npm run build - para buildar o código em javascript.

&& 

yarn start || npm run start - para executar.


//----------------------------------------------------------//


Agradeço a oportunidade de poder participar deste processo seletivo, aguardo retorno.

Desenvolvido por: Leoni Mascarenhas