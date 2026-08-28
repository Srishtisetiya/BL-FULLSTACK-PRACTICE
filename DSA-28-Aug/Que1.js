// Inorder - recursive

function inorder(root) {
    const result = [];

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);
        result.push(node.value);
        dfs(node.right);
    }

    dfs(root);

    return result;
}

// preorder - recursive 
function preorder(root) {
    const result = [];

    function dfs(node) {
        if (node === null) return;

        result.push(node.value);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return result;
}

// postorder - recursive 
function postorder(root) {
    const result = [];

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.value);
    }

    dfs(root);

    return result;
}
// inorder 
function inorderIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.value);
        current = current.right;
    }

    return result;
}

// preorder
function preorderIterative(root) {
    if (root === null) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();

        result.push(node.value);

        if (node.right !== null) {
            stack.push(node.right);
        }

        if (node.left !== null) {
            stack.push(node.left);
        }
    }

    return result;
}

// postorder
function postorderIterative(root) {
    if (root === null) return [];

    const result = [];
    const stack1 = [root];
    const stack2 = [];
    while (stack1.length > 0) {
        const node = stack1.pop();

        stack2.push(node);

        if (node.left !== null) {
            stack1.push(node.left);
        }

        if (node.right !== null) {
            stack1.push(node.right);
        }
    }

    while (stack2.length > 0) {
        result.push(stack2.pop().value);
    }

    return result;
}

// levelOrder 

function levelOrder(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];
    let front = 0;

    while (front < queue.length) {
        const levelSize = queue.length - front;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue[front++];

            level.push(node.value);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(level);
    }

    return result;
}

// For serialization, I would commonly use preorder traversal with null markers because the null markers preserve the exact tree structure.
// A traversal containing only node values loses information about missing left and right children. Alternatively, preorder and inorder
// together can reconstruct a binary tree with distinct values.

