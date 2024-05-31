// Export default
exports.connectToDB = async (dbName) => {
    console.log(`Connecting to the database ${dbName}...`);
}

exports.disconnectDB = async () => {
    console.log("Disconnecting...");
}