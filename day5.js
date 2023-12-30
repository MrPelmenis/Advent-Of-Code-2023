'use strict';


//pareizaa atbilde ir: 252137472



let strings = `Time:        49     97     94     94
Distance:   263   1532   1378   1851`;


function start(){
    let data = strings.split("\n");

    let times = data[0].substring(5).trim();
    times=times.split("").filter(time => time != " ").join("");

    let recordDistances = data[1].substring(9).trim();
    recordDistances=recordDistances.split("").filter(recordDistance => recordDistance != " ").join("");

    times = JSON.parse(times);
    recordDistances = JSON.parse(recordDistances);

    times = [times];
    recordDistances = [recordDistances];

    let totalSum = 1;
    let waysToBeatInRaces = [];

    for(let i=0;i<times.length;i++){
        let distanceRecord = recordDistances[i];
        let allowedTime = times[i];

        let waysToBeat = 0;
        for(let holdTime = 0; holdTime <= allowedTime; holdTime++){
            let distance = (allowedTime - holdTime) * holdTime;
            if(distance > distanceRecord){
                waysToBeat++;
            }   
        }
        waysToBeatInRaces.push(waysToBeat);
    }

    for(let i =0;i<waysToBeatInRaces.length;i++){
        totalSum *= waysToBeatInRaces[i];
    }

    console.log(totalSum);
}