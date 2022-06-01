import { indigo } from '@radix-ui/colors';
import { css } from 'stitches.config';

export const itemStyles = css({
  all: 'unset',
  outline: 'none',
  userSelect: 'none',
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  // custom
  padding: '12px 16px',
  borderRadius: 9999,
  fontWeight: 900,
  fontSize: 15,
  color: indigo.indigo12,

  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${indigo.indigo7}` },
});
