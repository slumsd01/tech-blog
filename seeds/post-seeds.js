const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    post_body: 'MCV allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1
  },
  {
    title: 'Authentication vs. Authorization',
    post_body: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    user_id: 2
  },
  {
    title: 'Object-Relational Mapping',
    post_body: 'I have really loved learning about ORMs. It has really simplified the way I create queries in SQL!',
    user_id: 3
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 4
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 5
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 3
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 3
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 2
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 2
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 4
  },
  {
    title: 'Tech Blog Post',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;