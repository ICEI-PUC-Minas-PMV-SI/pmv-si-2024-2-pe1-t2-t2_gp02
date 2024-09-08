# Especificações do Projeto

## Diagrama

<div style="display:flex;justify-content:center;margin-bottom:3rem;margin-top:3rem">
  <img title="Gráfico IBGE" alt="Gráfico IBGE" src="./img/diagrama.png">
</div>

## Histórias de Usuários

| EU COMO | QUERO/PRECISO | PARA |
|--------------------|------------------------------------|----------------------------------------|
| USUÁRIO | Ter acesso aos locais que receberam alguma denúncia por falta de acessibilidade quanto à mobilidade urbana. | Manter-me informado(a) |
| USUÁRIO | Registrar uma nova denúncia de um local que possui características que não condizem com normas básicas de acessibilidade. | Denúnciar esses locais |
| USUÁRIO | Receber alguma resposta acerca da correção do problema. | Saber se minha denúncia foi resolvida |
| ADMINISTRADOR | Ter acesso a todas as informações de cada denúncia. | Processar e analisar esses dados |
| ADMINISTRADOR | Publicar dados que gerem publicidade ao problema diante do poder público | Cobrar uma resposta diante do problema exposto pelo USUÁRIO. |

## Requisitos Funcionais

| ID     | Descrição do Requisito                                       | Prioridade |
| ------ | ------------------------------------------------------------ | ---------- |
| RF-001 | Cadastrar uma denúncia                                       | ALTA       |
| RF-002 | Registrar uma imagem do local da denúncia                    | ALTA       |
| RF-003 | Listar todas as denúncias                                    | MÉDIA      |
| RF-004 | Listar denúncias por usuário                                 | MÉDIA      |
| RF-005 | Listar denúncias por prefeitura                              | MÉDIA ALTA |
| RF-006 | Listar denúncias por estados                                 | MÉDIA      |
| RF-007 | Acessar informações sobre a denúncia                         | ALTA       |
| RF-008 | Acessar diversas estatísticas baseadas nos dados cadastrados | MÉDIA      |

## Requisitos Não Funcionais

| ID      | Descrição do Requisito                                                                        | Prioridade |
| ------- | --------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | A imagem deve ter tamanho máximo de (200) MB                                                  | ALTA       |
| RNF-002 | Os usuários não devem ter acesso aos dados específicos do denunciante                         | ALTA       |
| RNF-003 | A persistência ocorrerá de maneira local, no browser do usuário e na própria pasta do projeto | MÉDIA      |
| RNF-004 | A aplicação deve ser responsiva                                                               | BAIXA      |
| RNF-005 | A aplicação deve responder às solicitações e requisitos em no máximo 15s                      | MÉDIA      |

## Restrições do Projeto

Este projeto se delimita na coleta dos dados obtidos através das denúncias feitas pelos usuários. Com esses dados, será possível analisar de forma mais precisa as necessidades específicas de cada usuário e desenvolver planos de solução pensando nos problemas mais recorrentes. Além disso, os dados podem ficar disponíveis para consulta dos indivíduos mais afetados pelo problema. Serão gerados boletins informativos para publicitar o problema.
