const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const _user = sequelize.define(
    "User",
    {
      // 사용자 id
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      // 이메일
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      // 비밀번호
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      // 이름
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      // 전화번호
      tel: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
      // 프로필 이미지 업로드 경로
      profile_image: DataTypes.STRING,
      // 로그인 토큰
      token: DataTypes.STRING,
    },
    {
      // 문자셋 
      charset: "utf8",
      collate: "utf8_general_ci",
      // 테이블 이름
      tableName: "user",
      // createdAt, updatedAt 테이블 컬럼 설정.
      timestamps: true,
      // deleteAt 테이블 컬럼 설정
      paranoid: true,
    }
  );

  // 외래키 설정
  _user.associate = function (models) {
    // Auth 테이블과 1:1 관계
    models.User.hasOne(models.Auth, {
      foreignKey: "auth_id",
      onDelete: "cascade",
    });
    // Port 테이블과 1:N 관계
    models.User.hasMany(models.Port, {
      foreignKey: "user_port_id",
      onDelete: "cascade",
    });
  };

  _user.generateBcrypt = function (password) {
    return bcrypt.hashSync(password, saltRounds);
  }
  
  _user.compareBcrypt = function (password, hash){
    return bcrypt.compareSync(password, hash);
  }

  return _user;
};
