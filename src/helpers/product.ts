import * as fs from "fs";
import * as path from "path";

export function getProduct(productType: ProductTypes) {
    const filename: string = (() => {
       switch (productType) {
           case ProductTypes.iphone:
               return 'iphone.json'
           case ProductTypes.macbook:
               return 'macbook.json'
           case ProductTypes.macMini:
               return 'macMini.json'
           case ProductTypes.macStudio:
               return 'macStudio.json'
           case ProductTypes.accessories:
               return 'accessories.json'
           default:
               throw new Error(`ProductType passes is not registered: ${productType}`)
       }
    })()

    const filepath: string = path.join(__dirname, '..', 'data', 'products', filename)
    const content: string = fs.readFileSync(filepath, 'utf-8')
    return JSON.parse(content)
}

export function getAllProducts() {
    return Object.values(ProductTypes).flatMap(productType => {
        return getProduct(productType)
    })
}

export function validateProductType(productType: ProductTypes): boolean {
    return Object.values(ProductTypes).includes(productType)
}

export enum ProductTypes {
    iphone = 'iphone',
    macbook = 'macbook',
    macMini = 'mac-mini',
    macStudio = 'mac-studio',
    accessories = 'accessories'
}