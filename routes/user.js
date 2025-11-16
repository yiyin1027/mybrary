const express = require('express');
const router = express.Router();
const users = [{name: 'Kyle'}, {name: 'Sally'}];

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User List');
})

router.use(logger);

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: 'Test'})
})

router.post('/', (req, res) => {
    const isValid = false;
    if (isValid) {
        users.push({name: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error");
        res.render('users/new', {firstName: req.body.firstName})
    }
})

router
    .route('/:id')
    .get((req, res) => {
        console.log('req.params.id', req.params.id, 'users', users);
        res.send(`Get user with name ${users[req.params.id]?.name}`)
    })
    .put((req, res) => {
        res.send(`Update user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with id ${req.params.id}`)
    })

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

router.param('id', (req, res, next, id) => {
    console.log(id);
    next();
})

module.exports = router