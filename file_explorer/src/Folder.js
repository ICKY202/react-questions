import { useState } from "react";


const Folder = ({explorer, handleInsertNode}) => {
    const[expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({visible: false, isFolder: true});
    const handleClick = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({...showInput, visible: !showInput.visible, isFolder });
    }
    const handleNewFolder = (e) => {
        console.log(e);
        if(e.keyCode === 13 && e.target.value) {
            console.log("hello");

            handleInsertNode(explorer, e.target.value, showInput.isFolder);
        }
        return;
    }
    if(explorer.isFolder) {

    return (
        <div>
            <div className="folder" onClick={() => setExpand(!expand)}>
                <span>📁 {explorer.name}</span>
                <div style={{display: "flex", gap: "5px"}}>
                    <button className="folderBtn" onClick={(e) => handleClick(e, true)}>Folder</button>
                    <button className="fileBtn" onClick={(e) => handleClick(e, false)}>File</button>
                </div>
            </div>
            {showInput.visible && <div style={{marginLeft: "10px"}}>
                    <span>{showInput.isFolder ? "📁" : "🗄️"}</span>
                    <input type="text" style={{padding: "3px"}} autoFocus onBlur={() => setShowInput({...showInput, visible: !showInput.visible})} onKeyDown={(e) => handleNewFolder(e)} />
                </div>
            }
            {expand && <div className="folderItems">
                {explorer.items.map((item) => {
                     return <Folder key={item.id} explorer={item}/>
                })}
                </div>
            }
        </div>
        );
    }else {
        return <div><span>🗄️ {explorer.name}</span></div>
    }
}

export default Folder;