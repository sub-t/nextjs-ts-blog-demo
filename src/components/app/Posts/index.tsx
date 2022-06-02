import React from 'react';
import { Badge } from '@/components/common/Badge';
import { Date } from '@/components/common/Date';
import { Box, HStack, VStack } from '@/components/common/Layout';
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
      p: 20,
      borderRadius: 6,
      bgColor: '$loContrast',
      boxShadow: '$colors$shadow1',
    }}
  >
    <InnerLink href={`/${year}/${month}/${slug}`}>
      <VStack gap="2">
        <HStack align="center" gap="3">
          <Date>{formatDate(date)}</Date>
          <Badge href={`category/${category}`} text={category} />
        </HStack>
        <Box css={{ fontWeight: 900, fontSize: 20, color: '$slate12' }}>
          {title}
        </Box>
        <HStack align="center" gap="2">
          {tags.map((tag) => (
            <Tag key={tag} href={`tag/${tag}`} text={tag} />
          ))}
        </HStack>
      </VStack>
    </InnerLink>
  </Box>
);

export const Posts: React.VFC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <VStack gap="4">
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </VStack>
  );
};
