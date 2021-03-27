import React, { useState } from 'react';

const TreeView = (props) => {
  const [collapsed, setCollapsed] = useState(props.defaultCollapsed)  

  

  const handleClick = (...args) => {
    setCollapsed(!collapsed);
    if (props.onClick) {
      props.onClick(...args);
    }
  }

    const {
      className = '',
      itemClassName = '',
      treeViewClassName = '',
      childrenClassName = '',
      nodeLabel,
      children,
      defaultCollapsed,
      ...rest
    } = props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    const arrow = (
      <div
        {...rest}
        className={className + ' ' + arrowClassName}
        onClick={()=>handleClick()}
      />
    );

    return (
      <div className={'tree-view ' + treeViewClassName}>
        <div className={'tree-view_item ' + itemClassName}>
          {arrow}
          {nodeLabel}
        </div>
        <div className={containerClassName + ' ' + childrenClassName}>
          {collapsed ? null : children}
        </div>
      </div>
    );
}

export default TreeView;