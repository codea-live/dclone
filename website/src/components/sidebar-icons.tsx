import * as React from 'react';

export interface SidebarIconsProps {
  guilds: Entity.Guild[];
}
 
export interface SidebarIconsState {}
 
class SidebarIcons extends React.Component<SidebarIconsProps, SidebarIconsState> {
  get guildIcons() {
    return this.props.guilds
      .map(g => <span className="icon">{g.name.slice(0, 3)}</span>);
  }

  render() { 
    return (
      <div className="sidebar-icons">
        {this.guildIcons}
      </div>
    );
  }
}
 
export default SidebarIcons;