module.exports = {
    success(data) {
      this.status=200
      this.body = {
          status: 200,
          result: data,
          timestamp: Date.now()
      }
    },
    fail(msg,status=400){
        this.status = status
        this.body = {
          message: msg,
          status: status,
          timestamp: Date.now()
      }
    },
    get userId(){
        return this.session.userId
    }
  };