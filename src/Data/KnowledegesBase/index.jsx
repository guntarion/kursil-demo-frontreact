import React from 'react';
import { Aperture, BookOpen, FileText } from 'react-feather';

const Paras =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

export const MainCardPara1 =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
export const MainCardPara2 =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like';

export const ArticalsData = [
  {
    is: 1,
    title: 'Articles',
    para: Paras,
    icon: <BookOpen />,
  },
  {
    is: 2,
    title: 'Knowledgebase',
    para: Paras,
    icon: <Aperture />,
  },
  {
    is: 3,
    title: 'Support',
    para: Paras,
    icon: <FileText />,
  },
];

export const DetailesSidebarData = [
  {
    id: 1,
    title1: 'UX Development',
    title2: 'Course By',
    title3: 'Lorem ipsum',
    date: '18',
    month: 'Dec',
  },
  {
    id: 2,
    title1: 'Business Analyst',
    title2: 'Course By',
    title3: 'Lorem ipsum',
    date: '28',
    month: 'Oct',
  },
  {
    id: 3,
    title1: 'Web Development',
    title2: 'Course By',
    title3: 'Lorem ipsum',
    date: '1',
    month: 'May',
  },
];
