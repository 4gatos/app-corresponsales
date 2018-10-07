const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'home', pattern: '/', page: 'Index' })
  .add({ name: 'battle', pattern: '/batalla/:id', page: 'Battle' });
