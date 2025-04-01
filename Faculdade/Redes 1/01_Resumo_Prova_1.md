# Resumo da Teoria Necessária para Cada Questão da Lista 02

## Questão 1: Cálculo de Tempos em HTTP Não Persistente e Persistente
- **Teoria Principal:** Diferenças entre HTTP não persistente e persistente, considerando o overhead das conexões TCP e os tempos envolvidos.
  - **HTTP Não Persistente:** Cada objeto requer uma nova conexão TCP, com um handshake de 3 vias (SYN, SYN-ACK, ACK) para cada objeto.
  - **HTTP Persistente:** Usa uma única conexão TCP para múltiplos objetos, reduzindo o overhead.
  - **Tempos Envolvidos:**
    - *Tempo de Propagação (Tp):* Calculado como distância ÷ velocidade de propagação.
    - *Tempo de Transmissão (Tt):* Calculado como tamanho do pacote ÷ taxa de transmissão.
    - *RTT (Round-Trip Time):* Tempo de ida e volta de uma mensagem.
  - **Conexões Paralelas:** A largura de banda total é dividida pelo número de conexões simultâneas, afetando a taxa por conexão.

## Questão 2: Protocolos Envolvidos no Acesso a uma Página Web
- **Teoria Principal:** Protocolos de aplicação e transporte usados no acesso a uma página web.
  - **DNS (Domain Name System):** Protocolo de aplicação que resolve URLs em endereços IP, usando UDP como protocolo de transporte para consultas rápidas.
  - **TCP:** Protocolo de transporte usado pelo HTTP para garantir entrega confiável dos dados.
  - **HTTP:** Protocolo de aplicação para transferência de páginas web, baseado em TCP.

## Questão 3: Cálculo do Tempo Total para Acesso a uma Página Web
- **Teoria Principal:** Componentes do tempo total para acessar uma página web.
  - **Resolução DNS:** Tempo para consultar servidores DNS, somando os RTTs de cada consulta.
  - **Estabelecimento TCP:** Handshake de 3 vias, que leva 1 RTT (veja *Questão 1* para detalhes do handshake).
  - **Requisição HTTP:** Envio da solicitação e recebimento da resposta, que leva outro RTT.
- **Cálculo Total:** Soma dos RTTs do DNS + 2 × RTT da conexão (handshake + requisição HTTP).

## Questão 4: Análise de uma Resposta HTTP
- **Teoria Principal:** Estrutura de uma resposta HTTP.
  - **Linha de Status:** Indica o resultado da requisição (ex.: 200 OK, 404 Not Found).
  - **Cabeçalhos:** Metadados como:
    - `Last-Modified`: Data da última modificação do objeto.
    - `Content-Length`: Tamanho do objeto em bytes.
  - **Corpo:** Contém o objeto web (ex.: HTML, imagem).

## Questão 5: Envio de Quadros em HTTP/2
- **Teoria Principal:** Multiplexação no HTTP/2.
  - **HTTP/2:** Permite o envio simultâneo de múltiplos objetos pela mesma conexão TCP (veja *Questão 1* para detalhes da conexão TCP).
  - **Intercalação:** Quadros de diferentes objetos são misturados na transmissão, permitindo que objetos menores sejam concluídos mais cedo, ao contrário do envio sequencial.

# Notas Finais
- **Referências Cruzadas:**
  - *Questão 1* e *Questão 3* compartilham a teoria do handshake TCP e cálculos de RTT.
  - *Questão 2* e *Questão 3* usam os protocolos DNS e TCP.