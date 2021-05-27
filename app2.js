
let button = document.createElement('button');
button.className = 'btn';
button.innerText = 'play';
document.body.appendChild(button);


button.addEventListener('click', function() {

    let friends = ['Dustin', 'Jacob', 'Brandon', 'Ginger', 'Ashley'];
    
    for (let i = 0; i < friends.length; i++) {
        let friendDiv = document.createElement('div');
        friendDiv.className = 'friend';
        let friendsHeader = document.createElement('h3');
        friendsHeader.innerText = friends[i];

        for (let j = 99; j > 1; j--) {
            
            if (j > 2) {
                let paragraph = document.createElement('p');
                paragraph.innerText = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
                friendsHeader.appendChild(paragraph);
            } else if (j == 2) {
                let paragraph = document.createElement('p');
                paragraph.innerText = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file');
                friendsHeader.appendChild(paragraph);
            } else if (j == 2) {
                let paragraph = document.createElement('p');
                paragraph.innerText = (j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
                friendsHeader.appendChild(paragraph);
            };
            friendDiv.appendChild(friendsHeader);
            document.body.appendChild(friendDiv);
            
        }
    };
})

// let lines = document.createElement('p');

    // for(let i = 0; i < friends.length; i++) {

    //     let friendHeaderText = document.createTextNode(friends[i]);
    //     friendHeader.append(friendHeaderText);
    //     friendDiv.appendChild(friendHeader);
    //     document.body.appendChild(friendDiv);
    //     friendHeader.appendChild(lines);
    // };
    //     for( let i = 0; i < friends.length; ++i){
    //         for( let j = 99; j >= 1; j--){
    //             if(j > 2) {
    //                 console.log(j + ' lines of code in the file, ' + j + ' lines of code;' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
    //             } else if(j == 2) {
    //                 console.log(j + ' lines of code in the file, ' + j + ' lines of code;' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file');
    //             } else if(j = 1) {
    //                 console.log(j + ' line of code in the file, ' + j + ' line of code;' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
    //             }
    //         }
    //     }
    // })
