import { Box } from 'theme-ui'
import { useState, useEffect } from 'react'

// Gql
import { useQuery } from '@apollo/react-hooks'
import { GET_EPOCHES } from 'apollo/queries'
import { withApollo } from '../apollo/client'

const Index = () => {
  const [epoches, setEpoches] = useState([])
  const [lastIndex, setLastIndex] = useState(6)

  const { loading, error, data } = useQuery(GET_EPOCHES)

  useEffect(() => {
    const newEpoches = data?.epoches
    if (newEpoches) {
      setEpoches(newEpoches)
    }
  }, [data])

  return (
    <Box>
      <Box
        sx={{
          pt: '48px',
          m: '0 auto',
          textAlign: 'center',
          height: '100%',
        }}
      >
        <h1>Welcome to the Edge & Node coding challenge!</h1>
        {loading && <p>Loading..</p>}
        {error && <p>Error: {JSON.stringify(error)} </p>}
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
