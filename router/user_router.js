const express = require('express');
var router = express.Router();

const { v4: uuidv4 } = require("uuid");
const multar = require('multer');
const uploadPath = '../public/profile_upload/';
const upload = multar({ dest: uploadPath });
const jwt = require("jsonwebtoken");
const { User, Auth } = require("../models");
const { auth } = require("../middleware/auth");
const uuidToHex = require("uuid-to-hex");

// 회원가입
router.post("/register", async function (req, res) {

    const hash = User.generateBcrypt(req.body.password);

    try {
        const user = await User.create({
            id: uuidv4(),
            email: req.body.email,
            password: hash,
            name: req.body.name,
            tel: req.body.tel,
        });

        await Auth.create({ auth_id: user.id, role: 0 })
            .catch((err) => {
                return res.json({ success: false, err });
            });

        return res.status(200).json({
            success: true,
        });
    } catch (err) {
        return res.json({ success: false, err });
    }
});

// 로그인
router.post("/login", async function (req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user == null) {
        return res.json({
            loginSuccess: false,
            message: "제공된 이메일에 해당하는 유저가 없습니다.",
        });
    }

    let isMatch = User.compareBcrypt(req.body.password, user.password);

    if (!isMatch) {
        return res.json({
            loginSuccess: false,
            message: "비밀번호가 틀렸습니다.",
        });
    }

    try {
        const token = jwt.sign({ token: uuidToHex(user.id) }, "secretToken", {
            expiresIn: "1d",
        });

        // console.log(`token : ${token}`);
        await User.update({ token: token }, { where: { id: user.id } });

        // console.log(`token : ${token}`);

        res
            .cookie("x_auth", token, {
                httpOnly: false,
                secure: true,
                sameSite: "none",
            })
            .status(200)
            .json({
                loginSuccess: true,
                xAuthToken: token,
                userId: user.id,
            });
    } catch (err) {
        // console.log(`err : ${err}`);
        return res.status(400).send(err);
    }
    console.log("login end!!");
});

// 로그인 확인 여부
router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        id: req.user.id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        tel: req.user.tel,
        profile_image: req.user.profile_image,
        role: req.auth.role,
    });
});

// 로그아웃
router.post("/logout", async (req, res) => {
    try {
        await User.update({ token: "" }, { where: { id: req.body.userId } });

        res.clearCookie("x_auth", {
            httpOnly: false,
            secure: true,
            sameSite: "none",
        });
        return res.end();
        
    } catch (err) {
        return res.json({
            success: false,
            err,
        });
    }
});

// 회원 프로필 상세보기
router.get("/profile/show", async (req, res) => {
    try {
        var data = await User.findOne({where: { id: req.query.id }});

        return res.status(200).send({
            success: true,
            user: data.dataValues
        });
    } catch (err) {
        return res.json({
            success: false,
            err,
        });
    }
});

// 회원 프로필 수정
router.patch("/profile/edit", upload.single('profile_image') ,async (req, res) => {
    try {
        let today = new Date(); 
        
        await User.update({ 
            profile_image: req.body.profile_image,
            name : req.body.name,
            tel : req.body.tel,
            updateAt : today,
            },{ where: { 
                id: req.body.id
            }
        });

        const user = await User.findOne({ where: { id: req.body.id } });

        return res.status(200).send({
            success: true,
            user: user
        });
    } catch (err) {
        return res.json({
            success: false,
            err,
        });
    }
});

module.exports = router;