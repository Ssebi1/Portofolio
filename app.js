const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 8080;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
require("dotenv").config();


app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port);

//Reading data from data.json

//Routes
app.get('/', (req, res) => {
    const language = req.query.lng;

    if (language === 'ro') {
        fs.readFile('data-ro.json', (error, data) => {
            if (error) throw error;
            let projects = JSON.parse(data);
            res.render('index-romanian', {
                language: 'ro',
                projects
            });
        });
    }
    else {
        fs.readFile('data-eng.json', (error, data) => {
            if (error) throw error;
            let projects = JSON.parse(data);
            res.render('index', {
                language: 'en',
                projects
            });
        });
    }

})






app.get('/project', (req, res) => {
    const id = req.query.id;
    const language = req.query.lng;
    if (language === 'en') {
        fs.readFile('data-eng.json', (error, data) => {
            if (error) throw error;
            let projects = JSON.parse(data);
            res.render('project',
                {
                    project: projects[id]
                }
            );
        });
    }
    else if (language === 'ro') {
        fs.readFile('data-ro.json', (error, data) => {
            if (error) throw error;
            let projects = JSON.parse(data);
            res.render('project',
                {
                    project: projects[id]
                }
            );
        });
    }


})



var transporter = nodemailer.createTransport({
    host: process.env.host,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.User,
        pass: process.env.Password
    }
});

app.post('/message', (req, res) => {
    const { email, subject, message } = req.body;
    var mailOptions = {
        from: email,
        to: 'sebidancau@yahoo.com',
        subject: subject,
        html: `From: ${email} <br>${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.render('messageConfirmation');
        }
    });

})


