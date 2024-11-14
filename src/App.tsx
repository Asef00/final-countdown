import './App.css'
import { Card, CardContent, Typography } from '@mui/material'

function App() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography textTransform={'uppercase'} variant="h1">
            The Almost final countdown
          </Typography>
          <Typography variant="body1">
            Stop the timer once you estimate that time is (almost) up
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default App
