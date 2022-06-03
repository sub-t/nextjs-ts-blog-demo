import React from 'react';
import { Enter } from '@/components/animate/Enter';
import { Badge } from '@/components/common/Badge';
import { Date } from '@/components/common/Date';
import { Box, Grid, HStack, VStack, Wrap } from '@/components/common/Layout';
import { InnerLink } from '@/components/common/Link';
import { Tag } from '@/components/common/Tag';
import { Post } from '@/types';
import { formatDate } from '@/utils/format';

const Post: React.VFC<{ post: Post }> = ({
  post: { slug, date, year, month, title, category, tags },
}) => (
  <Box
    key={slug}
    css={{
      boxSizing: 'border-box',
      position: 'relative',
      h: '100%',
      p: 20,
      borderRadius: 6,
      bgColor: '$loContrast',
      boxShadow: '$colors$shadow1',
    }}
  >
    <VStack gap="2">
      <HStack align="center" gap="3">
        <Date>{formatDate(date)}</Date>
        <Badge href={`category/${category}`} text={category} />
      </HStack>
      <Box css={{ fontWeight: 900, fontSize: 20, color: '$slate12' }}>
        {title}
      </Box>
      <Wrap align="center" gap="2">
        {tags.map((tag) => (
          <Tag key={tag} href={`tag/${tag}`} text={tag} />
        ))}
      </Wrap>
    </VStack>
    <InnerLink href={`/${year}/${month}/${slug}`}>
      <Box css={{ position: 'absolute', inset: 0 }} />
    </InnerLink>
  </Box>
);

export const Posts: React.VFC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Grid
      gap="4"
      css={{
        gridAutoRows: 'max-content',
        gridTemplateColumns: 'repeat(1, 1fr)',
        '@md': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@lg': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      }}
    >
      {posts.map((post) => (
        <Enter key={post.title}>
          <Post post={post} />
        </Enter>
      ))}
    </Grid>
  );
};
