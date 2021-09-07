import * as React from 'react'

import { Snippet } from '~/playroom/types'
import { Box } from './box'

export const snippets: Snippet[] = [
  {
    name: 'Basic',
    code: <Box>Basic</Box>,
  },
  {
    name: 'Flex',
    code: <Box display="flex">Flex</Box>,
  },
]
