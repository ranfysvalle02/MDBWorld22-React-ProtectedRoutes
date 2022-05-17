exports = async function(arg1,arg2){
  var collection = context.services.get("mongodb-atlas").db("mdbw").collection("custom_data");
  await collection.updateMany({ user_id: context.user.id },{$set:{"email":arg1,"avatarURL":arg2}},{upsert:true});
  var votes = context.services.get("mongodb-atlas").db("mdbw").collection("votes");
  await votes.updateMany({ email: arg1 },{$set:{"voters":[]}},{upsert:true});
  return {arg: arg};
};