const path = require('path');
// console.log(__filename); // modul turgan to'liq addressni qaytaradi
let pathObj = path.parse(__filename);

console.log(pathObj);
// ===================- homework -====================
let basename = path.basename(__filename);
let basenameWithoutExt = path.basename(__filename, '.js');
let join = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'); // one dot '.' means Stop // two dot '..' means   back
let normalize = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log(basename);
console.log(basenameWithoutExt);
console.log(join);
console.log(normalize);