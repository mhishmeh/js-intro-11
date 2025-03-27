function get() {
    return 'GET'
}

function post() {
    return 'POST'
}

function del() {
    return 'DELETE'
}

function update() {
    return 'UPDATE'
}

module.exports.get = get
module.exports.post = post
module.exports.del = del
module.exports.update = update

const APIHelper = {
    get,
    post,
    del,
    update,
}