# Diferença entre `data` e `type` em Haskell com Exemplos de Árvores

## Diferença Teórica

- **`data`**: 
  - Cria novos tipos de dados (tipos algébricos de dados).
  - Permite definir construtores de dados, que são funções para construir valores do tipo.
  - Suporta polimorfismo através de tipos parametrizados.
  
- **`type`**:
  - Cria sinônimos de tipos já existentes.
  - Não introduz novos construtores ou estruturas de dados.
  - Não suporta polimorfismo direto como `data`.

## Exemplos com Árvores

### Usando `data` para Definir Árvores Binárias

```haskell
data Tree a = Empty 
            | Node a (Tree a) (Tree a) 
            deriving (Show, Eq)
```

### Exemplo de uso

``` haskell
-- Define Tree a como um tipo parametrizado onde a pode ser qualquer tipo.
-- Empty representa uma árvore vazia.
-- Node é um nó com um valor de tipo a e dois filhos, que são outras árvores do mesmo tipo.
exampleTree :: Tree Int
exampleTree = Node 1 (Node 2 Empty Empty) (Node 3 Empty Empty)

-- usando type para sinônimos de árvores
type BinaryTree = Tree Int

-- BinaryTree é apenas um novo nome para Tree Int, não cria um novo tipo.
exampleBinaryTree :: BinaryTree
exampleBinaryTree = Node 1 (Node 2 Empty Empty) (Node 3 Empty Empty)
```

### Concluindo

- Use **data** para novas estruturas de dados, como árvores binárias, onde você precisa de novos construtores.
- Use **type** para dar nomes mais expressivos a tipos existentes, melhorando a legibilidade sem alterar a estrutura de dados.