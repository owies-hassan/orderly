
const router=require('express').Router()
const nodemailer = require("nodemailer");


router.post("/",  (req, res) => {
    try {
        const { email, subject} = req.body

        let transpoter = nodemailer.createTransport({
            service:'gmail',

            auth: {
                user:  process.env.USER, // email
                pass:process.env.PASSWORD, //password
            },
        });

        const options = {
            from: `${email}`,
            to: process.env.USER,
            subject: `${subject}`,


        };

        transpoter.sendMail(options, (error, info) => {
            if (error) {

            } else {

            }
        })



         res.status(200).json({msg: "Your message sent successfully"});
    } catch (error) {

    }
});

module.exports=router;