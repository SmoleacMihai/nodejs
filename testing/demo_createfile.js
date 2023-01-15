var fs = require('fs');

fs.appendFile('mynewfile1.txt', '\nI cant replace old content apparently', function (err) {
  if (err) throw err;
  console.log('line 5: Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log("line 10: " + file);
});

fs.writeFile('mynewfile3.txt', 'I replaced the old content!', function (err) {
  if (err) throw err;
  console.log('line 17: Saved!');
});

fs.unlink("mynewfile1.txt", (err) => {
  if (err) throw err;
  console.log("mynewfile1.txt deleted");
})