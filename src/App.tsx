import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
// import {
//   createBrowserRouter,
//   RouterProvider,
  
// } from "react-router-dom";
import Stories from './Components/Stories';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Story from './Components/StoryPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     // loader: rootLoader,
//     children: [
//       {
//         path: "stories",
//         element: <Stories />,
//         // loader: teamLoader,
//       },
//     ],
//   },
// ]);

function App() {
  return (
     <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:storyId" element={<Story />} />
          </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;
