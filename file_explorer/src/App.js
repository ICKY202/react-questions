import {useState} from "react";
import './App.css';
import explorer from "./data/FolderData";
import Folder from "./Folder";
import useTraverseTree from "./hooks/use_traverse_hook";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId, name, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, name, isFolder);

    setExplorerData(finalTree);
  }

  return (
    <div className="App">
      {/* Folder Component*/}
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode}/>
    </div>
  );
}

export default App;
