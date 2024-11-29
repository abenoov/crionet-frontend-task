import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './routes';

function App() {
  return (
    <Routes>
      <Route>
        {routes.map((routes, index) => {
          const { path, component: Component } = routes;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Suspense>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
