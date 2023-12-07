import { createHashRouter } from 'react-router-dom'
import App from '../App'
// import ArtOfBecomingInvisible from "@/views/art-of-becoming-invisible";
// import WaterMarker from "@/views/water-marker";
import ArtOfBecomingInvisible from '../views/art-of-becoming-invisible'
import WaterMarker from '../views/water-marker'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/water-marker',
    element: <WaterMarker />,
  },
  {
    path: '/art-of-becoming-invisible',
    element: <ArtOfBecomingInvisible />,
  },
])
