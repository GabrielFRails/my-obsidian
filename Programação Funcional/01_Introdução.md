# Programação Funcional

## Definição
A **programação funcional** é um paradigma de programação que trata a computação como a avaliação de funções matemáticas e evita mudanças de estado e dados mutáveis. Inspirada na matemática, ela enfatiza a composição de funções, a imutabilidade e a ausência de efeitos colaterais.

## Princípios Chave

- **Funções como Cidadãos de Primeira Classe**: Funções podem ser passadas como argumentos para outras funções, retornadas como valores e atribuídas a variáveis.

- **Imutabilidade**: Uma vez que um valor é criado, ele não pode ser alterado. Isso leva a um código mais previsível e facilita o rastreamento de erros.

- **Ausência de Efeitos Colaterais**: As funções não devem alterar o estado global ou externo. O resultado de uma função depende apenas de seus argumentos.

- **Transparência Referencial**: Se uma função é chamada com os mesmos argumentos, ela deve sempre retornar o mesmo resultado.

- **Composição de Funções**: Funções podem ser combinadas para criar novas funções, promovendo a reutilização de código.

## Conceitos Importantes

- **Funções Puras**: Funções que, para um dado conjunto de entradas, sempre produzem o mesmo resultado e não têm efeitos colaterais.

- **Recursão**: Frequentemente usada em lugar de loops, uma vez que a programação funcional evita a mutação do estado.

- **Funções de Alta Ordem**: Funções que podem aceitar outras funções como argumentos ou retornar funções como resultado.

- **Map, Filter, Reduce**: Operações comuns sobre coleções de dados. 
  - **Map**: Aplica uma função a cada elemento de uma coleção, produzindo uma nova coleção.
  - **Filter**: Cria uma nova coleção com todos os elementos que passam em um teste implementado por uma função fornecida.
  - **Reduce**: Reduz uma coleção a um único valor acumulando resultados através de uma função.

- **Currying**: Técnica que transforma uma função que aceita múltiplos argumentos em uma sequência de funções, cada uma aceitando um único argumento.

- **Closures**: Funções que têm acesso ao escopo onde foram criadas, permitindo o encapsulamento de dados.

## Vantagens

- **Código mais claro e conciso**: Facilita a leitura e manutenção do código.
- **Facilita o paralelismo**: Sem estados mutáveis, partes do programa podem ser executadas em paralelo sem preocupações com sincronização.
- **Testabilidade**: Funções puras são mais fáceis de testar, já que não dependem de estado externo.

## Desvantagens

- **Curva de Aprendizado**: Pode ser difícil para desenvolvedores habituados a paradigmas imperativos.
- **Desempenho**: Em alguns casos, pode ser menos eficiente em termos de memória ou tempo de execução devido à imutabilidade e recursão.