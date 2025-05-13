
import React from 'react';
import {Routes, Route } from 'react-router-dom';



import Home from './pages/Home/Home';
import Tools from './pages/Tools/Tools';
import Community from './pages/Community/community';
import SourceFile from './pages/Source/SourceFiles';
import Layout from './Layout';
// Add your other routes...

const App = () => {
  return (
 
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="tools" element={<Tools/>} />
          <Route path="community" element={<Community />} />
          <Route path="source-file" element={<SourceFile />} />
          </Route>
      </Routes>
 
  );
};

export default App;

