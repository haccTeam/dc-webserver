// part to copy the requested file to the upload folder
const fs = require("fs");


// moving the file -> Saves space on storage device
try{ // actually this should go into the bot's script. hmm 
    fs.renameSync("./stuff/test.txt", "./upload/test.txt") // as there is not an moveFile or similar in JS, we rename the file and it moves it for us. 
} catch (err){
    console.warn("Error moving the file" + err)
}


// copying the file -> Can use a lot of storage
try {
    fs.copyFileSync("./stuff/test.txt", "./upload/test.txt")
} catch (err) {
    console.warn("Error copying the file" + err)
}