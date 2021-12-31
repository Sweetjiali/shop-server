'use strict';

const Controller = require('egg').Controller;

class OrdersController extends Controller {
  async addAddress() {
    const {ctx} = this;
    const params = this.ctx.request.body
    const result = await this.app.model.UserAddress.create(params)
    ctx.success(result)
  }
  async addressList() {
    const { ctx } = this;
    const addressList = await this.app.model.UserAddress.findAll()
    if(addressList){
      return ctx.success(addressList)
    }
    ctx.fail("暂无数据")
  }
  async updateAddress(){
    const {ctx} =this;
    const id = this.ctx.params.id;
    const body = ctx.request.body
    const data = await this.app.model.UserAddress.findByPk(id)
    if(!data){
      return ctx.fail('该用户不存在')
    }
    const result = await data.update(body)
    ctx.success(result)
  }
  async deleteAddress(){
    const {ctx} =this;
    const id = ctx.params.id
    const data = await this.app.model.UserAddress.findByPk(id)
    if(data){
      const result = await data.destroy()
      ctx.success(result)
    }
  }
}

module.exports = OrdersController;
