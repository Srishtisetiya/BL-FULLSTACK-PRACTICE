// part a - subarray sum equals k 

function subarraySum(nums, k) {
    const prefixCount = new Map();
    prefixCount.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (const num of nums) {
        prefixSum += num;

        const required = prefixSum - k;

        if (prefixCount.has(required)) {
            count += prefixCount.get(required);
        }

        prefixCount.set(
            prefixSum,
            (prefixCount.get(prefixSum) || 0) + 1
        );
    }

    return count;
}

console.log(subarraySum([1, 1, 1], 2));


// part b - unstructured logs 
function parseLog(line) {
    const parts = line.trim().split(/\s+/);

    if (parts.length === 0 || !parts[0]) {
        return null;
    }

    const log = {
        timestamp: parts[0]
    };

    for (let i = 1; i < parts.length; i++) {
        const [key, ...valueParts] = parts[i].split("=");

        if (!key || valueParts.length === 0) {
            continue;
        }

        log[key] = valueParts.join("=");
    }

    return log;
}

function buildUserActions(lines) {
    const userActions = new Map();

    for (const line of lines) {
        const log = parseLog(line);

        if (!log?.user || !log?.action) {
            continue;
        }

        if (!userActions.has(log.user)) {
            userActions.set(log.user, []);
        }

        userActions.get(log.user).push(log.action);
    }

    return userActions;
}

const logs = [
    "2024-01-01T10:00 user=alice action=login",
    "2024-01-01T10:05 user=bob action=purchase item=shoes",
    "2024-01-01T10:10 user=alice action=logout"
];

console.log(buildUserActions(logs));

// I would decide based on whether the malformed record is recoverable. 
// For batch log processing, I would usually log the malformed record and 
// skip it so one bad record doesn't stop the entire pipeline. For a strict
//  API contract, I might throw an error instead.