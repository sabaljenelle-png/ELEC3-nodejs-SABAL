// Full Name: Jenelle M. Sabal
// Section: IV-BSIT C
// Activity: ELEC 3 - N3
// Date: November 25, 2026

// Import built-in modules
const fs = require("fs");
const path = require("path");

// Create the folder path where text files will be stored
const filesFolder = path.join(__dirname, "files");

// Make sure the files folder exists
if (!fs.existsSync(filesFolder)) {
    fs.mkdirSync(filesFolder);
}

// Read commands from the terminal
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

// Create a safe file path using path.join()
const filePath = path.join(filesFolder, fileName || "");


// CREATE command
if (command === "create") {
    if (!fileName || !content) {
        console.log('Usage: node index.js create <filename> "content"');
    } else {
        try {
            fs.writeFileSync(filePath, content, { flag: "wx" });
            console.log("File created successfully: " + fileName);
        } catch (error) {
            if (error.code === "EEXIST") {
                console.log("Error: File already exists.");
            } else {
                console.log("Error creating file: " + error.message);
            }
        }
    }
}


// READ command
if (command === "read") {
    if (!fileName) {
        console.log("Usage: node index.js read <filename>");
    } else {
        try {
            const fileContent = fs.readFileSync(filePath, "utf8");
            console.log("File content:");
            console.log(fileContent);
        } catch (error) {
            if (error.code === "ENOENT") {
                console.log("Error: File does not exist.");
            } else {
                console.log("Error reading file: " + error.message);
            }
        }
    }
}


// UPDATE command
if (command === "update") {
    if (!fileName || !content) {
        console.log('Usage: node index.js update <filename> "new content"');
    } else {
        try {
            fs.appendFileSync(filePath, "\n" + content);
            console.log("File updated successfully: " + fileName);
        } catch (error) {
            if (error.code === "ENOENT") {
                console.log("Error: File does not exist.");
            } else {
                console.log("Error updating file: " + error.message);
            }
        }
    }
}


// DELETE command
if (command === "delete") {
    if (!fileName) {
        console.log("Usage: node index.js delete <filename>");
    } else {
        try {
            fs.unlinkSync(filePath);
            console.log("File deleted successfully: " + fileName);
        } catch (error) {
            if (error.code === "ENOENT") {
                console.log("Error: File does not exist.");
            } else {
                console.log("Error deleting file: " + error.message);
            }
        }
    }
}


// LIST command
if (command === "list") {
    try {
        const files = fs.readdirSync(filesFolder);

        if (files.length === 0) {
            console.log("The files folder is empty.");
        } else {
            console.log("========== FILE LIST ==========");

            files.forEach((file) => {
                const currentPath = path.join(filesFolder, file);
                const fileName = path.basename(currentPath);
                const extension = path.extname(currentPath);
                const fileContent = fs.readFileSync(currentPath, "utf8");

                console.log("------------------------------");
                console.log("Full Path: " + currentPath);
                console.log("File Name: " + fileName);
                console.log("Extension: " + extension);
                console.log("Content: " + fileContent);
            });

            console.log("==============================");
        }
    } catch (error) {
        console.log("Error listing files: " + error.message);
    }
}