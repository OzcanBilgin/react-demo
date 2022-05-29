import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../screen/Login';

const pageList = [
  { path: '/', component: <Login /> },
];

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {pageList.map((item, index) => (
          <Route
            key={index.id}
            path={item.path}
            element={item.component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
