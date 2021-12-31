module.exports = app => {
    const { STRING, INTEGER,TEXT,DECIMAL } = app.Sequelize;
  
    const Good = app.model.define('goods', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: STRING, allowNull: false }, // 商品名称
        description: { type: STRING }, // 商品描述
        content: { type: TEXT }, // 商品描述
        salePrice: DECIMAL,  //售价，用于显示和排序
        marketPrice: DECIMAL,//市场价
        pic: INTEGER, // 图片
        categoryId: INTEGER, // 商品分类  
        sales: {type: INTEGER, defaultValue: 0}, // 销量，方便做排序
        status: { type: INTEGER, defaultValue: 1 }, //  状态：  1:上架 2：下架
        tags: STRING  //标签，逗号隔开的字符串
    },{freezeTableName: true});
    Good.associate = function(){
        app.model.Goods.hasMany(app.model.GoodSpec,{foreignKey:'goodId',targetKey: 'id',as:'specs'})
        // app.model.Goods.hasOne(app.model.Orders,{foreignKey:'goodID',targetKey: 'id',as:'order'})
    }
    return Good;
};