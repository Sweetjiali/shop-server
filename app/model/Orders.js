module.exports = app => {
    const { STRING, INTEGER,ENUM,DECIMAL } = app.Sequelize;
  
    const GoodOrder = app.model.define('order', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },//订单编号
        userId: INTEGER, //下单者用户id
        userName: STRING, //下单者用户名
        goodId: INTEGER,// 关联商品id
        goodName: { type: STRING, unique:true, allowNull: false }, // 商品名称
        goodMarketPrice : DECIMAL,//商品市场价
        goodSalePrice : DECIMAL,//商品售价
        goodSpecId:INTEGER, //商品规格id
        goodSpecName:STRING, //商品规格名称
        addressId:INTEGER,//地址id
        linkMan: STRING,//收货人
        linkPhone: STRING,//收货电话
        linkAddress: STRING,//收货地址：省市区街道+详细
        goodsTotalQty: DECIMAL,//商品总数量
        totalAmount:DECIMAL, //商品总价
        // status:  ENUM('ordered', 'paid', 'receiving', 'completed', 'canceled','closed'),//订单状态
        status:{ type: INTEGER, defaultValue: 1 }
    },{freezeTableName: true});
    return GoodOrder;
};