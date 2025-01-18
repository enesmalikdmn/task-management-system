'use client';

import { useState } from 'react';
import { TextField } from '@mui/material';
import { userList } from '@/data/dummyData';

import { Avatar, Menu, List, ListItem, ListItemText } from '@mui/material';
import { User } from '../../types/appTypes';

export default function TaskFilterArea() {
  const [search, setSearch] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [remainingUsers, setRemainingUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    handleClose();
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>, users: User[]) => {
    setRemainingUsers(users);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex items-center gap-8">
      <TextField
        value={search}
        onChange={handleSearchChange}
        id="outlined-basic"
        size="small"
        label="Search"
        variant="outlined"
        autoComplete="off"
      />
      <div>
        <div className="flex gap-1">
          {userList.slice(0, 3).map((user) => (
            <div key={user.accountId} className="flex items-center gap-2">
              <Avatar
                className={`cursor-pointer ${selectedUser?.accountId === user.accountId ? 'border-2 border-blue-500' : 'border-transparent border-2'}`}
                onClick={() => handleSelectUser(user)}
                src={user.profilePicture}
              />
            </div>
          ))}

          {userList.length > 3 && (
            <Avatar
              className="cursor-pointer bg-gray-300 text-black"
              onClick={(event) => handleOpen(event, userList.slice(3))}
            >
              +{userList.length - 3}
            </Avatar>
          )}
        </div>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          aria-hidden={anchorEl ? 'false' : 'true'}
        >
          <List>
            {remainingUsers.map((user) => (
              <ListItem
                onClick={() => handleSelectUser(user)}
                key={user.accountId}
              >
                <Avatar
                  className={`cursor-pointer ${selectedUser?.accountId === user.accountId ? 'border-2 border-blue-500' : 'border-transparent border-2'}`}
                  src={user.profilePicture}
                  sx={{ marginRight: '4px' }}
                />
                <ListItemText primary={user.username} />
              </ListItem>
            ))}
          </List>
        </Menu>
      </div>
    </div>
  );
}
