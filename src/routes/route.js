import React, {lazy, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';

const Layout = lazy(() => import('../components/layout'));
const Layout1 = lazy(() => import('../pages/electronika'));
const Posts = lazy(() => import('../pages/posts/posts'));
const Users = lazy(() => import('../pages/users/users'));
const Albums = lazy(() => import('../pages/albums/albums'));
const Todos = lazy(() => import('../pages/todos/todos'));
const Electronika = lazy(() => import('../pages/electronika'));
const Rassrochka = lazy(() => import('../components/rasssrochka'));
const Texnika = lazy(() => import('../components/texnika'));
const Elctronica = lazy(() => import('../components/elektronika'));
const Odejda = lazy(() => import('../components/odejda'));
const Obuv = lazy(() => import('../components/Obuv'));




const Routing = () => <Suspense fallback={'Loading'}>
    <Routes>
        <Route path={'/'} element={<Layout/>} >
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/albums'} element={<Albums/>}/>
            <Route path={'/todos'} element={<Todos/>}/>
            <Route path={'/electronica'} element={<Electronika/>}/>
        <Route path={'/'} element={<Layout1/>} >
            <Route path={'/texnika'} element={<Texnika/>}/>
            <Route path={'/odejda'} element={<Odejda/>}/>
            <Route path={'/obuv'} element={<Obuv/>}/>
            <Route path={"/Elctronica"} element={<Elctronica/>}/>
            <Route path={"/rassrochka"} element={<Rassrochka/>}/>
            <Route path={'/akksesuari'} element={<Electronika/>}/>
        </Route>
        </Route>
    </Routes>
</Suspense>

export default Routing