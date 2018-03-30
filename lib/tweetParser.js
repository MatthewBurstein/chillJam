const tweetParser = (tweetData) => {
  return tweetData.statuses.map(tweet => singleTweetParser(tweet));
};

const singleTweetParser = (tweetData) => {
  const tweet = {
    id: tweetData.id_str,
    url: 'https://twitter.com/' + tweetData.user.screen_name + '/status/' + tweetData.id_str,
    text: tweetData.text,
    userId: tweetData.user.id_str
  };
  return tweet;
};

module.exports = {
  tweetParser: tweetParser,
  singleTweetParser: singleTweetParser
};
