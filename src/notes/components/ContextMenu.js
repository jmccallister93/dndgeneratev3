import ns from "../../stylesheets/Note.module.scss";
import { useEffect, useState, useRef } from "react";

const ContextMenu = (props) => {
  const contextMenuRef = useRef(null);

  //Handle the click outside the context menu
  const hideContextMenu = () => {
    props.setContextMenuVisible(false);
  };

  // // Handle the click on the context menu item
  // const handleMenuItemClick = useCallback(
  //   (e) => {
  //     clickedMenuItem.current = true;
  //     hideContextMenu();
  //   },
  //   [hideContextMenu]
  // );

  const handleAddChild = () => {};
  const handleAddLink = () => {};
  const handleMoveUp = () => {};
  const handleMoveDown = () => {};

  return (
    <>
      <div
        ref={contextMenuRef}
        className={ns.contextMenu}
        // onClick={handleMenuItemClick}
      >
        <div className={ns.menuItem} onClick={handleAddChild}>
          {" "}
          <i class="pi pi-plus"></i> Add Child
        </div>
        <div className={ns.menuItem} onClick={handleAddLink}>
          <i class="pi pi-link"></i> Link
        </div>
        <div className={ns.menuItem} onClick={handleMoveUp}>
          <i class="pi pi-angle-double-up"></i> Move Up
        </div>
        <div className={ns.menuItem} onClick={handleMoveDown}>
          <i class="pi pi-angle-double-down"></i> Move Down
        </div>
      </div>
    </>
  );
};

export default ContextMenu;
