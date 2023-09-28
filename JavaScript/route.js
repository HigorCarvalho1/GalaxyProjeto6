export class Router {
    routes = {}
    add(routeName, page){
        this.routes[routeName] = page // page é o caminho e o routeName é o nome do local onde está
    }

    route(event){
        event = event || window.event
        event.preventDefault()
        
        window.history.pushState({}, "", event.target.href)// nessa linha ele fala para colocar no historico ( site ) os nomes dos href
        this.handle()//  utilizar o this quando estiver utilizando alguma função ou propriedade dentro do routes
    }

     handle(pagina){
        const pathname = pagina || window.location.pathname // nessa linha usando as chaves no nome , é possivel ele retirar nome e executar porem tem que ser o mesmo nome da ação 
        console.log(pathname)
        const route =  this.routes[pathname] || this.routes[404]
        fetch(route).then(data => data.text())
        .then(html => document.querySelector('#conteudo').innerHTML = html )// fetch ele busca na pagina aquilo que você deseja , mas ele é uma promise que quer dizer que o J.S vai deixar ele de fora executar as proximas linhas e quando ele estiver pronto vai aparecer
    
    }
}