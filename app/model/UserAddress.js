module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DOUBLE } = app.Sequelize;
  
    const UserAddress = app.model.define(
      "user_address",
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        province: { type: STRING, allowNull: false }, // 省
        city: { type: STRING }, // 市
        county: { type: STRING }, // 区县
        township: STRING, // 街道
        addressDetail: STRING, //详细地址
        name: STRING, //收货人姓名
        tel: STRING, //收货人电话
        isDefault: BOOLEAN, //是否设为默认地址
        // longitude: DOUBLE, 
        // latitude: DOUBLE,
        areaCode: STRING,//地区编码,前端组件需要
        postalCode: STRING,//邮政编码
        userId: INTEGER, //用户id
      },
      { freezeTableName: true }
    );
    return UserAddress;
  };