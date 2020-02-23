   let fs = require('fs');
   let fileContent;
   let randomNumbers = Math.ceil(Math.random() * 10);
   function test (filepath) {

      (async () => {
        await writefile(filepath).then(readfile(filepath));
        // await readfile(filepath);
      }) ();
    }

    function writefile(filepath) {
       let promise;
       promise = new Promise((resolve,reject) => {
        console.log(__dirname)
          fs.appendFileSync(filepath, randomNumbers);
       }).catch(error => { console.log('caught ', error.message); })
       return promise;
    }

    function readfile(filepath) {
       let promise;
       promise = new Promise((resolve,reject) => {
          fileContent = fs.readFileSync(filepath);
          if(  fileContent == randomNumbers ) {
            console.log("file read and write is synchronized");
          } else {
             console.log("file read and write is not synchronized");
          }
       }).then().catch(error => { console.log('caught ', error.message); })
       return promise;
    }

    // test('create.txt')