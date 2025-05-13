import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <Helmet>
      <title>CocoReeno Enterprise ERP</title>
      <link 
        href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <meta name="description" content="CocoReeno Enterprise ERP - Integrated coconut development company ERP system" />
    </Helmet>
    <App />
  </>
);
