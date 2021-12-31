'use strict';

const { Controller } = require("egg");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  // 前台
  router.post('/api/user/regist', controller.user.regist);
  router.post('/api/user/login',controller.user.login);
  router.get('/api/good/list',controller.good.list)
  router.get('/api/good/detail/:id',controller.good.detail)
  router.post('/api/order/save',app.middleware.auth(),controller.order.save)
  router.get('/api/order/list',controller.order.list)
  router.post('/api/order/confirm/:id',controller.order.confirm)
  router.post('/api/order/cancel/:id',controller.order.cancel)
  router.post('/api/my/addAddress',controller.my.addAddress)
  router.get('/api/my/addressList',controller.my.addressList)
  router.put('/api/my/updateAddress/:id',controller.my.updateAddress) 
  router.delete('/api/my/deleteAddress/:id',controller.my.deleteAddress)
  
  //后台
  router.get('/api/user/info',controller.user.info)
  router.get('/api/user/list',controller.user.list)
  router.get('/api/admin/good/list',controller.good.adminGoodList)
  router.post('/api/admin/good/save',controller.good.addGood)
  router.post('/api/admin/good/update/:id',controller.good.updateGood)
  router.delete('/api/admin/good/delete/:id',controller.good.deleteGood)
  router.get('/api/admin/order/list',controller.order.orderslist)
  router.post('/api/admin/order/send/:id',controller.order.send)



  // router.get('/', controller.home.index);  //路由映射 1.直接指定一个具体的controller  home里的index方法
  // // router.get('/test', 'test.test')   //2.字符串形式
  // // router.redirect('/' , '/test' , 302)//路由内部重定向
};
