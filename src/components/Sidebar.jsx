import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const selectedCategory = 'New';

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      msOverflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map(category => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory ? '#FC1503' : '#fff',
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginRight: '1rem',
          }}
        >
          {<category.icon />}
        </span>
        <span
          style={{
            color: 'white',
            opacity: category.name === selectedCategory ? '1' : '.8',
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
