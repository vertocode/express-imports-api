import type {Express} from 'express'
import express, {Request, Response, Router} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { getAllProducts, getProduct, validateProductType } from './helpers/product'

const app: Express = express()
const route: Router = Router()
const port: string = process.env.PORT || '3000'

// const corsOptions = {
//     origin: ['https://imports.vertocode.com', 'http://localhost']
// }
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response): void => {
    res.send({ status: 'OK' })
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

// TODO: Create query to users.

app.listen(port, (): void => {
    console.log(`Imports API running on port: ${port}`)
})