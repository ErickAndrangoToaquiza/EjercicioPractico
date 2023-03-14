import { Card } from '../models/card.interfase';

export const CardItems: Card[] = [
  {
    name: 'Listening',
    route: '/',
    icon: 'icon-earphone',

    colorBackg: 'var(--light-gray-color)',
    colorItems: 'var(--primary-color)',
  },
  {
    name: 'Grammar',
    route: '/',
    icon: 'icon-edit',
    colorBackg: 'var(--light-gray-color)',
    colorItems: 'var(--danger-color)',
  },
  {
    name: 'Prounancation',
    route: '/',
    icon: 'icon-microphone',
    colorBackg: 'var(--light-gray-color)',
    colorItems: 'var(--secondary-color)',
  },
  {
    name: 'Dictionary',
    route: '/',
    icon: 'icon-book',
    colorBackg: 'var(--light-gray-color)',
    colorItems: 'var(--success-color)',
  },
];
