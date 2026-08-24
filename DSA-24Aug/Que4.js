// Que4.  Merge Intervals + Design Question

// Part A: Given an array of intervals where intervals[i] = [start, end], merge all
// overlapping intervals.
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,3] -> merges with [2,6] -> [1,6], [8,10], [15,18]]

let interval = [[1,3],[2,6],[8,10],[15,18]];

function mergeInterval(interval){
    interval.sort((a ,b)=> a[0] - b[0]);
    let res  = [interval[0]];
    for(let i = 1;i<interval.length;i++){
        let curr = interval[i];
        let last = res[res.length-1];

        if(curr[0]<= last[1]){
            last[1] = Math.max(last[1] ,curr[1]);
        }else{
            res.push(curr);
        }
    }
    return res;

}
let ans = mergeInterval(interval);
console.log(ans);


// Part B - Part B (Design + JS Object Fundamentals): Model a Meeting Room Scheduler usinga JavaScript class. 

class Meeting{
    constructor(title , start , end){
        this.title = title;
        this.start = start;
        this.end = end;
    }
    overlaps(otherMeeting){
        return this.start < otherMeeting.end &&
               otherMeeting.start < this.end;
    }
    static fromArray([title, start, end]) {
        return new Meeting(title, start, end);
    }
}

const meeting1 = new Meeting("Standup", 9, 9.5);
const meeting2 = new Meeting("Interview", 9.25, 10);
console.log(meeting1.overlaps(meeting2));

// this inside overlaps refer to meeting1 because overlaps is called as a method of meeting1.
// this === meeting1 

// const fn = meeting1.overlaps;
// fn(meeting2);

// overlaps is an instance function and we have taken that out of the object . 
// now fn(meeting2) is normal function call . 
// class methods are strict ode functions . so this === undefined . so this.start can cause error . 

const m = new Meeting("Standup", 9, 9.5);
console.log(m.overlaps === Meeting.prototype.overlaps);
// true bcz overlaps is stored on Meeting.prototype . 

// when new Meeting() is used  a new obj is created . its prototype is linked to Meeting.prototype .
// this is bound to new obj . constructor runs and intialize the properties. new obj is returned 


// 3. Instance methods are stored on the prototype to save memory.
// With 10,000 Meeting objects, only one shared `overlaps` function exists instead of creating 10,000 copies of the same function.