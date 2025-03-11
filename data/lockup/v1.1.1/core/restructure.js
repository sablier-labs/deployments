const fs = require('fs');
const path = require('path');

const networks = {
    testnets: ['ethereum-sepolia']
};

function mergeFiles(network, networkType) {
    const basePath = path.join(__dirname, networkType, network);

    // Read both files
    const dynamicPath = path.join(basePath, 'LockupDynamic.json');
    const linearPath = path.join(basePath, 'LockupLinear.json');
    const descriptorPath = path.join(basePath, 'NFTDescriptor.json');

    if (!fs.existsSync(dynamicPath) || !fs.existsSync(linearPath)) {
        console.log(`Skipping ${network} - files not found`);
        return;
    }

    const dynamicContent = JSON.parse(fs.readFileSync(dynamicPath, 'utf8'));
    const linearContent = JSON.parse(fs.readFileSync(linearPath, 'utf8'));
    const descriptorContent = JSON.parse(fs.readFileSync(descriptorPath, 'utf8'));
    // Merge transactions arrays
    const mergedContent = {
        transactions: [
            ...dynamicContent.transactions,
            ...linearContent.transactions,
            ...descriptorContent.transactions
        ]
    };

    // Write merged content to new file
    const outputPath = path.join(__dirname, networkType, `${network}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(mergedContent, null, 2));

    // Delete old files
    fs.unlinkSync(dynamicPath);
    fs.unlinkSync(linearPath);
    fs.unlinkSync(descriptorPath);
    console.log(`Successfully merged files for ${networkType}/${network}`);
}

// Process each network type and its networks
Object.entries(networks).forEach(([networkType, networkList]) => {
    networkList.forEach(network => {
        try {
            mergeFiles(network, networkType);
        } catch (error) {
            console.error(`Error processing ${networkType}/${network}:`, error);
        }
    });
});
