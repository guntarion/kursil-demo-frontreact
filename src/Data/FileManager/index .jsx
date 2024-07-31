import React from 'react';
import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from 'react-feather';

export const SideButtons = [
  {
    id: 1,
    className: 'btn btn-primary',
    icon: <Home />,
    title: 'Home',
  },
  {
    id: 2,
    className: 'btn btn-light',
    icon: <Folder />,
    title: 'All',
  },
  {
    id: 3,
    className: 'btn btn-light',
    icon: <Clock />,
    title: 'Recent',
  },
  {
    id: 4,
    className: 'btn btn-light',
    icon: <Star />,
    title: 'Starred',
  },
  {
    id: 5,
    className: 'btn btn-light',
    icon: <AlertCircle />,
    title: 'Recovery',
  },
  {
    id: 6,
    className: 'btn btn-light',
    icon: <Trash2 />,
    title: 'Deleted',
  },
];
