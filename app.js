const express = require('express');
const mongooseConnect = require('./dbconnect/connect')
const errorHandler = require('./middleware/errorHandler')

const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})


//Connect DB and Start the Framework
const app = express();
app.use(express.json())
mongooseConnect();

//Route all the Endpoints
const authRouter = require('./routes/authRoute')
app.use("/auth", authRouter);
const dataRouter = require('./routes/dataRoute')
app.use("/data", dataRouter);

// Authenticate all below endpoints
const authenticate = require('./middleware/authenticate')
app.use(authenticate)

//Authorize the User in accessing the resources
const authorization = require('./middleware/authorization')
app.use(authorization)

const userRouter = require('./routes/userRoute')
app.use("/user", userRouter);
const blogRouter = require('./routes/blogRoute')
app.use("/blog", blogRouter);
const commentRouter = require('./routes/commentRoute')
app.use("/comment", commentRouter);


//handle all Error in handler through middleware
app.use(errorHandler)

let SERVER_PORT  = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
    console.log(`Application Started Successfully on Port : ${SERVER_PORT}`)
});




