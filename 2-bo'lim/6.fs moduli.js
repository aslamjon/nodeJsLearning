const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', 'utf8', function(err, files) {
//     if (err)
//         console.log(err);
//     else
//         console.log(files);
// })

fs.readFile('./6.fs moduli.js', 'utf8', function(err, fileContent) {
    if (err)
        throw err;
    // console.log(fileContent);
})
/* Topshiriq:
writefile() dan foydalanib yangi file tuzing va uni ustida mashq qiling
rename() function dan foydalanib file nomini o'zgartiring
unlink() dan foydalanib fileni o'chirib tashlang
****************************************************/ 
// fs.writeFile('data.txt', 'Hello', 'utf8', (err) => console.log(err));
// fs.rename('data.txt', 'newdata.txt', (err) => console.log(err));
// fs.unlink('newdata.txt', (err) => {
//     if(err) throw err;
//     else console.log("File has deleted");
// });