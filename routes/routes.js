const routes = require('next-routes')();
const routeList = require('./index.json');

Object.keys(routeList).forEach((name) => {
  routes.add({ name, ...routeList[name] });
});

module.exports = routes;
