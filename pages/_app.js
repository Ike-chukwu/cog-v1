import { Provider } from "react-redux"
import "../styles/Table.css"
import "../styles/globals.css"
import { wrapper } from "../utils/store"

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
