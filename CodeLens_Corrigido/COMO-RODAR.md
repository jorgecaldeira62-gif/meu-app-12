# CodeLens — Como Rodar Agora

## Pré-requisitos
- Node.js instalado (https://nodejs.org — baixe a versão LTS)

## Passos

1. **Extraia o ZIP** em uma pasta no seu computador

2. **Abra o terminal** dentro da pasta extraída

3. **Instale as dependências:**
   ```
   npm install
   ```

4. **Suba o servidor:**
   ```
   npm run dev
   ```

5. **Abra no navegador:**
   ```
   http://localhost:5000
   ```

## Configurar a IA

Dentro do app, vá em **Settings** e coloque:
- Sua chave da API (Claude, Gemini, Groq ou OpenAI)
- O modelo que quiser usar

**Para Claude:** a chave começa com `sk-ant-...`
**Para Gemini:** a chave começa com `AIza...`

## Banco de dados

O banco (Neon PostgreSQL) já está configurado no `.env`.
Na primeira vez que rodar, as tabelas serão criadas automaticamente.

## Problemas comuns

| Erro | Solução |
|------|---------|
| `DATABASE_URL must be set` | Verifique o arquivo `.env` |
| `Cannot find module tsx` | Rode `npm install` novamente |
| Porta ocupada | Mude `PORT=3000` no `.env` |
