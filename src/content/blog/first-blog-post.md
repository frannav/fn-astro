---
author: Fran nav
pubDatetime: 2022-09-23T15:22:00Z
title: Introducción a Ethereum, conceptos básicos
postSlug: intro-to-ethereum
draft: false
ogImage: ""
tags:
  - ethereum
  - blockchain
description: Introducción a los conceptos básicos de ethereum
references: [
  'https://ethereum.org/en/learn/',
]
---

# Componentes de Ethereum

## **Red P2P** (Peer to Peer)

Es la red que permite la comunicación y el envío de datos entre usuarios sin necesidad de intermediarios. 
	- Los usuarios deben conocerse entre ellos para comunicarse.

## **Algoritmo de consenso**

Es la manera actualizar la información dentro de la red. Es un sistema "protegido" ya que evita que se inserten datos de manera maliciosa.
##  **Moneda** (Ether)

Es la moneda del proyecto. Todas las operaciones se basan en esta moneda.
## **EVM** (Ethereum Virtual Machine)

Es el software sobre el que se ejecutan los programas de la propia red.
## **Algoritmo criptográfico** (EthHash)

Algoritmo matemático para garantizar la seguridad e incorruptibilidad del sistema

## **Clientes**

Son los clientes que permiten ejecutar nodos para alojar información de la red e interactuar con ella.

## Conceptos relevantes

## **Wallet**

Son aplicaciones con las que podemos administrar nuestras cuentas de Ethereum o de cualquier otra red.
## **Smart Contract**

Son los programas que se ejecutan dentro de la EVM y nos permiten comunicarnos con la blockchain.

## Ether y Gas

También conocido como ETH, es la moneda nativa de Ethereum. Sirve para hacer transferencias de valor hacia los mineros que ejecutan los nodos y los algoritmos de consenso

### Gas

Es la cantidad de ETH necesaria para interactuar con la red de Ethereum y que sirve como combustible para alimentar la red. Cada vez que queremos hacer una transacción en la blockchain tenemos que pagar una tarifa para hacer uso de la EVM. 
Podemos entender el Gas como una unidad que mide la cantidad de "procesamiento computacional" que requiere ejecutar operaciones en la red.

## Criptografía asimétrica

La criptografía nos ofrece diferentes métodos para codificar información y es de los aspectos más importantes de cualquier blockchain.
La idea principal se basa en las claves públicas y privadas.
Es más fácil ilustrarlo con un ejemplo:
	- Si Luke quiere compartir un mensaje con información sensible con Leia y que terceros no obtengan esa información Luke cifraría el mensaje con la clave pública de Leia y cuando este recibiera el mensaje tendría que descifrarlo con su clave privada.

### Hash

Son funciones que nos permiten encriptar datos usando criptografía

## NFT

Un **NFT** (Non-fungible-tokem) representa una manera de identificar algo único en la red de Ethereum y que certifica, dentro de la blockchain, la autenticidad de un activo. Todo se ejecuta y orquestra mediante un smart contract.

En concreto, un NFT es un tipo de smart contract conocido por el término ERC-721. Es un "standard" para vincular un artículo a un token.

## Aplicaciones descentralizadas (dApps)

Son aquellas aplicaciones que no dependen de un servidor centralizado para funcionar. El principal atractivo de estas aplicaciones es que los datos personales no son controlados por **nadie** 

## Algoritmos de consenso

## PoW (Proof of work)

Es el mecanismo que implementó Bitcoin para su red descentralizada. Se trata de un sistema que se basa en un gasto energético, ya que los mineros deben usar sus nodos para descifrar complejos problemas matemáticos para alcanzar su cotizado premio.

## PoS (Proof of Stake)

Es un sistema que se basa en que los nodos con cierta cantidad de Ether se convierten en nodos validadores insertando nuevos bloques a la cadena.
La cantidad de Ether se "bloquea" a modo de garantía para que el nodo no intente algo malicioso.


## Ejemplo práctico: simulación de una blockchain usando JavaScript

```js
const sha256 = require('crypto-js/sha256');

// Creamos una función para crear un bloque
const createBlock = (data, previousHash) => {
  return {
    index: data.length + 1,
    timestamp: new Date().toString(),
    data: data,
    previousHash: previousHash,
    hash: sha256(data + previousHash + new Date().toString()).toString()
  };
};

// Creamos una función para retornar el hash previo de un bloque
const getPreviousBlock = (chain) => {
  return chain[chain.length - 1];
};

// Creamos una función para retornar el hash de un bloque
const getBlockHash = (block) => {
  return sha256(block.data + block.previousHash + block.timestamp).toString();
};

// Creamos una función para agregar un bloque a la blockchain
const addBlock = (data, chain) => {
  let previousBlock = getPreviousBlock(chain);
  let newBlock = createBlock(data, previousBlock.hash);
  if (getBlockHash(newBlock) === newBlock.hash) {
    chain.push(newBlock);
  }
  return chain;
};

// Creamos la blockchain
let blockchain = [createBlock("Inicio", "0")];

// Agregamos bloques a la blockchain
blockchain = addBlock("Transacción 1", blockchain);
blockchain = addBlock("Transacción 2", blockchain);
blockchain = addBlock("Transacción 3", blockchain);

// Mostramos la blockchain
console.log(blockchain);

```

