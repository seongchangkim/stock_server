const express = require('express');
var router = express.Router();

const { User, Auth } = require("../models");
const multar = require('multer');
const uploadPath = './public/profile_upload/';
const upload = multar({ dest: uploadPath });

// 관리자 페이지 회원 목록
router.get("/users/list", async (req, res) => {
    try {
        const startIndex = (req.query.page - 1) * 10;
        const endIndex = req.query.page * 10;
        var dataList = await User.findAll({ 
            include: Auth,
            offset: startIndex, 
            limit: endIndex, 
            order: [[
                'createdAt', 'DESC'
            ]]}
        );
        var userList = [];
        
        for(var data of dataList){
            userList.push(data.dataValues); 
        }
    
        const getTotalCount = await User.count();

        const totalPage = Math.ceil(getTotalCount/10.0);
        
        return res.status(200).send({
            success: true,
            userList: userList,
            totalPage: totalPage
        });
    } catch (err) {
        return res.json({
            success: false,
            err,
        });
    }
});

// 관리자 페이지 회원 상세보기
router.get("/user/detail", async (req, res) => {
    try {
        var data = await User.findOne({where: { id: req.query.id }, include: Auth });
        
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

// 관리자 페이지 회원 수정
router.patch("/user/edit", upload.single('profile_image') ,async (req, res) => {
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
        }).then(async (result) => {
            await Auth.update({
                role: req.body.role,
                updateAt : today,
            },{ where: {
                auth_id: req.body.id
            }
            })
        });

        return res.status(200).send({
            success: true,
        });
    } catch (err) {
        return res.json({
            success: false,
            err,
        });
    }
});

// 관리자 페이지 회원 삭제 및 회원 탈퇴
router.delete("/user/leave", async (req, res) => {
    try {
        if(typeof req.body.ids === 'string'){
            var id = req.body.ids.slice(1, req.body.ids.indexOf(']'));

            await User.destroy({ 
                where: { 
                    id: id
                }
            }).then(async (result) => {
                await Auth.destroy({ 
                    where: {
                        auth_id: id
                    }
                });
            });
        }else{
            var ids = `${req.body.ids}`.split(',');

            ids.forEach(async (id) => {
                await User.destroy({ 
                        where: { 
                            id: id
                        }
                    }).then(async (result) => {
                        await Auth.destroy({ 
                            where: {
                                auth_id: id
                            }
                        });
                    });
            });
        }
    
        return res.status(200).send({
            success: true,
        });
    } catch (err) {
        return res.json({
            success: false,
            err,
        });
    }
});

module.exports = router;

