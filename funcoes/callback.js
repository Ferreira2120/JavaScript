const teste = function (cb) {
  console.log("função teste");
  console.log(cb);
  cb(40);
};
const fn = function (param) {
  console.log("função anonima de callback");
  console.log(param);
};

// fn(30);

teste(fn);
