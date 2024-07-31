import React from 'react';
import { BoxSvg, BoxSvg1, CancelledSvg, CancelledSvg1, DollerSvg, MessageSvg, NewUsersSvg, PendingSvg, PendingSvg1, ProductSvg, TruckSvg, TruckSvg1 } from '../../Component/Widgets/SvgIcons';
import SVG1 from '../../assets/images/svg-icon/2.svg';
import SVG2 from '../../assets/images/svg-icon/3.svg';
import SVG3 from '../../assets/images/svg-icon/4.svg';
import SVG4 from '../../assets/images/svg-icon/6.svg';
import ChromeImage from '../../assets/images/dashboard/chrome.png';
import FirefoxImage from '../../assets/images/dashboard/firefox.png';
import SafariImage from '../../assets/images/dashboard/safari.png';
import { Image } from '../../AbstractElements';

export const EarningsData = [
    {
        id: 1,
        product: 'Earning',
        count: 6659,
        icon: <DollerSvg />,
        class: 'progress-gradient-secondary',
    },
    {
        id: 2,
        product: 'Products',
        count: 9856,
        icon: <ProductSvg />,
        class: 'progress-gradient-success',
    },
    {
        id: 3,
        product: 'Messages',
        count: 893,
        icon: <MessageSvg />,
        class: 'progress-gradient-primary',
    },
    {
        id: 4,
        product: 'New User',
        count: 45631,
        icon: <NewUsersSvg />,
        class: 'progress-gradient-danger',
    },
];
export const SalesData = [
    {
        id: 1,
        class1: 'widget-icon bg-light-danger',
        class2: 'icofont icofont-arrow-down font-danger',
        week: 'Today',
        class3: 'font-danger',
        logo: '$',
        num: '-36%($2658)',
        week2: ' Than yesterday'
    },
    {
        id: 2,
        class1: 'widget-icon bg-light-danger',
        class2: 'icofont icofont-arrow-down font-danger',
        week: 'Month',
        class3: 'font-danger',
        logo: '$',
        num: '-15%($369) ',
        week2: ' Than last month'
    },
    {
        id: 3,
        class1: 'widget-icon bg-light-success',
        class2: 'icofont icofont-arrow-up font-success',
        week: 'Week',
        class3: 'font-success',
        logo: '$',
        num: '+65%($69)',
        week2: 'Than yesterday'
    },
    {
        id: 4,
        class1: 'widget-icon bg-light-success',
        class2: 'icofont icofont-arrow-up font-success',
        week: 'Week',
        class3: 'font-success',
        logo: '$',
        num: '+65%($69)',
        week2: 'Than yesterday'
    },
];
export const Sales2Data = [
    {
        id: 1,
        class: 'widget-icon bg-light-primary',
        icon1: <BoxSvg />,
        title: 'Pending  Order',
        num1: '783',
        num2: '12%',
        class1: 'icofont icofont-arrow-down',
        icon2: <BoxSvg1 />,
    },
    {
        id: 2,
        class: 'widget-icon bg-light-warning',
        icon1: <PendingSvg />,
        title: 'Pending  Order',
        num1: '783',
        num2: '12%',
        class1: 'icofont icofont-arrow-down',
        icon2: <PendingSvg1 />,
    },
    {
        id: 3,
        class: 'widget-icon bg-light-success',
        icon1: <TruckSvg />,
        title: 'Pending  Order',
        num1: '783',
        num2: '12%',
        class1: 'icofont icofont-arrow-down',
        icon2: <TruckSvg1 />,
    },
    {
        id: 4,
        class: 'widget-icon bg-light-warning',
        icon1: <CancelledSvg />,
        title: 'Pending  Order',
        num1: '783',
        num2: '12%',
        class1: 'icofont icofont-arrow-down',
        icon2: <CancelledSvg1 />,
    },
];
export const RecentActivityData = [
    {
        id: 1,
        title: 'Any desktop publishing pack ages editors.',
    },
    {
        id: 2,
        title: 'Contrary to popular belief, Lorem Ipsum is not simply.',
    },
    {
        id: 3,
        title: 'Established fact that a reader will be distracted lorem.',
    },
    {
        id: 4,
        title: 'Established fact that a reader will be distracted lorem.',
    }
];
export const SocialHandelData = [
    {
        id: 1,
        img: SVG1,
        title: 'Facebook'
    },
    {
        id: 2,
        img: SVG2,
        title: 'Twitter'
    },
    {
        id: 3,
        img: SVG4,
        title: 'Linkedin'
    },
    {
        id: 4,
        img: SVG3,
        title: 'Instagram'
    }
];
export const BrowserWidgetsCardData = [
    {
        id: 1,
        data: <tr>
            <td><Image attrImage={{ src: `${ChromeImage}`, alt: '' }} /></td>
            <td>Google Chrome</td>
            <td>28%</td>
            <td>76%</td>
            <td>36%</td>
        </tr>
    },
    {
        id: 2,
        data: <tr>
            < td > <Image attrImage={{ src: `${FirefoxImage}`, alt: '' }} /></td>
            <td>Mozilla Firefox</td>
            <td>28%</td>
            <td>76%</td>
            <td>36%</td>
        </tr >
    },
    {
        id: 3,
        data: <tr>
            < td > <Image attrImage={{ src: `${SafariImage}`, alt: '' }} /></td >
            <td>Safari (web browser)</td>
            <td>28%</td>
            <td>76%</td>
            <td>36%</td>
        </tr >
    }
];
export const cartProducts = [
    {
        id: 1,
        details: 'Dummy text usedout print',
        qty: '10',
        status: 'Done',
        statusColor: 'primary',
        price: '$6523',
        className: 'badge-light-success'
    },
    {
        id: 2,
        details: 'Graphic or web designs',
        qty: '20',
        status: 'Pending',
        statusColor: 'primary',
        price: '$6565',
        className: 'badge-light-warning'
    },
    {
        id: 3,
        details: 'Attributed Passage',
        qty: '40',
        status: 'Done',
        statusColor: 'primary',
        price: '$9361',
        className: 'badge-light-success'
    },
    {
        id: 4,
        details: 'Unknown typesetter',
        qty: '05',
        status: 'In process',
        statusColor: 'primary',
        price: '$2658',
        className: 'badge-light-info'
    },
    {
        id: 5,
        details: 'Have scrambled',
        qty: '08',
        status: 'Pending',
        statusColor: 'primary',
        price: '$6328',
        className: 'badge-light-warning'
    },
    {
        id: 6,
        details: 'Type specimen',
        qty: '12',
        status: 'Pending',
        statusColor: 'primary',
        price: '$4852',
        className: 'badge-light-warning'
    },
];
export const employeeStatus = [
    {
        id: 1,
        imagepath: 'user/4.jpg',
        title: 'John Deo',
        online: '14+ online',
        position: 'Designer',
        skill: '30%',
        exp: '2 year',
        classname: 'primary'
    },
    {
        id: 2,
        imagepath: 'user/1.jpg',
        title: 'Holio Mako',
        online: '250+ online',
        position: 'Developer',
        skill: '70%',
        exp: '3 year',
        classname: 'secondary'
    },
    {
        id: 3,
        imagepath: 'user/5.jpg',
        title: 'Mohsib lara',
        online: '99+ online',
        position: 'tester',
        skill: '60%',
        exp: '5 month',
        classname: 'primary'
    },
    {
        id: 4,
        imagepath: 'user/6.jpg',
        title: 'Hileri Soli',
        online: '150+ online',
        position: 'Designer',
        skill: '25%',
        exp: '3 month',
        classname: 'secondary'
    },
    {
        id: 5,
        imagepath: 'user/7.jpg',
        title: 'Pusiz bia',
        online: '19+ online',
        position: 'Developer',
        skill: '90%',
        exp: '5 year',
        classname: 'primary'
    }
];