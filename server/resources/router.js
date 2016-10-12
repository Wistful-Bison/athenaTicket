const router = require('../config/middleware.js').router();
const api = require('./controller.js');


router.route('/metrics')
  .get(api.getRelations);

router.route('/api')
  .get(api.getTicket)
  .post(api.createTicket);

router.route('/api/:id')
  .get(api.getTicket)
  .put(api.editTicket)
  .delete(api.deleteTicket);

// router.route('/api/:ticketId/:articleId')
//   .post(api.associateArticle)


router.get('/', api.pingDb)

module.exports = router;
