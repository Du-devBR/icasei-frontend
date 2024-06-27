## Aplicação para teste técnica empresa Icasei

>Criar um sitema de microfrontends para consumir a api do youtube que será fornecida por um BFF com rotas para busca na api.

## Especificações funcionais da aplicação
Criar duas aplicações micro-frontend (no wireframe, mf_drawer e mf_videos) A aplicação MF_DRAWER deve ter dois links, VÍDEOS E FAVORITOS e a aplicação MF_VIDEOS deve conter a busca e listagens.

### VÍDEOS:
 - Ao acessar, o usuário deve poder buscar vídeos através de um campo de busca, onde ele deve informar termos que serão utilizados para buscar vídeos na API do YouTube e listar conforme wireframe.
- O usuário pode reproduzir o vídeo e marcar como favorito.
- Ao cliclar no botão de estrela, deve adicionar/remover da lista de favoritos e alterar o contador de total de vídeos na lista de favoritos.
### FAVORITOS:
 - Ao clicar em FAVORITOS, deve exibir a lista de vídeos marcados como favorito.

## Especificações tecnicas
[ ] Ultilizar umas das opções para controle de sessão e BFF
- Node.js [ x ]
- Go
- Ruby
- Qualquer outra linguagem back end também será aceita

[ ] Utilizar a API de busca do YouTube

[ ] Desing responsivo

[ ] Navegação por rotas é requisito obrigatório

[ ] Não utilizar framework JS (React, Vue, Angular ou frameworks relacionados)

[ ] Cores livres, layout livre, imagens livres

[ ] CSS nativo ou LESS, SASS e afins são permitidos

[ ] Código deve ser tipado

[ ] Utilizar microfront para cada aplicação com BFF

[ ] Utilizar docker para microfronts e BFF

[ ] Obrigatório testes unitários
