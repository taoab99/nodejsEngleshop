const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
            callback(null, true);
        } else {
            console.log('lỗi rồi', 'only jpg & png file supported');
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});


module.exports = upload;