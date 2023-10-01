import * as path from 'path'
import * as fs from 'fs'

export function getAllUsers() {
    const filename: string = 'users.json'
    const filepath: string = path.join(__dirname, '..', 'data', 'users', filename)
    const content: string = fs.readFileSync(filepath, 'utf-8')
    return JSON.parse(content)
}