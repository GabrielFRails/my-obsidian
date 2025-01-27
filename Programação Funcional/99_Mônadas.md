# Mônadas na Programação Funcional

## Introdução
Mônadas são uma estrutura em programação funcional que serve para lidar com efeitos colaterais, computações sequenciais, e outras abstrações complexas de forma que mantém o paradigma puramente funcional. Elas são especialmente proeminentes em linguagens como **Haskell**, mas o conceito pode ser aplicado em outras linguagens com suporte a programação funcional.

## Definição

Uma mônada é essencialmente um tipo que envolve um valor e fornece uma maneira de compor cálculos que têm efeitos colaterais ou que dependem do contexto. Formalmente, uma mônada é definida por:

- Um tipo construtor `M`, que transforma tipos em outros tipos (por exemplo, `Maybe a` ou `List a`).
- Duas operações:
  - **return** (ou `pure` em Haskell): `a -> M a`, que "eleva" um valor puro para dentro de uma mônada.
  - **bind** (ou `>>=` em Haskell): `M a -> (a -> M b) -> M b`, que permite a composição de funções monádicas.

## Leis das Mônadas

Para que uma estrutura seja considerada uma mônada, deve obedecer três leis:

1. **Lei da Unidade Esquerda**: `return a >>= k` é igual a `k a`. 
2. **Lei da Unidade Direita**: `m >>= return` é igual a `m`.
3. **Lei da Associatividade**: `(m >>= k) >>= h` é igual a `m >>= (\x -> k x >>= h)`.

Essas leis garantem que as mônadas se comportem de maneira consistente e previsível.

## Exemplos Comuns de Mônadas

- **Maybe Monad**: Usada para computações que podem falhar, encapsulando um valor ou a ausência dele (`Nothing`).

  ```haskell
  data Maybe a = Nothing | Just a
  instance Monad Maybe where
      return = Just
      Nothing >>= _ = Nothing
      (Just x) >>= k = k x
```
