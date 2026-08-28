// part -a  valid bst 

function isValidBST(root) {

    function validate(node, min, max) {
        if (node === null) {
            return true;
        }
        if (node.value <= min || node.value >= max) {
            return false;
        }
        return (
            validate(node.left, min, node.value) &&
            validate(node.right, node.value, max)
        );
    }

    return validate(root, -Infinity, Infinity);
}

// Part B — Lowest Common Ancestor in BST

function lowestCommonAncestor(root, p, q) {
    let current = root;
    while (current !== null) {
        if (p.value < current.value &&
            q.value < current.value) {

            current = current.left;
        } else if (
            p.value > current.value &&
            q.value > current.value
        ) {

            current = current.right;

        } else {
            return current;
        }
    }

    return null;
}
// BST:

// Time: O(h)
// Space: O(1) iterative

// General Binary Tree

function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left : right;
}

// General binary tree:

// Time: O(n)
// Space: O(h)