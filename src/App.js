
function App(Collection, http, URL, map) {

    this.search = function appSearch(query) {
        return http.post(URL.SEARCH, query);
    }

    this.listCollections = function listCollections() {
        return http.get(URL.COLLECTIONS);
    }

    this.serverTime = function serverTime() {
        return http.get(URL.SERVER_TIME);
    }

    this.collection = function collection(name) {
        return map.has(name) ? map.get(name) : map.set(name, new Collection(name, http, URL)).get(name);
    }
}

module.exports = App;