import express from "express";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://DungenMaster:845@cluster0.y8l3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log('DB connection error:', err));


const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Nigga')
})

app.post('/auth/login', (req, res) => {
    console.log(req.body);

    if (req.body.email === 'test@test.ru') {
        const token = jwt.sign(
            {
                email: req.body.email,
                fullName: 'Лупа Залупа'
            },
            'secret123',
        );
    }

    res.json({
        success: true,
        token,
    });
});

app.listen(3001, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');

})