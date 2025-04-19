const fs = require('fs');
const path = require('path');

const directoriesToSearch = ['airdrops', 'flow', 'lockup'];
const oldName = 'mode-sepolia.json';
const newName = 'mode-testnet.json';

function renameFiles(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
            renameFiles(fullPath);
        } else if (item.isFile() && item.name === oldName) {
            const newPath = path.join(dir, newName);
            console.log(`Renaming ${fullPath} to ${newPath}`);
            fs.renameSync(fullPath, newPath);
        }
    }
}

// Process each target directory
directoriesToSearch.forEach(dir => {
    if (fs.existsSync(dir)) {
        console.log(`Processing directory: ${dir}`);
        renameFiles(dir);
    } else {
        console.log(`Directory not found: ${dir}`);
    }
});

console.log('File renaming complete!');
