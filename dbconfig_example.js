//make this file in server/db/

var cfg = {
  myLocalDB: 'you can suffer through creating a new db on command line, download the postgres app!',
  myLocalDBRole: 'defined when you create a role on your db.',
  myLocalDBPW: 'you can leave this blank when you create a role, just put an empty string here',
  secret: "make a secret! just make sure it's a string or buffer or jwt will yell at you"
};

//module.exports = cfg;