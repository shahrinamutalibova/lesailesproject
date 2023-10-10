import React, { useState } from 'react'
import {
  CloseCircleFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { useNavigate ,Outlet } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [openModal , setOpenModal] = useState(false)
  const handleCancel = () => setOpenModal(false);
  const navigate = useNavigate()
  const close = () =>{
    navigate("/posts")
  }
  return (
    <Layout onCancel={handleCancel} style={{padding:"20px 0",position:"relative",top:"-370px",backgroundColor:"white"}}>
      <Sider style={{background:"white",width:"300px",borderRight:"1px solid grey"}} trigger={null} >
        <div className="demo-logo-vertical" />
        <Menu
          theme="white"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{background:"white",width:"250px",borderRight:"1px solid grey"}}
          onClick={({key}) => navigate(key)}
          items={[
            {
              key: '/rassrochka',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><img style={{width:"23px"}} src="https://static.uzum.uz/product-action/paiment.png" alt="" /><p>Халяльная рассрочка</p></div>,
            },
            {
              key: '/Elctronica',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🎧</h1><p>Элекроника</p></div>,
            },
            {
              key: '/texnika',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🗜️</h1><p>Бытовая техника</p></div>,
              
            },
            {
              key: '/odejda',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🥼</h1><p>Одежда</p></div>,
            },
            {
              key: '/obuv',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>👟</h1><p>Обувь</p></div>,
              
            },
            {
              key: '3',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🎒</h1><p>Аксессуары</p></div>,
            },{
              key: '/posts',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>💄</h1><p>Красота</p></div>,
            },
            {
              key: '/users',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>❤️</h1><p>Здоровье</p></div>,
            },
            {
              key: '3',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🏠</h1><p>Товары для дома</p></div>,
            },
            {
              key: '/posts',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>⚒️</h1><p>Строительство и ремонт</p></div>,

            },
            {
              key: '/users',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1> 🚘</h1><p>Автотовары</p></div>,

            },
            {
              key: '3',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🧸</h1><p>Детские товары</p></div>,

            },
            {
              key: '/posts',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🏓</h1><p>Хобби и творчество</p></div>,

            },
            {
              key: '/users',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🏀</h1><p>Спорт и отдых</p></div>,
            
            },
            {
              key: '3',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🍏</h1><p>Продукты питания</p></div>,
             
            },{
              key: '/posts',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🧪</h1><p>Бытовая химия и личная гигиена</p></div>,

            },
            {
              key: '/users',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>📒</h1><p>Канцтовары</p></div>,

            },
            {
              key: '3',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🐼</h1><p>Зоотовары</p></div>,

            },{
              key: '/posts',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>📖</h1><p>Книги</p></div>,

            }
            ,{
              key: '/posts',
              label: <div style={{display:"flex",alignItems:"center",gap:"10px"}}><h1>🌿</h1><p>Дача, сад и огород</p></div>,

            }
          ]}
        />
      </Sider>
      <Layout style={{background:"white"}}>
        <Content
          style={{
            minHeight: 250,
            width:"100%",
            paddingLeft:80,
            backgroundColor:"white",
          }}
        > <div style={{width:"100%",display:"flex",justifyContent:"end",padding:"0 40px"}}>
          <CloseCircleFilled onClick={close}/>
        </div>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;