const User = {
  posts(parrent, args, { db }, info) {
    const posts = db.posts.filter((post) => post.author === parrent.id);
    return posts;
  },
};

module.exports = User;
