import path from "path";
import fs from "fs";

export function getProductTypes() {
    const filename = 'productTypes.json'
    const filepath: string = path.join(__dirname, '..', 'data', 'productType', filename)
    const content: string = fs.readFileSync(filepath, 'utf-8')
    return JSON.parse(content)
}