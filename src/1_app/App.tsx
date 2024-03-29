import { Home } from "@/2_pages/home";
import { createCtx } from "@reatom/core";
import { reatomContext } from "@reatom/npm-react";
import { connectLogger } from "@reatom/framework";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ctx = createCtx();
import.meta.env.MODE === "development" && connectLogger(ctx);

function App() {
	return (
		<reatomContext.Provider value={ctx}>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route element={<Home />} index />
						<Route element={<GraphGen />} path='graph-gen' />
						{/* <Route element={<Offline />} path='offline' /> */}
						{/* <Route element={<NotFound />} path='404' /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</reatomContext.Provider>
	);
}

export default App;
