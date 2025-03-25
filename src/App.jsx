import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage"
import ViewallWorks from "./Pages/ViewallWorks"

function App() {
  return (
    <>
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
