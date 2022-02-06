let masEmailCheck = ['user1@mail.com', 'user2@mail.com', 'user3@mail.com', 'UsEr12332@mail.com', 'user4@mail.com', 'DedIsaid12345@mail.com', 'user5@mail.com', 'user6@mail.com', 'user7@mail.com', 'NotDifinded@mail.com', 'user8@mail.com', 'user9@mail.com', 'user9@mail.com', 'user10@mail.com', 'user11@mail.com']
let masEmailBlockList = ['UsEr12332@mail.com', 'DedIsaid12345@mail.com', 'NotDifinded@mail.com']


function Filter(masEmailCheck, masEmailBlockList) {
    return masEmailCheck.filter((mail) => !masEmailBlockList.includes(mail));
  }
  console.log(Filter(masEmailCheck, masEmailBlockList));
  
