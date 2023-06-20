const { Port, Ratio } = require("../models");

const express = require('express');
var router = express.Router();

// 주식 포트폴리오 생성
router.post("/portfolio/create", async(req, res) => {

    const initialPrice = req.body.initialPrice * 1; 

    var portParams = {
      "initial_price": initialPrice,
      "user_port_id": req.body.userId,
      "title": req.body.title,
      "writer": req.body.writer,
      "stock1": req.body.stock[0],
      "stock2": req.body.stock[1],
      "stock3": req.body.stock[2],
      "stock4": req.body.stock[3],
      "stock5": req.body.stock[4],
      "stock6": req.body.stock[5],
      "stock7": req.body.stock[6],
      "stock8": req.body.stock[7],
      "stock9": req.body.stock[8],
      "stock10": req.body.stock[9],
    };
  
    var ratioParams = {
      "stock1_ratio": req.body.ratio[0],
      "stock2_ratio": req.body.ratio[1],
      "stock3_ratio": req.body.ratio[2],
      "stock4_ratio": req.body.ratio[3],
      "stock5_ratio": req.body.ratio[4],
      "stock6_ratio": req.body.ratio[5],
      "stock7_ratio": req.body.ratio[6],
      "stock8_ratio": req.body.ratio[7],
      "stock9_ratio": req.body.ratio[8],
      "stock10_ratio": req.body.ratio[9],
    };

    if(typeof req.body.stock === "string"){
      const stockStr = req.body.stock;
      const ratioStr = req.body.ratio;

      let stock = [];
      let ratio = [];
      // 앱 상
      if(stockStr.indexOf('[') > -1){
        stock = stockStr.slice(stockStr.indexOf('[')+1, stockStr.indexOf(']')).split(',');
        ratio = ratioStr.slice(ratioStr.indexOf('[')+1, ratioStr.indexOf(']')).split(',');
      }else{
        stock = stockStr.split(',');
        ratio = ratioStr.split(',');
      }
      
      for(let i = 0; i< ratio.length; i++){
        ratio[i] *= 1; 
      }

      for(var i = 0; i < stock.length ; i++){
        portParams[`stock${i+1}`] = stock[i].trim();
        ratioParams[`stock${i+1}_ratio`] = ratio[i];
      }
    }
  
    try{
      var port = await Port.create(portParams);
        
      if(port !== null){
        ratioParams["stock_ratio_id"] = port.port_index;
        await Ratio.create(ratioParams);
      }
  
      res.status(200).json({
        success: true,
      })
    }catch(e){
      res.json({
        success: false,
        message: "관리자에게 문의하세요!"
      });
    }
});

// 주식 포트폴리오 목록 가져오기
router.get("/portfolio/list", async (req, res) =>{
    const count = req.query.per === undefined ? 10 : req.query.per *1
    const startIndex = (req.query.page - 1) * count;
    const endIndex = req.query.page * count;
    try{
      var dataList = await Port.findAll({
        where: {
          user_port_id: req.query.id
        },
        offset: startIndex,
        limit: endIndex,
        order: [[
          'createdAt', 'DESC'
        ]]
      });
    
      var portList = [];

      // 데이터베이스에서 해당 id에 포함하는 자산 포트폴리오 총 갯수를 가져오기
      const getTotalCount = await Port.count({
        where: {
          user_port_id: req.query.id
        }
      });

      // 총 갯수를 10로 나누어서 총 페이지를 구함
      const totalPage = Math.ceil(getTotalCount/10.0);
    
      for(var data of dataList){
        portList.push(data.dataValues);
      }
  
      return res.status(200).json({
        success: true,
        portList : portList,
        totalPage : totalPage
      });
    }catch(e){
      return res.json({
        success: false
      })
    }
});

// 주식 포트폴리오 상세보기s
router.get("/portfolio/detail", async (req, res) =>{
  try{
    const portIndex = req.query.portIndex * 1;
    var data = await Port.findOne({
      where: {
        port_index: portIndex
      }, 
      include: Ratio
    });

    return res.status(200).json({
      success: true,
      portInfo : data.dataValues
    });
  }catch(e){
    return res.json({
      success: false
    })
  }
});

// 주식 포트폴리오 수정
router.patch("/portfolio/edit", async(req, res) => {

  const initialPrice = req.body.initialPrice * 1; 
  
  var portParams = {
    "initial_price": initialPrice,
    "title": req.body.title,
    "stock1": req.body.stock[0],
    "stock2": req.body.stock[1],
    "stock3": req.body.stock[2],
    "stock4": req.body.stock[3],
    "stock5": req.body.stock[4],
    "stock6": req.body.stock[5],
    "stock7": req.body.stock[6],
    "stock8": req.body.stock[7],
    "stock9": req.body.stock[8],
    "stock10": req.body.stock[9],
  };

  var ratioParams = {
    "stock1_ratio": req.body.ratio[0],
    "stock2_ratio": req.body.ratio[1],
    "stock3_ratio": req.body.ratio[2],
    "stock4_ratio": req.body.ratio[3],
    "stock5_ratio": req.body.ratio[4],
    "stock6_ratio": req.body.ratio[5],
    "stock7_ratio": req.body.ratio[6],
    "stock8_ratio": req.body.ratio[7],
    "stock9_ratio": req.body.ratio[8],
    "stock10_ratio": req.body.ratio[9],
  };

  if(typeof req.body.stock === "string"){
    const stockStr = req.body.stock;
    const ratioStr = req.body.ratio;

    let stock = [];
    let ratio = [];
    // 앱 상
    if(stockStr.indexOf('[') > -1){
      stock = stockStr.slice(stockStr.indexOf('[')+1, stockStr.indexOf(']')).split(',');
      ratio = ratioStr.slice(ratioStr.indexOf('[')+1, ratioStr.indexOf(']')).split(',');
    }else{
      stock = stockStr.split(',');
      ratio = ratioStr.split(',');
    }

    for(let i = 0; i< ratio.length; i++){
      ratio[i] *= 1; 
    }

    for(var i = 0; i < stock.length ; i++){
      portParams[`stock${i+1}`] = stock[i].trim();
      ratioParams[`stock${i+1}_ratio`] = ratio[i];
    }
  }

  try{
    await Port.update(portParams, { where : {port_index : req.body.portIndex}}).then(async (result) => {
      await Ratio.update(ratioParams, {where : { stock_ratio_id : req.body.portIndex}});
    });
      
    res.status(200).json({
      success: true,
    });
  }catch(e){
    res.json({
      success: false,
      message: "관리자에게 문의하세요!"
    });
  }
});

// 주식 포트폴리오 삭제
router.delete("/portfolio/delete", async (req, res) =>{

  try{
    await Port.destroy({
      where: {
        port_index: req.body.portIndex
      }
    }).then(async (result) => {
      Ratio.destroy({
        where: {
          stock_ratio_id : req.body.portIndex
        }
      })
    });

    return res.status(200).json({
      success: true,
    });
  }catch(e){
    return res.json({
      success: false
    })
  }
});

module.exports = router;