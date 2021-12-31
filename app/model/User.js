module.exports = app => {
    const { STRING, INTEGER, BOOLEAN } = app.Sequelize;
  
    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: STRING, unique: true, allowNull: false }, // 用户名
        email: { type: STRING }, // 邮箱
        password: { type: STRING, allowNull: false }, // 密码
        phone:{type: STRING},//手机号
        sex: { type: INTEGER, defaultValue: 1 }, // 用户性别：1男性, 2女性, 0未知
        avatarId: INTEGER, //头像
        isAdmin : BOOLEAN ,// 是否是管理员
    },{freezeTableName: true});
    User.associate = function(){
       // app.model.User.hasMany(app.model.Orders,{foreignKey:'userID',targetKey:'id',as:'orders'})
    }
    return User;
};