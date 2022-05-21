const router = require('express').Router()

const CustomersCrontroller = require('../controllers/customers')
const IndexController = require('../controllers/index')

// rotas
router.get('/', IndexController.index)

// registro
router.get('/register', CustomersCrontroller.index)
router.post('/register/add', CustomersCrontroller.add)

// listar 
router.get('/list', CustomersCrontroller.list)

// editar
router.get('/edit', CustomersCrontroller.formEdit)
router.post('/edit/:id', CustomersCrontroller.edit)

// remover
router.get('/remove/:id', CustomersCrontroller.remove)

module.exports = router