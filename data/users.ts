import bcrypt from 'bcryptjs'

export default {
  users: [
    {
      name: 'Admin',
      email: 'admin@email.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Moderator',
      email: 'john@email.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'moderator',
    },
    {
      name: 'Jane Doe',
      email: 'jane@email.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'user',
    },
  ],
}
