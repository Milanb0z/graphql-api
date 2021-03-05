const Subscription = {
  count: {
    subscribe(parrent, args, { pubSub }, info) {
      let count = 1;

      setInterval(() => {
        pubSub.publish("count", { count });
        count++;
      }, 1000);

      return pubSub.asyncIterator("count");
    },
  },
};

module.exports = Subscription;
