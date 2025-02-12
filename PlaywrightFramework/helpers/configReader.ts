import fs from 'fs';
import path from 'path';

export function getConfig(env: string) {
    const configPath = path.resolve(__dirname, '../env.config.json'); // Ensure correct file path
    const rawData = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(rawData);

    if (!config[env]) {
        console.warn(`Environment '${env}' not found in env.config.json. Using 'development' as default.`);
    }
    
    return config[env] || config['development']; // Default to 'development' if env is missing
}