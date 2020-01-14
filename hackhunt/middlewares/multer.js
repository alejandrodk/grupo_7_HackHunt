const path = require('path');
const multer = require('multer');

const storage = multer({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,'../public/images/avatars'));
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname + Date.now() + path.extname(file.originalname));
    }

});

var upload = multer({storage:storage});

module.exports = upload;