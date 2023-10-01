import type { Express } from 'express'
import express, { Request, Response } from 'express'
import cors from 'cors'
import { getAllProducts, getProduct, validateProductType } from './helpers/product'
import { getAllUsers } from './helpers/user'
import { getProductTypes } from './helpers/product-type'

const app: Express = express()
const port: number = 3000

// const corsOptions = {
//     origin: ['https://imports.vertocode.com', 'http://localhost']
// }
app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/', (req: Request, res: Response): void => {
    res.send({ status: 'OK' })
})

app.get('/users', (req: Request, res: Response): void => {
    res.send(getAllUsers())
})

app.get('/products', (req: Request, res: Response): void => {
    res.send(getAllProducts())
})

app.get('/product/:id', (req: any, res: Response): void => {
    if (!validateProductType(req.params.id)) {
        res.send({
            status: 404,
            message: `Product Type passed is not registered: ${req.params.id}`
        })
    }
    res.send(getProduct(req.params.id))
})

app.get('/product-types', (req: Request, res: Response): void => {
    res.send(getProductTypes())
})

// TODO: Create query to users.

app.listen(port, (): void => {
    console.log(`Imports API running on port: ${port}`)
})

module.exports = app