const router = require('express').Router()
const events = require('../controllers/events')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

// EVENT ROUTES

router.route('/events')
  .get(events.index)
  .post(secureRoute, events.create)

router.route('/events/:id')
  .get(events.show)
  .put(secureRoute, events.update)
  .delete(secureRoute, events.destroy)

router.route('/events/:id/attend')
  .get(secureRoute, events.attend)

router.route('/events/:id/comments')
  .post(secureRoute, events.commentCreate)

router.route('/events/:id/comments/:commentId') 
  .delete(secureRoute, events.commentDelete)

// USER ROUTES

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/profile/:id')
  .get(secureRoute, users.profile)

module.exports = router