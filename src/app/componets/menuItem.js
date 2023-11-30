"use Client"
import { ExpandLess,ExpandMore } from '@mui/icons-material';
import {List, ListItem, ListItemText, ListItemButton, Collapse } from '@mui/material';
import { useState } from 'react';
const MenuItem = ({ text, subMenuItems, handleMenuClick }) => {
  const [openItem, setOpenItem] = useState(false);

  const handleClickItem = () => {
    if (text[1] === 0) {
      setOpenItem(!openItem);
      // Llama a la función con el índice del elemento principal
    }
    handleMenuClick(text[1]);
  };

  const handleSubMenuClick = (index) => {
    handleMenuClick(index); // Llama a la función con el índice del submenú
  };

  return (
    <ListItem sx={{ flexDirection: "column" }}>
      <ListItemButton onClick={handleClickItem}>
        <ListItemText primary={text[0]} />
        {text[1] === 0 && subMenuItems && (openItem ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {text[1] === 0 && subMenuItems && (
        <Collapse in={openItem} timeout="auto" unmountOnExit>
          <List sx={{ pl: 4 }}>
            {subMenuItems.map((subMenuItem, subIndex) => (
              <ListItemButton key={`${text[1]}_${subIndex}`} onClick={() => handleSubMenuClick(`${text[1]}_${subIndex}`)}>
                {subMenuItem}
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </ListItem>
  );
};

export default MenuItem;