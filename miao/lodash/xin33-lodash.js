
var xin33 = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
  chunk:function(ary , size){
    var result = []
    while(ary.length){
      result.concat(ary.splice(0 ,size))
    }
    return result
  },
  difference:function(ary , values){
    return ary.filter(it => values.indexOf(it) == -1)
  },
  
}