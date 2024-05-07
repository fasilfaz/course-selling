const userRouter = require("./user/user");


userRouter.use("/user", userRouter);

module.exports = userRouter;