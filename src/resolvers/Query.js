const Query = {
  test() {
    return "Hello";
  },

  feed(parrent, {}, { db }, info) {
    return db.posts;
  },

  users(parrent, { userID }, { db }, info) {
    let users = [...db.users];

    if (userID) {
      users = db.users.filter((user) => user.id === userID);
    }

    return users;
  },
};

module.exports = Query;
