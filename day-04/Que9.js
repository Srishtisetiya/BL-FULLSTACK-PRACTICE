// Q9. WeakSet — Object Tracking 

const visitedNodes = new WeakSet();

function processNode(node) {
    if (visitedNodes.has(node)) {
        return "Already processed";
    }

    visitedNodes.add(node);
    return "Processing";
}

let node = {};
console.log(processNode(node)); 
console.log(processNode(node)); 

// WeakSet is more appropriate than Set for this use case because no memory leaks , 
// objects are autoremoves when o reference exist . 