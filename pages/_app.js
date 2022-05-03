import React from "react"
import { StateProvider } from "../contexts/state.context"
import { Toaster } from "react-hot-toast"
import { Layout } from "../components"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  )
}

export default MyApp
