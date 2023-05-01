import { Analytics } from "@vercel/analytics/react"

import "../../styles/index.css"

const App = ({Component, pageProps}) =>
    <>
      <Component {...pageProps} />
      <Analytics/>
    </>
export default App
