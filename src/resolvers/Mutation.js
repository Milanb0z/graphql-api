const { v4 } = require("uuid");

const Mutation = {
  createUser(parrent, { data: { email, name, age, role } }, { db }, info) {
    const newUser = {
      id: v4(),
      email,
      name,
      age,
      role,
      posts: [],
    };
    db.users.push(newUser);

    return newUser;
  },
  createPost(parrent, { data: { text, authorId, published } }, { db }, info) {
    const newPost = { id: v4(), text, published, author: authorId };

    db.posts.push(newPost);

    return newPost;
  },
};

module.exports = Mutation;
