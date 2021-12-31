module.exports = function(){
    return async function auth(ctx,next) {
        if(!ctx.userId){
            ctx.fail('未登录',401)
            return false;
        }
        await next()
        return true

    }
};

  