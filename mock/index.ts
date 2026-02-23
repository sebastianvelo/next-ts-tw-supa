import { mockStats, usersMock } from "./app";
import { saveJSON } from "./utils";

const generateJSONFiles = () => {
    console.log("\n📁 Generating JSON files...\n");

    saveJSON("users", usersMock);
    saveJSON("stats", mockStats);

    console.log("\n✨ All JSON files generated successfully!");
    console.log(`📊 Total items: ${Object.values(mockStats).reduce((a, b) => a + b, 0)}`);
};

// Ejecutar si es llamado directamente
if (require.main === module) {
    generateJSONFiles();
}