'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async list() {
    const { ctx } = this;
    const goodlist = await this.app.model.Goods.findAll({
      include:[
        {
          model:this.app.model.GoodSpec,
          as: "specs"
        },
        // {
        //   model:this.app.model.Orders,
        //   as: "order"
        // }
      ]
    })
    if(goodlist){
      return ctx.success(goodlist)
    }
    ctx.fail("暂无数据")
  }

  async detail(){
    const {ctx} = this;
    const id = this.ctx.params.id
    const good_detail = await this.app.model.Goods.findByPk(parseInt(id))
    ctx.success(good_detail)
  }

  //后台
  async adminGoodList(){
    const { ctx } = this;
    const adminGoodList = await this.app.model.Goods.findAll()
    if(adminGoodList){
      return ctx.success(adminGoodList)
    }
    ctx.fail("暂无数据")
  }
  async addGood(){
    const {ctx} = this;
    const params = this.ctx.request.body
    const result = await this.app.model.Goods.create(params)
    if(params.specs &&params.specs.length){
      params.specs.map(a=>{
        a.goodId = result.id
      })
    }
    await this.app.model.GoodSpec.bulkCreate(params.specs)
    ctx.success(result)
  }
  async updateGood(){
    const {ctx} =this;
    const id = ctx.params.id;
    const body = ctx.request.body
    const data = await this.app.model.Goods.findByPk(id)
    if(data){
      const result = await data.update(body)
      ctx.success(result)
    }
  }
  async deleteGood(){
    const {ctx} =this;
    const id = ctx.params.id
    const data = await this.app.model.Goods.findByPk(id)
    if(data){
      const result = await data.destroy()
      ctx.success(result)
    }
  }

}

module.exports = GoodsController;
