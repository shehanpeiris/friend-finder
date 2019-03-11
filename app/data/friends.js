// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name":"Jack Donaghy",
    "photo":"https://www.marketing-mojo.com/wp-content/uploads/2013/02/Jack-Donaghy.jpg",
    "scores":[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    "name":"Liz Lemon",
    "photo":"http://lukeroxas.com/wp-content/uploads/2014/09/Liz-Lemon.jpg",
    "scores":[3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  },
  {
    "name":"Tracy Jordan",
    "photo":"https://pbs.twimg.com/profile_images/202168628/2894184_400x400.jpg",
    "scores":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    "name":"Jenna Maroney",
    "photo":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-30-rock-jane-krakowski.jpg",
    "scores":[1, 3, 5, 4, 2, 1, 3, 5, 4, 2]
  },
];
  
// Export the data so it can be accessed by rest of the app's files.
module.exports = friendsArray;