export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })

    if (route == "/pages/universe.html") {
      document.body.style.backgroundImage = "url('/Assets/mountains-universe02.png')"
    } 
    else if (route == "/pages/explore.html") {
      document.body.style.backgroundImage = "url('/Assets/mountains-universe03.png')"
    } else {
      document.body.style.backgroundImage = "url('/Assets/mountains-universe01.png')"
    }
  }
  }
