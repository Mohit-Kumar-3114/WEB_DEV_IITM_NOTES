const z = require("zod")

const userRegisterType = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string()
});


const userLoginType = z.object({
    email: z.email(),
    password: z.string()
})


module.exports = {userRegisterType, userLoginType}