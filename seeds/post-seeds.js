const { Post } = require('../models');

const postdata = [
  {
    title: 'Apple Releases New Iphones',
    post_text: 'A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.',
    user_id: 10
  },
  {
    title: 'Google spins out secret hi-speed telecom project called Aalyria, and keeps stake in startup',
    post_text: 'Inside Google, a team of techies has been working behind the scenes on software for high-speed communications networks that extend from land to space.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Quisque nisi ante, auctor sed ex quis, consectetur tempor lacus.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Nulla mollis placerat tellus.',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
