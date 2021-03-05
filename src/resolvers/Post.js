const Post = {
  author(parrent, args, { db }, info) {
    const user = db.users.find((user) => user.id === parrent.author);

    return user;
  },
};

module.exports = Post;
