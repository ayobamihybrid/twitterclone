import React from 'react';
import './SidebarOption.css';

function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon className="sidebarOptionIcon" />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
