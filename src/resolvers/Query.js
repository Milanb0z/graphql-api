const Query = {
  test() {
    return "Hello";
  },

  feed(parrent, {}, { db }, info) {
    return db.posts;
  },
};

module.exports = Query;
