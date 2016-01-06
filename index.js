require('whatwg-fetch');

module.exports = function () {
    return self.fetch.apply(self, arguments);
};
