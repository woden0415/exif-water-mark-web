import App from "../App";
// import ArtOfBecomingInvisible from "@/views/art-of-becoming-invisible";
// import WaterMarker from "@/views/water-marker";
import { createBrowserRouter } from "react-router-dom";
import WaterMarker from "../views/water-marker";
import ArtOfBecomingInvisible from "../views/art-of-becoming-invisible";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/water-marker",
    element: <WaterMarker />,
  },
  {
    path: "/art-of-becoming-invisible",
    element: <ArtOfBecomingInvisible />,
  },
]);