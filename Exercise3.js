const os = require("os");
const fs = require("fs");

function logSystemInfo() {
    setInterval(() => {
        const cpuModel = os.cpus()[0].model;
        const totalmemory = (os.totalmem()); 
        const platform = os.platform();
         const info = `
                CPU: ${cpuModel}
                Total Memory: ${totalmemory} 
                Platform: ${platform}
                \n`;
        fs.appendFile("input.txt", info, (err) => {
            if (err) {
                console.error("Failed to write to file:", err);
            } else {
                console.log("System  successfully logged ");
            }
        });

    }, 5000);
}

module.exports = logSystemInfo;