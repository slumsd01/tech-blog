const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
        user_id: 1,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;