db.createUser({
  user: 'user',
  pwd: 'userpw',
  roles: [
    {
      role: 'readWrite',
      db: 'my-db',
    },
  ],
});
