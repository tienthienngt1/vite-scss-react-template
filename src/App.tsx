import { HashRouter, BrowserRouter, Routes } from "react-router-dom";
import Router from "./router";
import DocumentMeta from "react-document-meta";
// import "./App.scss";
import { useMedia } from "react-use";
import { useEffect } from "react";

// const meta = {
// 	title: "Orcate",
// 	description: "I am a description, and I can create multiple tags",
// 	canonical: "http://example.com/path/to/page",
// 	meta: {
// 		charset: "utf-8",
// 		name: {
// 			keywords: "Ordinal NFT, Ordi Cate, Ordi Doge, Ordinal Trending",
// 		},
// 	},
// };

function App() {
	const width = useMedia("(max-width: 400px)");
	useEffect(() => {
		const ref = document.querySelector("meta[name='viewport']");
		ref?.setAttribute(
			"content",
			width
				? "width=400,shrink-to-fit=no, maximum-scale=0.8"
				: "initial-scale=1, width=device-width"
		);
	}, []);
	return (
		// <DocumentMeta {...meta}>
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
		// </DocumentMeta>
	);
}

export default App;
