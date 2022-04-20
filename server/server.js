const express = require('express');
const app = express();
const multer = require('multer');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const cors = require('cors');
app.use(cors());
const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Setup port
PORT = 4000 || process.env.PORT

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+'-'+file.originalname);
    }
})

var upload = multer({storage: storage}).single('file')


app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
    //res.json(req.body);
    dict = req.body;
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
