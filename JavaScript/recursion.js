//Example : 1
function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

//Example: 2
function powerOf(val, pow){
 return pow === 1 ? val : val * powerOf(val, pow - 1);
}

//Example: 3
const mySelf = {
    name: "Kishan",
    friends: [
               {
                  name: "Arpit",
                  friends: [
                      {
                        name: "Dhoni",
                        friends: [
                            {
                                name: "Rajat",
                                friends: [
                                  {
                                    name: "Babu"
                                  }

                               ]
                            }

                         ]
                       }    
                  ]
                },
                {
                  name: "Rahul",
                  friends: [
                     {
                       name: "Rakhi Sawant"
                     }
                  ]
                },
                {
                  name: "Anand"
                }
    ]
}

function getFriends(person){
    let collectionOfFriends = [];

    if(!person.friends) return [];

    for(const friends of person.friends){
        collectionOfFriends.push(friends);
        collectionOfFriends.push(...getFriends(friends));
      }
    return collectionOfFriends;
}

console.log(getFriends(mySelf));