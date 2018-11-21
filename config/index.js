module.exports = process.env.NODE_ENV === 'production' ? {
  port: process.env.PORT,
} : {
  port: 3000,
};
