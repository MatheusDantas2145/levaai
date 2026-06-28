# LevaAí - Landing Page

Landing page estática em português brasileiro para validar demanda e capturar leads antes do lançamento.

## O que está incluído

- `index.html` — estrutura da página em PT-BR
- `styles.css` — layout moderno, responsivo e com animações suaves
- `script.js` — lógica do formulário, campos condicionais, FAQ e envio de dados
- `bubble-config.js` — configuração do Supabase (endpoint, chave e tabela)

## Como usar

1. Abra `bubble-config.js` e configure `url`, `key` e `table` com os dados do seu projeto Supabase.
2. Abra `index.html` em um servidor local ou diretamente no navegador.
3. O formulário enviará os dados para o Supabase usando a biblioteca oficial.

## Observações

- A página foi construída para conversão e simplicidade, com foco em validação de mercado.
- Para ativar o envio real, substitua o placeholder em `bubble-config.js` e garanta que o Supabase permita CORS e tenha uma tabela `leads` configurada.
