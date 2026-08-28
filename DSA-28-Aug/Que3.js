// Q3 — Serialize / Deserialize

function serialize(root) {

    const result = [];

    function dfs(node) {
        if (node === null) {
            result.push("null");
            return;
        }

        result.push(String(node.value));

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return result.join(",");
}

// Deserialize
function deserialize(data) {
    const values = data.split(",");
    let index = 0;

    function dfs() {
        const value = values[index++];
        if (value === "null") {
            return null;
        }
        const node = new TreeNode(Number(value));

        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();
}

// part b - Diameter of Binary Tree
function diameterOfBinaryTree(root) {
    let diameter = 0;
    function height(node) {
        if (node === null) {
            return 0;
        }
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        diameter = Math.max(
            diameter,
            leftHeight + rightHeight
        );
        return 1 + Math.max(leftHeight, rightHeight);
    }
    height(root);

    return diameter;
}

// use one postorder DFS because the diameter through a node depends on the heights
// of its left and right subtrees. Returning the height while updating a global maximum 
// lets me compute both pieces of information in the same traversal, avoiding repeated 
// subtree-height calculations."
