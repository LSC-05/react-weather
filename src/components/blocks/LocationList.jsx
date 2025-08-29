import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { List, ListItem, ListItemButton } from '@mui/material';
import { ListItemIcon, ListItemText } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const cities = [
  {
    title: 'Tokyo',
    url: '/tokyo',
  },
  {
    title: 'Osaka',
    url: '/osaka',
  },
  {
    title: 'Hokkaido',
    url: '/hokkaido',
  },
  {
    title: 'Nagoya',
    url: '/nagoya',
  },
];

export const LocationList = ({ handleClose }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: 800,
      minWidth: 500,
      bgcolor: 'background.paper',
    }}
  >
    <List>
      {cities.map((c, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton onClick={handleClose} component={Link} to={c.url}>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary={c.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
