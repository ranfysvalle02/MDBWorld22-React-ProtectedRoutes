// This function is the endpoint's request handler.
exports = async function({ query, headers, body}, response) {
    let votes = context.services.get("mongodb-atlas").db("mdbw").collection("votes");
    let allVotes = await votes.aggregate([
      {$lookup:
        {
          from: 'custom_data',
          localField: 'email',
          foreignField: 'email',
          as: 'cd'
        }
      }  
    ]).toArray();
    
    return allVotes;
};
