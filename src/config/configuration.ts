import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../../.env'),
});

export class Configuration {

    static getBaseUrl(): string {
        return Configuration.getEnv('BASE_URL');
    }

    private static getEnv(key: string): string {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Missing environment variable: ${key}`);
        }
        return value;
    }
}
