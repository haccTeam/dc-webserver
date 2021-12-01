// part to copy the requested file to the upload folder
const fs = require("fs");



// moving the file -> Saves space on storage device
try{ 
    
    // please note, that you have to change the ${foldercode} to something that fits with your code.
    
    fs.renameSync("./stuff/test.txt", `./upload/${foldercode}test.txt`) // as there is nothing like moveFile in JS, we can use the rename function to move the file. 

} catch (err){

    console.warn("Error moving the file" + err) // catch any error and print it 
}


// copying the file -> Can use a lot of storage
try {
    
    // please note, that you have to change the ${foldercode} to something that fits with your code.
    
    fs.copyFileSync("./stuff/test.txt", `./upload/${foldercode}test.txt`) // copies the file to a given folder.

} catch (err) {
    console.warn("Error copying the file" + err) // catch any error and print it
}


// assign some non-sense (as a name) to each folder
function makeFoldercode() {
    var newFoldercode = "";
    var canUse = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 32; i++)
      newFoldercode += canUse.charAt(Math.floor(Math.random() * canUse.length));
  
    return newFoldercode;
  }
  
  console.log(makeFoldercode());

// creating directories 

var dir = `./upload/${makeFoldercode()}`;   // preferably add the userID as a subfolder: `./upload/${user-id}/${makeFoldercode()}` NOTE: Please declare the userID :].

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}


