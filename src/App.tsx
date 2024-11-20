import { useState } from 'react'
import './App.css'
import {
  Button,
  Card,
  CardContent,
  Container,
  createTheme,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material'

const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: '4rem',
    },
  },
})

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Card sx={{ maxWidth: 1000, textAlign: 'center', margin: 'auto' }}>
            <CardContent>
              <Typography
                textTransform={'uppercase'}
                variant="h1"
                fontSize="3rem"
                gutterBottom
              >
                The Almost final countdown
              </Typography>
              <Typography variant="body1">
                Stop the timer once you estimate that time is (almost) up
              </Typography>
              <Typography marginBottom={3}>Welcome {name}!</Typography>
              <Stack direction="row" justifyContent="center" spacing={1}>
                <TextField
                  size="small"
                  id="name"
                  label="Name"
                  variant="outlined"
                />
                <Button variant="contained">Set Name</Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
