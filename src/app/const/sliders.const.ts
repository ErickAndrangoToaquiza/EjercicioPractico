import { Slider } from '../models/slider.interface';

export const SliderItems: Slider[] = [
  {
    name: 'Total Orders',
    route: '/',
    icon: 'icon-folder',
    colorBackg: 'var(--blueberry-color)',
    colorItems: 'var(--primary-color)',
  },
  {
    name: 'Total Earnings',
    route: '/',
    icon: 'icon-folder',
    colorBackg: 'var(--pink-color)',
    colorItems: 'var(--danger-color)',
  },
  {
    name: 'Profile',
    route: '/',
    icon: 'icon-folder',
    colorBackg: 'var(--orange-color)',
    colorItems: 'var(--secondary-color)',
  },
  // {
  //   name: 'Sales',
  //   route: '/',
  //   icon: 'icon-folder',
  //   colorBackg: 'var(--green-color)',
  //   colorItems: 'var(--success-color)',
  // },
];
