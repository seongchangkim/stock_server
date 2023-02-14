const { User, Auth } = require("../models");

let auth = async (req, res, next) => {
  console.log("cookie : ", req.cookies.x_auth);

  // console.log(`token : ${token}`);

  let token = "";
  if (req.cookies.x_auth != undefined) {
    token = req.cookies.x_auth;
  }else{
    return res.json({
      isAuth: false
    });
  }

  try {
    await User.findOne({
      where: { token: token },
      include: Auth,
    }).then((user) => {
      console.log(`user : ${user}`);
      if (!user) {
        return res.json({
          success: false,
          isAuth: false,
        });
      }

      req.token = token;
      req.user = user;
      req.auth = user["Auth"];
      next();
    });
  } catch (e) {
    console.log(`e : ${e}`);
  }
};

module.exports = { auth };
