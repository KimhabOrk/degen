import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/theme'

export const link = style([
  atoms({
    color: 'accent',
    cursor: 'pointer',
  }),
  style({
    textDecoration: 'underline',
    textDecorationColor: vars.colors.accent,
    textUnderlineOffset: '0.2em',
  }),
])

export const anchorParent = style({})

export const anchor = style({
  visibility: 'hidden',
  selectors: {
    [`${anchorParent}:hover &`]: {
      visibility: 'visible',
    },
  },
})
