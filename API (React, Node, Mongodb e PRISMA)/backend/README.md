Bibliotecas/Dependencias baixadas:
    express (npm i express)

Extensões baixadas:
    Thunder Client (funciona como se fosse o Insominia) ou você usa o Insomia mesmo, funciona também, mas tem que baixar;


## Passo a Passo:

1. npm init -y
    > Cria o package.json, que contém todas as informações do projeto;

2. Criar um arquivo server.js;
    
3. Baixar o express (npm i express);

4. Dentro do package.json, adicionar isso: "type": "module",
    > Vai permitir que o import do express e de outros arquivos sejam feitos da maneira tradicional, ex: import express from "express";

5. Para rodar o servidor use: node +nome do arquivo, ex: node server.js

6. Depois de cada alteração que é feita no codigo, o servidor precisa ser atualizado para continuar funcionando.
    > Para fazer isso, use: 
        node --watch +nome do arquivo, exemplo: node --watch server.js
    
    > Esse comando vale também para toda vez que você quiser rodar seu servidor (atua parecido com o npm run server)

7. Na parte do banco de dados (nesse caso o mongodb), crie/entre na sua conta no mongodb, guarde o usuario e a senha do seu banco de dados (não estou falando do usuario e senha pra login, mas sim do banco), crie um db e em seguida um cluster. Após isso, você pode usar a estrategia de baixar a biblioteca Prisma (ou a bibloteca mongoose) para conectar o banco de dados com o seu projeto. 
    npm install prisma --save-dev 
    > Para baixar o prisma

    npx prisma init
    > Para adicionar o .env e o caminho pré pronto para ser adicionado o caminho/conexão com o banco de dados;

8. Após isso, dentro do meu mongodb na parte de database, clique em conect e copie a URL do seu banco de dados. Vá no seu .env e dentro do "DATABASE_URL" você vai adicionar a url do seu banco de dados que copiou la do conect, mas você terá que fazer algumas alterações:
      
    A url do banco de dados vai vir assim:
        mongodb+srv://teste123:<password>@users.kljl4xp.mongodb.net/?retryWrites=true&w=majority&appName=Users
    
    > Você vai precisar alterar o password pela sua senha do banco de dados (aquela que pedi pra você guardar quandoo criou sua conta), e depois do mongodb.net/ você vai adicionar o nome do seu banco de dados.


    Depois das alterações, a DATABASE_URL da sua .env ficaria assim:
        DATABASE_URL="mongodb+srv://teste123:UFClZ3IhRRWWEmSy@users.kljl4xp.mongodb.net/Users?retryWrites=true&w=majority&appName=Users"

    > Após isso, use o comando "npx prisma db push" no terminal para verificar se a conexão do banco de dados com o seu projeto funcionou corretamente


9. Acesse o site do Prisma para seguir o passo a passo do que adicionar no seu prisma/schema.prisma
    > https://www.prisma.io/docs/getting-started

        Lá você terá o passo a passo no campo inferior da página, clicando em:
            Start from scratch
                MongoDB
                    Creating the prisma schema
                        //Aqui você vai pegando a estrutura de cada modelo do seu schema.prisma, ex:

                        model User {
                            id       String   @id @default(auto()) @map("_id") @db.ObjectId
                            email    String   @unique
                            name     String
                            password String
                            age      String?
                        }


10. Instale o Prisma Client no seu terminal:
    > npm install @prisma/client


11. Como se comunicar com o banco de dados através do seu código:


## OBSERVAÇÕES
    REQUEST:
        Existem 3 tipos de request:
    
1. Query Params (GET)
        servidor.com/usuarios?estado=bahia&cidade=salvador

    > Após adicionar o "?" depois da rota, você adiciona: variavel = valor, igual o exemplo acima. E é usado o "&" para separar uma variavel de outra.
    > Esse metodo é usado em buscadores, por ter informações (Google usa, Youtube usa e etc);
    > Por ter informações na URL, é recomendado utilizar para informações menores, que contém menos coisas, para não encher muito a URL de informações;


    2. Route Params (GET, PUT, DELETE)
        get servidor.com/usuarios/22

        > Aqui é pra quando queremos pegar, editar ou deletar uma informação apenas de um usuario;


    3. Body Params (POST e PUT)
        {
            "nome": "Rodolfo", "id": 22
        }

        > Esse é usado para quando você quer passar informações sensiveis como senhas, informação de cartão de credito e coisas do tipo;