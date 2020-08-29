import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Router from './Routes/router';
import Navbar from './componnets/Navbar';
const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background container">
            <Router />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', borderTop: '1px solid #ccc' }}>
          Created with React.js and Ant Design 2020
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
