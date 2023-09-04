# Registro de contatos api
O projeto simula uma agenda de contatos, onde é possível listar todos os contatos, buscar por um único contato através do id, adicionar um novo contato, editar um contato e deletar um contato.


**Observação**: este é meu primeiro projeto usando TypeScript.


## Rotas:


**GET**: `/all-contacts` - retorna todos os contatos registrados.


**GET**: `/contact/:id` - retorna somente um contato especifico.


**POST**: `/register-contact` - registra um novo contato. `name`, `contact` argumentos requeridos no body da requisição. 


**PUT**: `/update-contact` - edita um contato já registrado. `id`, `name` (será o novo nome que deseja salvar), `contact` (será o novo contato que deseja salvar)


**DELETE**: `/delete-contact/:id` - retorna o contato deletado.


## Tecnologias utilizadas


- Node.JS
- Express
- TypeScript
- Mongoose (ODM)
- MongoDB


## Como executar o projeto


Pré-requisitos: 
- `Node 18` ou superior
- `npm 9` ou superior
- MongoDB local ou atlas


```bash
#clonar repositório
git clone https://github.com/DevVitorSilva/register-contact-api.git
```


```bash
#instalar dependências do projeto
npm i
```


```bash
#criar um arquivo .env na raiz do projeto com as seguinte variáveis
PORT=  #porta que o projeto irá rodar
URI=  #uri do mongodb
```


```bash
#executar o projeto
npm start
```


## Autor


Vitor Silva


[LinkedIn](https://linkedin.com/in/vitor-silva-a289a9288)