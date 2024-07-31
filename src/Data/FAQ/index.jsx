import {
  Articles,
  Knowledgebase,
  AskOurCommunity,
  Tutorials,
  HelpCenter,
  ContactUs,
  VideoTutorials,
  VictoriaWilson,
} from '../../Constant';
import React from 'react';
import {
  Edit,
  Globe,
  BookOpen,
  FileText,
  Youtube,
  MessageCircle,
  Mail,
  RotateCcw,
  DollarSign,
  Check,
  Link,
  Codepen,
} from 'react-feather';

export const ASKQUESData = [
  {
    id: 1,
    icon: <Edit />,
    title: Tutorials,
  },
  {
    id: 2,
    icon: <Globe />,
    title: HelpCenter,
  },
  {
    id: 3,
    icon: <BookOpen />,
    title: Knowledgebase,
  },
  {
    id: 4,
    icon: <FileText />,
    title: Articles,
    class: 'badge badge-primary rounded-pill pull-right',
    val: '42',
  },
  {
    id: 5,
    icon: <Youtube />,
    title: VideoTutorials,
    class: 'badge badge-primary rounded-pill pull-right',
    val: '642',
  },
  {
    id: 6,
    icon: <MessageCircle />,
    title: AskOurCommunity,
  },
  {
    id: 7,
    icon: <Mail />,
    title: ContactUs,
  },
];

export const LatestData = [
  {
    id: 1,
    Iconclass: <RotateCcw className="font-primary" />,
    name: 'DavidLinner',
    title: 'requested money back for a double debit card charge',
    time: '10 minutes ago',
  },
  {
    id: 2,
    Iconclass: <DollarSign className="font-primary" />,
    title: 'All sellers have received monthly payouts',
    time: '2 hours ago',
  },
  {
    id: 3,
    Iconclass: <Link className="font-primary" />,
    name: 'UserChristopher',
    val: 'Wallace',
    title: 'is on hold and awaiting for staff reply',
    time: '45 minutes ago',
  },
  {
    id: 4,
    Iconclass: <Check className="font-primary" />,
    val: VictoriaWilson,
    title: 'Ticket #43683 has been closed by',
    time: 'Dec 7, 11:48',
  },
];

export const ArticeVideoData1 = [
  {
    id: 1,
    IconClass: <Codepen className="m-r-30" />,
    title: 'Using Video',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
  {
    id: 2,
    IconClass: <Codepen className="m-r-30" />,
    title: 'Vel illum qu',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
  {
    id: 3,
    IconClass: <Codepen className="m-r-30" />,
    title: 'Cum sociis natoqu',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
];

export const ArticeVideoData2 = [
  {
    id: 1,
    IconClass: <FileText className="m-r-30" />,
    title: 'Vel illum qu',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
  {
    id: 2,
    IconClass: <FileText className="m-r-30" />,
    title: 'Cum sociis natoqu',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
  {
    id: 3,
    IconClass: <FileText className="m-r-30" />,
    title: 'Using Video',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
];

export const ArticeVideoData3 = [
  {
    id: 1,
    IconClass: <Youtube className="m-r-30" />,
    title: 'Cum sociis natoqu',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
  {
    id: 2,
    IconClass: <Youtube className="m-r-30" />,
    title: 'Using Video',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
  {
    id: 3,
    IconClass: <Youtube className="m-r-30" />,
    title: 'Vel illum qu',
    discription:
      'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
];

const para =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

export const Titles1 = [
  {
    id: 0,
    title: 'Integrating WordPress with Your Website?',
    para: para,
  },
  {
    id: 1,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 2,
    title: 'Meta Tags in WordPress ?',
    para: para,
  },
  {
    id: 3,
    title: 'WordPress in Your Language ',
    para: para,
  },
];

export const Titless2 = [
  {
    id: 1,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 2,
    title: ' WordPress in Your Language ?',
    para: para,
  },
  {
    id: 3,
    title: 'Integrating WordPress with Your Website',
    para: para,
  },
];

export const Titles3 = [
  {
    id: 1,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 2,
    title: 'Meta Tags in WordPress ?',
    para: para,
  },
  {
    id: 3,
    title: 'Validating a Website ?',
    para: para,
  },
  {
    id: 4,
    title: 'Know Your Sources ',
    para: para,
  },
];

export const Titles4 = [
  {
    id: 1,
    title: 'Integrating WordPress with Your Website ?',
    para: para,
  },
  {
    id: 2,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 3,
    title: ' WordPress in Your Language ?',
    para: para,
  },
  {
    id: 4,
    title: ' Validating a Website ?',
    para: para,
  },
  {
    id: 5,
    title: ' Meta Tags in WordPress ',
    para: para,
  },
];
