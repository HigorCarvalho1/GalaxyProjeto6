import {Router} from './route.js'
import * as functions from './functions.js'
import * as variaveis from './variaveis.js'


const router = new Router()
router.add("/","/pages/home.html")
router.add("/home","/pages/home.html")
router.add("/univers","/pages/univers.html")
router.add("/explorer","/pages/explorer.html")
router.add(404,"/pages/404.html")



router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

variaveis.btn.addEventListener('click', () => {
    router.btn1()
    router.handle("/univers")
    functions.universo()
    
})
variaveis.home.addEventListener('click', functions.home)
variaveis.universo.addEventListener('click', functions.universo)
variaveis.explorer.addEventListener('click', functions.explorer)



