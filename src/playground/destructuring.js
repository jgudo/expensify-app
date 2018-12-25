const book = {
    title: 'Ego is an enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
            //: alias or alternate name
            //= default value if property didnt exist
const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);



const coffee = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [order , ,medium] = coffee;

console.log(`A cup of ${order} costs ${medium}`);