import React from "react";
import ReactDOM from "react-dom/client";

import ErrorBoundaryProvider from "./providers/error-boundary.tsx";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./providers/query-client.ts";
import { router } from "./routes/index.ts";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header/index.tsx";

import "./global.css";

import Footer from "./components/Footer/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundaryProvider>
			<QueryClientProvider client={queryClient}>
				<Header />
				<RouterProvider router={router} />
				<Footer />
			</QueryClientProvider>
		</ErrorBoundaryProvider>
	</React.StrictMode>
);
