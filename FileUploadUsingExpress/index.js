const express = require("express");
const multer = require("multer");
const path = require("path");

// file upload folder
const UPLOADS_FOLDER = "./uploads";

// define the storage 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                             .replace(fileExt, "")
                             .toLowerCase()
                             .split(" ")
                             .join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    }
})

// prepare the final multer upload object
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, //1mb
  },
  fileFilter: (req, file, cb) => {
    // console.log(file);
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        // cb(null, false);
        cb(new Error("Only .jpg, .jpeg or .png format allowed!"));
      }
    } else if (file.fieldname === 'doc') {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only .pdf format allowed!'));
        }
    } else {
        cb(new Error('There was an unknown error!'));
    }
  },
});

const app = express();

/* Single file upload er jonno single() */
/* app.post('/', upload.single('avatar'), (req, res) => {
    res.send('Hello World');
}); */

/* multiple file upload ar jonno array() */
/* app.post('/', upload.array('avatar', 3), (req, res) => {
    res.send('Hello World');
}); */

/* multiple field ar jonno aray() */
app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "doc", maxCount: 1 },
  ]),
  (req, res) => {
      console.log(req.files);
    res.send("Hello World");
  }
);

/* form data ar jonno aray() */
/* app.post('/', upload.none(), (req, res) => {
    res.send('Hello World');
}); */

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

app.listen(5000, () => {
  console.log("Server run successfully on 5000 port");
});
