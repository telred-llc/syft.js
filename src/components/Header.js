import React from 'react';
import { Menu, Layout } from 'antd'
import { Link } from "react-router-dom";

const headerContainerStyle = {
  background: 'linear-gradient(180deg,#031d6a,#000e48)',
  height: '58px'
};

const headerMenuStyle = {
  background: 'linear-gradient(180deg,#031d6a,#000e48)',
  borderBottom: 'none'
};

const headerItemStyle = {
  color: 'white'
}

const Header = () => (
  <Layout.Header id="layoutHeader" style={headerContainerStyle}>
    <Menu fixed='top'  mode='horizontal' style={headerMenuStyle}>
        <Menu.Item><Link to="/OpenMined" style={{...headerItemStyle, fontSize: '1.2em', fontWeight: 'bold'}}>OpenMined</Link></Menu.Item>
        <Menu.Item><Link to="/OpenMined/webcam" style={headerItemStyle}>Webcam Demo</Link></Menu.Item>
        <Menu.Item><Link to="/OpenMined/pattern_recognition" style={headerItemStyle}>Show Training Demo</Link></Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;