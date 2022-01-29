const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// all posts for homepage
router.get('/', (req, res) => {
    console.log(req.session)
    Post.findAll({
        attributes: [
            'id',
            'post_body',
            'title',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
  
    res.render('login');
});

// signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;