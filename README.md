# luma-project
# Projeto de Automação de Testes com Cypress e Magento

## Tecnologias utilizadas

- **Cypress**
- **Magento**
- **Node.js**
- **Git**
- **Faker.js** 
- **Fixtures** 
- **mochawesome-reporter**

## Pré-requisitos

Antes de iniciar, verifique se o seu sistema atende aos seguintes requisitos:

- Node.js instalado. 
- NPM instalado.
- Git instalado (para controle de versão).

## Passos para Instalação

### 1. Clonar o repositório

Clone o repositório do projeto do GitHub:

git clone <https://github.com/targ1no/luma-project.git>
cd <luma-project>

### 2. Instalar dependências

Dentro do diretório do projeto, instale as dependências necessárias usando NPM:

npm install

## Configuração do Cypress

### 3. Configurar o Cypress

O Cypress já está configurado como uma dependência no projeto. 

## Execução dos Testes

### 4. Executar testes

Para executar os testes, utilize o seguinte comando:

npm cypress open

Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes individualmente ou todos de uma vez.

## Geração de Relatórios

O projeto está configurado para gerar relatórios de execução dos testes utilizando a ferramenta `cypress-mochawesome-reporter`. 
Após a execução dos testes, os relatórios serão gerados na pasta cypress/reports. Para abrir o relatório, acesse o arquivo html gerado em um navegador.

## Cenários opcionais para futura implementação

### Esqueci Minha Senha

1. **Cenário**: Usuário esqueceu sua senha.
2. **Passos**:
   - Acesse a página de login.
   - Clique no link "Esqueci minha senha".
   - Insira o email cadastrado.
   - Verifique se o email de recuperação foi enviado corretamente.

### Adicionar Produto ao Carrinho em Fluxos Alternativos

1. **Página de Produto**:
   - Acesse a página de um produto específico.
   - Verifique diferentes variantes (cores, tamanhos) se aplicável.
   - Adicione o produto ao carrinho e verifique se o número de itens no carrinho é atualizado.

2. **Busca**:
   - Realize uma busca por um produto específico.
   - Selecione o produto na lista de resultados.
   - Verifique se o produto pode ser adicionado ao carrinho corretamente.

### Validação do Pedido Realizado

1. **Passos**:
   - Realize um pedido através do fluxo de checkout.
   - Verifique se o pedido foi processado corretamente.
   - Confirme se a confirmação do pedido é exibida ao usuário.

### Lista de Pedido e Detalhe do Pedido

1. **Lista de Pedido**:
   - Acesse a lista de pedidos na conta do usuário.
   - Verifique se todos os pedidos anteriores são exibidos corretamente.

2. **Detalhe do Pedido**:
   - Selecione um pedido específico na lista de pedidos.
   - Verifique se os detalhes do pedido são exibidos corretamente, incluindo itens, endereço de entrega e status.
