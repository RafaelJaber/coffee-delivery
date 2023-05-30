import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Alooo</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
