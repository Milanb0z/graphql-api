const User = {
  posts(parrent, {}, { db }, info) {
    const posts = db.posts.filter((post) => post.authot === parrent.id);
    return posts;
  },
};

module.exports = User;
