# Calculadora de MMC (Mínimo Múltiplo Comum)

Esta aplicação permite calcular o menor número inteiro que é divisível por todos os números em um intervalo especificado. O projeto consiste em uma API Django no backend e uma interface React no frontend.

## 🚀 Tecnologias Utilizadas

### Backend
- Python 3.10+
- Django 5.1
- Django REST Framework
- Django CORS Headers

### Frontend
- React 18
- Styled Components

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- Python 3.10 ou superior
- Node.js 20 ou superior
- npm ou yarn
- Git

## 🔧 Instalação

### Backend (Django)

1. Clone o repositório
```bash
git clone https://github.com/itsduzao/internship-challenge.git
cd internship-challenge
```

2. Crie e ative um ambiente virtual
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/macOS
python3 -m venv venv
source venv/bin/activate
```

3. Instale as dependências do Python
```bash
pip install -r requirements.txt
```

4. Execute as migrações
```bash
python manage.py migrate
```

5. Inicie o servidor Django
```bash
python manage.py runserver
```

O backend estará rodando em `http://localhost:8000`

### Frontend (React)

1. Navegue até a pasta do frontend
```bash
cd frontend
```

2. Instale as dependências
```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

O frontend estará rodando em `http://localhost:5173/`

## 🛠️ Estrutura do Projeto

```
internship-challenge/
├── calculadora/
│   ├── settings.py
│   ├── urls.py
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Alert/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── Button/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── Card/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── Form/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   └── LCMCalculator/
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   └── main.jsx
├── manage.py
├── mmc/
│   ├── modules/
│   │   ├── gcd.py
│   │   ├── lcm.py
│   │   └── lcm_range.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── README.md
├── requirements.txt

```

## 📦 Endpoints da API

### Calcular MMC
- **URL**: `/calculadora/mmc/`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "x": 1,
    "y": 10
  }
  ```
- **Resposta de Sucesso**:
  ```json
  {
    "x": 1,
    "y": 10,
    "resultado": 2520,
  }
  ```
- **Códigos de Erro**:
  - `400`: Dados inválidos
  - `500`: Erro interno do servidor

## 🚥 Validações

### Frontend
- Ambos os números devem ser inteiros positivos
- x deve ser menor que y
- O intervalo não pode ser menor ou igual a zero

### Backend
- Validação dos tipos de dados
- Verificação de números positivos
- Validação do intervalo (x < y)
- Validação de ausência de parâmetros


## 🧪 Executando os Testes

### Backend
```bash
python manage.py test
```

## 📱 Exemplos de Uso

1. Acesse a aplicação em `http://localhost:5173`
2. Digite um número inicial (x) e um número final (y)
3. Clique em "Calcular MMC"
4. O resultado será exibido na tela

## 📧 Contato

- Email: contatoehls@outlook.com
- LinkedIn: [Eduardo Henrique](https://www.linkedin.com/in/itsduzao/)
- GitHub: [@itsduzao](https://github.com/itsduzao)