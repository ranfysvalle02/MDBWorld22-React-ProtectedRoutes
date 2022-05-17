exports = async function(arg){
  var collection = context.services.get("mongodb-atlas").db("mdbw").collection("votes");
  await collection.updateMany({ email: arg },{$addToSet:{"voters":context.user.id}},{upsert:true});
  return {arg: arg};
};