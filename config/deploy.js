module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'hiccup',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
