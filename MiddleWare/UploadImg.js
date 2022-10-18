
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./public')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,  uniqueSuffix + '-' +file.originalname)
    }
})



const upload=multer({storage}).single('productImage')


module.exports=upload