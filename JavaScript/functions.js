import * as variaveis from './variaveis.js'

export function home(){
    variaveis.body.classList.remove('hide')
    variaveis.body.classList.remove('hide2')
    variaveis.home.classList.add('hide')
    variaveis.explorer.classList.remove('hide')
    variaveis.universo.classList.remove('hide')
    variaveis.btn.classList.remove('hide')
    
}
export function universo(){
    variaveis.body.classList.add('hide')
    variaveis.body.classList.remove('hide2')
    variaveis.home.classList.remove('hide')
    variaveis.explorer.classList.remove('hide')
    variaveis.universo.classList.add('hide')
    variaveis.btn.classList.add('hide')
   
}
export function explorer(){
    variaveis.body.classList.remove('hide')
    variaveis.body.classList.add('hide2')
    variaveis.home.classList.remove('hide')
    variaveis.explorer.classList.add('hide')
    variaveis.universo.classList.remove('hide')
    variaveis.btn.classList.add('hide')
   
}
export function btn(){
    router.add("/univers","/pages/univers.html")
    universo()
}