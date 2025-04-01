# Resumo da Teoria Necessária para as Questões da Lista 1

## Questão 1
- **Multiplexação Estatística no Tempo**: Na computação de pacotes, a multiplexação estatística no tempo é um método em que os pacotes são enviados por um enlace compartilhado conforme a demanda, sem alocação fixa de tempo. Isso aproveita a natureza esporádica do tráfego de dados, permitindo maior eficiência em redes com uso variável.
- **Diferença para TDM (Time Division Multiplexing)**: TDM aloca intervalos de tempo fixos para cada usuário ou fluxo, independentemente de haver dados a transmitir, enquanto a multiplexação estatística no tempo é dinâmica, enviando pacotes apenas quando necessário, o que pode levar a atrasos variáveis, mas melhora a utilização do enlace.

## Questão 2
- **Componentes do Atraso Fim a Fim**: Incluem:
  - **Atraso de Transmissão (d_trans)**: Tempo para colocar todos os bits do pacote no enlace, dado por L/R (L = tamanho do pacote, R = taxa de transmissão).
  - **Atraso de Propagação (d_prop)**: Tempo para os bits viajarem do remetente ao receptor, dado por distância/velocidade de propagação.
  - **Atraso de Processamento**: Tempo para processar o pacote nos nós (geralmente constante, mas pequeno).
  - **Atraso de Fila**: Tempo que o pacote espera em filas, depende do tráfego (variável).
- **Constantes vs. Variáveis**: Atraso de transmissão e propagação são constantes para uma rota fixa e pacote específico; atraso de fila e processamento podem variar com o tráfego.

## Questão 3
- **Vazão em Redes**: A vazão de transferência é limitada pela taxa do enlace mais lento (gargalo) na rota. Para múltiplos enlaces, vazão = min(R1, R2, R3).
- **Tempo de Transferência**: Calculado como tamanho do arquivo dividido pela vazão (T = tamanho/vazão), convertido para unidades consistentes (bits, segundos).

## Questão 4
- **Comutação de Circuitos**: Capacidade do enlace é dividida igualmente entre usuários, número de usuários = taxa total / taxa por usuário.
- **Comutação de Pacotes e Probabilidade**: Usa multiplexação estatística (ver Questão 1). A probabilidade de um usuário transmitir é dada diretamente (ex.: 10%).
- **Distribuição Binomial**: Para n usuários transmitindo entre N totais, P(n) = C(N,n) * p^n * (1-p)^(N-n), onde p é a probabilidade de transmissão.
- **Probabilidade de 21 ou mais**: Soma das probabilidades de n = 21 até N usando a binomial.

## Questão 5
- **Atraso de Propagação (d_prop)**: d_prop = m/s (distância/velocidade de propagação).
- **Atraso de Transmissão (d_trans)**: d_trans = L/R (tamanho do pacote/taxa de transmissão).
- **Atraso Fim a Fim**: Soma de d_trans + d_prop (ignorando fila e processamento).
- **Posição dos Bits**: Depende da relação entre d_trans e d_prop:
  - Último bit em t = d_trans: ainda no remetente, começando a propagar.
  - Primeiro bit em t = d_trans: se d_prop > d_trans, ainda no enlace; se d_prop < d_trans, já no destino.
- **Equilíbrio d_prop = d_trans**: Substituir valores e resolver m = (L * s) / R.

## Questão 6
- **Atraso Fim a Fim com Múltiplos Enlaces**: Soma de:
  - Atraso de transmissão em cada enlace: L/R_i.
  - Atraso de propagação em cada enlace: d_i/s_i.
  - Atraso de processamento em cada comutador: d_proc * número de comutadores.
- **Cálculo Numérico**: Substituir valores específicos e somar todos os componentes.

## Questão 7
- **Atraso de Fila**: Tempo que um pacote espera até ser transmitido, dado por:
  - Tempo restante do pacote em transmissão: (L - x)/R, onde x é a quantidade já transmitida.
  - Tempo para transmitir pacotes na fila: N * L/R.
- **Fórmula Geral**: Atraso de fila = (N * L + (L - x))/R.

## Questão 8
- **Vazão em Redes Compartilhadas**: Depende do enlace de gargalo (menor entre Rs, Rc, R). Para M pares:
  - Se R é o gargalo, vazão por par = R/M.
  - Se Rs ou Rc limitam, vazão depende da configuração específica, mas geralmente min(Rs, Rc, R/M).

## Questão 9
- **Intervalo de Chegada**: Com enlace de gargalo Rs < Rc, intervalo = L/Rs (tempo de transmissão no gargalo).
- **Tempo Mínimo T**: Com Rs > Rc (gargalo em Rc), T mínimo = L/Rc para evitar fila, pois o segundo pacote deve esperar o primeiro ser totalmente transmitido no enlace lento.

## Questão 10
- **Armazena e Retransmite**: Pacotes só são enviados ao próximo nó após serem completamente recebidos. Atraso total depende do número de pacotes e hops:
  - **Sem Divisão**: Atraso = soma dos d_trans em cada enlace.
  - **Com Pacotes**: Atraso = d_trans inicial + soma dos d_trans dos últimos pacotes em cada enlace (pipeline).
  - **Muitos Pacotes Pequenos**: Aproxima-se do tempo de transmissão total ajustado por hops.

_______________________________________________________________
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