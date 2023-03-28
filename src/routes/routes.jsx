import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main'
import All from '../pages/All'
import Bookmark from '../pages/Bookmark'
import NotFound from '../pages/NotFound'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/All" element={<All />} />
      <Route path="/Bookmark" element={<Bookmark />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
