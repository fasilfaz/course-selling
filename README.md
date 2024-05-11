# course selling website Backend

## First commit

In the first commit i created 3 models ( **userModel** , **courseModel** **instructorModel**) and in **controllers** folder i created a **userController.js** file for **signup** and **signin**.for routing iam using **restAPI** in **userRouter.js** file at **routes** folder. In the **src** folder i created a **index.js** file for **HTTP server**. In the **utils** folder i created a **generateTocken.js** file for generate tokens and also created a **config** folder, in the folder i created a **db.js** file for connecting **mongoDB**, iam using here **mongoDB Atles** and **mongoDB Compass** for **DB**.

In the first commint i used some **npm packeges**
  - express.
  - dotenv.
  - mongoose.
  - nodemon.
  - jsonwebtoken.
  - bcrypt.


## Second commit

In the second commit i created a **cloudinary.js** file for cloud services at **config** folder. And i use **cookie** for store tokens. In the **controllers** folder i created a **courseController.js** file for **get course, create course**. And i created a **middlewares** folder for middlewares, in the folder i created a **upload-middleware.js** file for uploading files using **multer**.


In the second commint i used some **npm packeges**
  - cloudinary.
  - cookie-parser.
  - multer.
  


## Third commit

In the third commit i created **instructorController, admin-middleware, instructor-middleware, user-middleware, instructorRouter** and also user and instructor **authentication**.


