
var xin33 = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
  chunk:function(ary , size){
    var result = []
    while(ary.length){
      result.push(ary.splice(0 ,size))
    }
    return result
  },
  difference:function(ary , ...values){
    var value = values.reduce((value , cur) => {return value.concat(cur)},[])
    return ary.filter(it => value.indexOf(it) == -1)
  },
  drop:function(ary, n = 1){
    ary.splice(0 , n)
    return ary
  },
  dropRight:function(ary , n = 1){
    var l = ary.length
    if(n > l)
      l = n
    ary.splice(l - n , n)
    return ary
  }

}
