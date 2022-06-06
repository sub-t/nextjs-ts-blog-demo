import React from 'react';
import { FiSun } from 'react-icons/fi';
import { IconButton } from '@/components/common/IconButton';
import { useToggleTheme } from '@/hooks/useToggleTheme';

export const DarkThemeButton = () => {
  const [, toggleTheme] = useToggleTheme();

  return (
    <IconButton type="button" aria-label='toggle theme' onClick={toggleTheme}>
      <FiSun size={28} />
    </IconButton>
  );
};
