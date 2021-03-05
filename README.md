# Adicionar Amigos Usando Node-Fetch - NotDev :D
Um request simples para quem quer adicionar amigos no aplicativo Discord usando sua token de usuário.

## LEIA - IMPORTANTE
Uso excessivo de requests pode acarretar no bloqueamento da conta para pedido de confirmação de celular/e-mail ou até BANIMENTO do usuário. Então use moderadamente para estudos e não para ferramentas maliciosas, como os tão conhecidos "SelfBots".

## NPM necessária
> ```BATCH
> npm i node-fetch

## Como usar
1º - Pegue sua token e substituia o `SUA TOKEN AQUI` pela token.
> ```JS
> const userToken = 'SUA TOKEN AQUI';
2º - Pegue o nome e discriminador do amigo desejado e substitua o `NOME` e `0000` pelas informações do seu amigo. ( Ex.: `const bodyRelationship = {"username":"NotDev","discriminator":5175};` )
> ```JS
> const bodyRelationship = {"username":"NOME","discriminator":0000};
3º - Agora basta apenas executar o `index.js` e ser feliz :)
> ```BATCH
> node index.js

**[IMPORTANTE]** - Tem dúvidas? Abra uma Issue que eu responderei quando houver tempo.
