// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

resolvedPromise()
  .then((response) => {
    console.log(`resolvedPromise: o número gerado é ${response}.`);
  })
  .catch((response) => {
    console.log(`Com a promise resolvida, não irá passar pelo catch`);
  })
  .finally(() => console.log('Fim da execução da primeira promise.'));

// código que não é assíncrono.
// Será executado antes do retorno da resolvedPromise
// mesmo estando após ela no código
console.log(
  `Esse número não foi gerado por um código assíncrono: ${generateRandomNumber()}`
);
