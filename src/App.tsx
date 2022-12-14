import { Route, Routes } from "react-router";

import Header from "./components/Header/Header";

import { RouteInterface, routes } from "./routes";

const App = () => {
  return (
    <div className='App min-h-screen  bg-zinc-100'>
      <Header />
      <div className='container mx-auto'>
        <Routes>
          {routes.map((route: RouteInterface, i: number) => (
            <Route key={i} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
