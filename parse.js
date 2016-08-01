

var errResult = {error:'Web address is erroneous, please reformat'};

var funcURL = function shortenurl(app,db,collection){

  app.get('/:first/*',function(req,res){
  var str1 = req.params.first;
  var str2 = req.params[0];

  var fullUrl = req.protocol + '://' + req.get('host'); // req.originalUrl
  //console.log(fullUrl)
  //console.log(req.get('host'));

if(str1 !== 'new'){
  return res.json({error:'Please check that you have used the correct syntax.'})
}

 var pattern = new RegExp(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/);

if(pattern.test(str2)){
    collection.findOneAndUpdate({"totalNum":{$exists:true}},{$inc:{"totalNum":1}},{projection:{"totalNum":true},returnNewDocument:true},function(err,doc){
      if(err){
        throw error;
      }

      collection.insertOne({number:doc.value.totalNum,url:str2})
      return res.send({original_url:str2, short_url:fullUrl+ '/'+ doc.value.totalNum});
  });
}
	else{
	return res.json(errResult);
		}
});
}

module.exports = funcURL;
