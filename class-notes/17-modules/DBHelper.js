class DBHelper {
    static DB_USERNAME = 'JOHN DOE'
    static DB_PASSWORD = 'JOHN1234'

    connect() {
        return true
    }
}

module.exports.DBHelper = DBHelper