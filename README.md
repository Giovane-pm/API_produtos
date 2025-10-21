#  DESAFIO_BACK_ASCII_GIOVANE-PEREIRA-MENDES

##  Descrição  
Esta API foi desenvolvida como parte de um desafio acadêmico.  
Ela realiza operações **CRUD** (Criar, Ler, Atualizar e Deletar) integradas com um banco de dados **MySQL**, permitindo gerenciar informações de produtos com campos de **nome**, **preço** e **categoria**.

---

##  Tecnologias Utilizadas  
- **Node.js**  
- **Express**  
- **MySQL**  
- **Sequelize**  
- **dotenv**  
- **Visual Studio Code**

---

##  Como Executar o Projeto  

### 1. Clonar o repositório  
```bash
git clone https://github.com/seuusuario/DESAFIO_BACK_ASCII_GIOVANE-PEREIRA-MENDES.git
```

### 2. Instalar as dependências  
```bash
npm init -y
npm install express sequelize mysql2 dotenv
```

### 3. Configurar as variáveis de ambiente  
O arquivo **.env** já está criado no projeto.  
O usuário **deve apenas ajustar os valores** conforme o seu ambiente local (ex.: usuário e senha do MySQL).  

Exemplo de configuração padrão:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=produtos
DB_PORT=3306
PORT=4000
```
---

### 4. Executar a API  
```bash
npm start
```

A aplicação estará disponível em:  
 **http://localhost:4000**

---

##  Endpoints da API  

### **GET** /api/produtos 
Retorna todos os produtos cadastrados.  
**Exemplo de resposta:**
```json
[
  { "id": 1, "nome": "Teclado Gamer", "preco": 250, "categoria": "Periféricos" },
  { "id": 2, "nome": "Mouse Óptico", "preco": 120, "categoria": "Periféricos" }
]
```

---

### **GET**  /api/produtos/{id} 
Busca um produto específico pelo seu **ID**.  
**Exemplo de resposta:**
```json
{ "id": 1, "nome": "Teclado Gamer", "preco": 250, "categoria": "Periféricos" }
```

---

### **POST**  /api/produtos 
Cria um novo produto.  
**Corpo da requisição (JSON):**
```json
{
  "nome": "Monitor 24 polegadas",
  "preco": 900,
  "categoria": "Monitores"
}
```
**Resposta:**
```json
{ "mensagem": "Produto criado com sucesso" }
```

---

### **PUT**  /api/produtos/{id} 
Atualiza as informações de um produto existente.  
**Corpo da requisição (JSON):**
```json
{
  "nome": "Monitor 27 polegadas",
  "preco": 1200,
  "categoria": "Monitores"
}
```
**Resposta:**
```json
{ "mensagem": "Produto atualizado com sucesso" }
```

---

### **DELETE** /api/produtos/{id}  
Remove um produto do banco de dados.  
**Resposta:**
```json
{ "mensagem": "Produto deletado com sucesso" }
```

---

##  Testando a API  
Você pode testar os endpoints utilizando ferramentas como **Postman**, **Insomnia** ou **ReqBin.com** (Site: Baixar Extencao Chrome).  
Basta enviar as requisições para a URL base:  
```
http://localhost:4000/api/produtos
```

---

##  Autor  
- **Nome:** Giovane Pereira Mendes  
- **Projeto:** DESAFIO_BACK_ASCII_GIOVANE-PEREIRA-MENDES  
- **Tecnologias:** Node.js, Express, MySQL, Sequelize  
- **Porta Padrão:** 4000  
