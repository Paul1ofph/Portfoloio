import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage"
import ViewallWorks from "./Pages/ViewallWorks"
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
    <AnimatedCursor 
          innerSize={8}
          outerSize={27}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#F6A64F',
            borderRadius: '30px 30px 0px 30px',
          }}
          outerStyle={{
            border: '3px solid #F6A64F',
            borderRadius: '30px 30px 0px 30px',
            backgroundColor: 'transparent'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
          showSystemCursor={true}
    />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewall" element={<ViewallWorks />} />
      </Routes>
    </Router>
    {/* <HomePage /> */}
    {/* <ViewallWorks /> */}
    </>
  )
}

export default App
