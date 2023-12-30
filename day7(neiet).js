'use strict';


//pareizaa atbilde ir: 252137472



let strings = `33332 1
2AAAA 1
77888 1
77788 1`;

let totalSum = 0;

function start(){
    let handBid = strings.split("\n");

    let sortedHands = [];


    handBid.forEach(handAndBid =>{
        let hand = handAndBid.split(" ")[0];
        let bid = JSON.parse(handAndBid.split(" ")[1]);
        let numValueForHand =  hand.split("").map(card=>{
            return(changeLetterIntoCorrectNum(card));
        });
        //numValueForHand.sort(function(a, b) {return b-a});
    

        let onePair = false;
        let twoPairs = false;
        let threeCards = false;
        let fullHouse = false;
        let fourCards = false;
        let fiveCards = false;


        for(let i = 0; i <= 14; i++){
            let equalCardsInDeckAmount = numValueForHand.filter(card =>{
                return card == i;
            }).length;

            if(equalCardsInDeckAmount >= 2  && onePair == true){
                twoPairs = true;
            }

            if(equalCardsInDeckAmount >= 2){
                onePair = true;
            }

            if(equalCardsInDeckAmount >= 3 && onePair == true){
                fullHouse = true;
            }

            if(equalCardsInDeckAmount >= 3){
                threeCards = true;
            }

            if(equalCardsInDeckAmount >= 4){
                fourCards = true;
            }

            if(equalCardsInDeckAmount >= 5){
                fiveCards = true;
            }
        }

        let highestNumValForSorting = "";
        for(let k = 0;k<numValueForHand.length;k++){
            highestNumValForSorting += numValueForHand[k].toString().padStart(2,"0");
        }


        //iedod pareizaas veertiibas saliek SMUKAA MASIIVAA 
        if(fiveCards){
            sortedHands.push({hand:hand,combination:"5", handVal:7, highestCardTotal:highestNumValForSorting, handBid:bid})
        }else{
            if(fourCards){
                sortedHands.push({hand:hand,combination:"4", handVal:6, highestCardTotal:highestNumValForSorting, handBid:bid});
            }else{
                if(fullHouse){
                    sortedHands.push({hand:hand,combination:"fh", handVal:5, highestCardTotal:highestNumValForSorting, handBid:bid});
                }else{
                    if(threeCards){
                        sortedHands.push({hand:hand,combination:"3", handVal:4, highestCardTotal:highestNumValForSorting, handBid:bid});
                    }else{
                        if(twoPairs){
                            sortedHands.push({hand:hand,combination:"2p",  handVal:3, highestCardTotal:highestNumValForSorting, handBid:bid});
                        }else{
                            if(onePair){
                                sortedHands.push({hand:hand,combination:"1p", handVal:2, highestCardTotal:highestNumValForSorting, handBid:bid});
                            }else{
                                sortedHands.push({hand:hand,combination:"sC", handVal:1, highestCardTotal:highestNumValForSorting, handBid:bid});
                            }
                        }
                    }
                }
            }
        }
    });


    

    sortedHands.sort(function(a, b) {
        return (a.handVal - b.handVal) || (a.highestCardTotal > b.highestCardTotal ? 1 : -1);
    });

    console.log(sortedHands);

    for(let i=1; i <= sortedHands.length;i++){
        let currentBet = sortedHands[i-1];
        totalSum += i*currentBet.handBid;
        //console.log(totalSum);
    }


    console.log(totalSum);


    
}


function changeLetterIntoCorrectNum(letter){
    //A, K, Q, J, T
    if(letter == "T"){
        return 10;
    }else{
        if(letter == "J"){
            return 11;
        }
        else{
            if(letter == "Q"){
                return 12;
            }else{
                if(letter == "K"){
                    return 13;
                }else{
                    if(letter == "A"){
                        return 14;
                    }else{
                        return JSON.parse(letter);
                    }
                }
            }
        }
    }

}
