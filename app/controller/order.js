'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  // 下单接口
  async save() {
    const {ctx} = this
    const params = this.ctx.request.body
    params.status = 1
    params.userId = ctx.userId
  // console.log('params========',params)
    const good = await this.app.model.Goods.findOne({where:{id: params.goodId}})
    const goodSpec = await this.app.model.Goods.findOne({where:{id: params.goodSpecId}})
    const address = await this.app.model.UserAddress.findOne({where:{id: params.addressId}})
    const user = await this.app.model.User.findOne({where:{id:params.userId}})

    var data = {
      userId : params.userId,
      userName: user.username,
      goodId: params.goodId,
      goodName: good.name,
      goodMarketPrice : good.marketPrice,
      goodSalePrice : good.salePrice,
      goodSpecId : params.goodSpecId,
      goodSpecName : goodSpec.name,
      addressId: address.id,
      linkMan : address.name,
      linkPhone : address.tel,
      linkAddress : address.province+address.city+address.county+address.township+address.addressDetail,
      goodsTotalQty :params.goodsTotalQty,
      status: 1
    }

    const result = await this.app.model.Orders.create(data)
    ctx.success(result)
  }
  //确认收货
  async confirm(){
    const {ctx} = this
    const id = this.ctx.params.id
    await this.app.model.Orders.update({status: 3},{where:{id}})
    ctx.success(id)
  }
  //取消订单
  async cancel(){
    const {ctx} = this
    const id = this.ctx.params.id
    await this.app.model.Orders.update({status: 4},{where:{id}})
    ctx.success(id)
  }

  async list() {
    const { ctx } = this;
    const orderslist = await this.app.model.Orders.findAll()
    if(orderslist){
      return ctx.success(orderslist)
    }
    ctx.fail("暂无数据")
  }
  
  //后台
  //订单列表
  async orderslist(){
    const { ctx } = this;
    const orderslist = await this.app.model.Orders.findAll()
    if(orderslist){
      return ctx.success(orderslist)
    }
    ctx.fail("暂无数据")
  }
  // 发货接口
  async send() {
    const {ctx} = this
    const id = this.ctx.params.id
    await this.app.model.Orders.update({status: 2},{where:{id}})
    ctx.success(id)
  }
}

module.exports = OrderController;
