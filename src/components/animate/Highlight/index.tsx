import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@/components/common/Layout';
import { styled } from 'stitches.config';
import { HoverContext } from './HoverContext';

const Highlight = styled(motion.div, {
  position: 'absolute',
  inset: 0,
  borderRadius: 6,
  bgColor: '$slateA3',
});

type HighlightItemProps = {
  children: React.ReactNode;
  id: number;
};

export const HighlightItem: React.VFC<HighlightItemProps> = ({
  children,
  id,
}) => {
  const { hovered, setHover } = React.useContext(HoverContext);
  return (
    <Box
      css={{ position: 'relative' }}
      onFocus={() => setHover(id)}
      onMouseEnter={() => setHover(id)}
    >
      {hovered === id ? (
        <Highlight
          transition={{
            layout: {
              duration: 0.2,
              ease: 'easeOut',
            },
          }}
          layoutId="highlight"
        />
      ) : null}
      <Box>{children}</Box>
    </Box>
  );
};

type HighlightListProps = {
  children: React.ReactNode;
};

export const HighlightList: React.VFC<HighlightListProps> = ({ children }) => {
  const [hovered, setHover] = React.useState(-1);

  return (
    <HoverContext.Provider value={{ hovered, setHover }}>
      {children}
    </HoverContext.Provider>
  );
};
