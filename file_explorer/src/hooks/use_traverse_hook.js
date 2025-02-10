


const useTraverseTree = () => {
    const insertNode = (tree, folderId, name, isFolder) => {
        console.log(tree.name);
        if(tree.id === folderId.id && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name,
                isFolder,
                items: []
            });

            return tree;
        }
        let latestNode = [];
        latestNode = tree.items.map((item) => {
            return insertNode(item, folderId, name, isFolder);
        });

        return {...tree, items: latestNode};
    }

    return {insertNode};
}

export default useTraverseTree;