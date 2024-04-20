
import Login from "./Pages/Software/Login";


function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>

</>
  );
}

export default App;
