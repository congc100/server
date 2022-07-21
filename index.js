const fs = require('fs')

const express = require('express')

const log = console.log.bind(console)

const sendHTML = (response, path) => response.send(fs.readFileSync(path, {encoding: 'utf-8'}))

const sendJSON = (response, object) => response.send(JSON.stringify(object))

const init = () => {
    // 新建一个 express 实例
    let app = express()
    // 配置静态文件目录
    app.use(express.static('assets'))
    // 返回实例
    return app
}

const route = (app) => {
    app.get('/login', (request, response) => {
        let path = './assets/login.html'
        sendHTML(response, path)
    })

}

const listen = (app, port) => {
    app.listen(port, () => {
        log(`listening on port ${port}`)
    })
}

const __main = () => {
    let app = init()
    route(app)
    listen(app, 7021)
}

if (require.main === module) {
    __main()
}