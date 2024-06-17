import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./providers/query-client.ts";
import { router } from "./routes/index.ts";
import { RouterProvider } from "react-router-dom";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
