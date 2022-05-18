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
    },
    {$project:{email:1,cd:1,voters:1,voters_count: {$size: { "$ifNull": [ "$voters", [] ] } } }},
    {$sort:{voters_count:1}}
  ]).toArray();
  
  return allVotes;
};
