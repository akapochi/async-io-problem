'use strict';

/*
const waitPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 1000);
});

waitPromise.then(() => console.log('hoge'));
console.log('fuga');
*/

/*
new Promise((resolve) => {
  resolve(2);
}).then((v1) => {
  //v1 は 2
  new Promise((resolve) => {
    resolve(v1 * 3);
  }).then((v2) => {
    //v2 は 6
    new Promise((resolve) => {
      resolve(v2 * 4);
    }).then((v3) => {
      //v3 は 24
      console.log(v3); // 24 が出力される
    });
  });
});
*/

new Promise((resolve) => {
  resolve(2);
})
  .then((v1) => {
    //v1 は 2
    return new Promise((resolve) => {
      resolve(v1 * 3);
    });
  })
  .then((v2) => {
    //v2 は 6
    return new Promise((resolve) => {
      resolve(v2 * 4);
    });
  })
  .then((v3) => {
    //v3 は 24
    console.log(v3); // 24 が出力される
  });