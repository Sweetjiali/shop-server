'use strict';
const md5 = require('md5')
const Controller = require('egg').Controller;

class UserController extends Controller {
  // 前台
  async regist() {
    const {ctx} = this
    const params = this.ctx.request.body

    // 参数校验  放在后面考虑

    // 用户名不能重复
    const exsitData = await this.app.model.User.findOne({where:{username: params.username}})
    if(exsitData){
      return ctx.fail("用户已存在")
    }
    // 密码加密
    params.password = md5(params.password)

    const result = await this.app.model.User.create(params)

    ctx.success(result)
  }

  async login() {
    const {ctx} = this
    const params = this.ctx.request.body

    const exsitData = await this.app.model.User.findOne({where:{username: params.username,password:params.password}})
    if(!exsitData){
      return ctx.fail("用户不存在")
    }
    ctx.session.userId = exsitData.id //拿到登录的用户id
    ctx.success(exsitData)
  }

  // 后台
  async info(){
    const {ctx} = this;
    const id = ctx.userId
    const result = await this.app.model.User.findByPk(id)
    if(result){
      return ctx.success(result)
    }
  }
  async list(){
    const {ctx} = this;
    const result = await this.app.model.User.findAll()
    if(result){
      return ctx.success(result)
    }
  }





  // // 查询用户列表 index
  // async index() {   //异步方法防止请求阻塞
  //   const {ctx , service} = this;
  //   // const users = await this.app.model.User.findAll()
  //   // ctx.body = {
  //   //     status: 200,
  //   //     result: users
  //   // }
  // const data = await service.user.getUser();
  // ctx.body={
  //   status:200,
  //   result:{data}
  // }
  // }

  // async getId(){
  //   const {ctx,service} = this;
  //   const data = await service.user.getId(3)
  //   ctx.body = data
  // }

  // //连接数据库后的操作 创建数据
  // async create() {
  //   const {ctx , app} = this;
  //   const data = ctx.request.body 
  //   const row = {  //row限制传入的参数
  //     name:data.name,
  //     age:data.age
  //   };
  //   const res = await app.mysql.insert('users',row);
  //   ctx.body = res;
  // }
  //查询
  // async index() {
  //   const{ctx,app} = this;
  //   const res = await app.mysql.select('users'); //users是数据库名称
  //   ctx.body = res;
  // }

}


module.exports = UserController;
