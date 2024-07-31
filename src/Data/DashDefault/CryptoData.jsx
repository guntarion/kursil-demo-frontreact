import React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';
import { H6 } from '../../AbstractElements';
import { BitCoinSvg, EthereumSvg, LitecoinSvg, RippleSvg } from '../../Component/DashBoard/SvgIcons';

export const TradingActivityData = [
    {
        id: 1,
        arrow: <ArrowUp className='font-success' />,
        class: 'table-box-img bg-light-primary',
        icon: <BitCoinSvg />,
        name1: <div className="avatar-details"><a href="#javascript">
            <H6>Bitcoin</H6></a><span> BTC</span></div>,
        num1: <td><H6>$9,594.72</H6><span>1,258.00 AKT</span></td>,
        date: <span>11:30 AM - 16 May 2022</span>,
        status: <div className="badge badge-light-primary">Buy</div>
    },
    {
        id: 2,
        arrow: <ArrowDown className='font-danger' />,
        class: 'table-box-img bg-light-secondary',
        icon: <RippleSvg />,
        name1: <div className="avatar-details"><a href="#javascript">
            <H6>Ripple</H6></a><span> BTC</span></div>,
        num1: <td><H6>0.04382 XRP</H6><span>2,364.85 B20</span></td>,
        date: <span>12:30 AM - 05 Apr 2022</span>,
        status: <div className="badge badge-light-secondary">Sell</div>
    },
    {
        id: 3,
        arrow: <ArrowUp className='font-success' />,
        class: 'table-box-img bg-light-info',
        icon: <EthereumSvg />,
        name1: <div className="avatar-details"><a href="#javascript">
            <H6>Ethereum</H6></a><span> BTC</span></div>,
        num1: <td><H6>0.0445 ETH</H6><span>783.56 MIR</span></td>,
        date: <span>10:30 AM - 20 Jun 2022</span>,
        status: <div className="badge badge-light-primary">Buy</div>
    },
    {
        id: 4,
        arrow: <ArrowDown className='font-danger' />,
        class: 'table-box-img bg-light-warning',
        icon: <LitecoinSvg />,
        name1: <div className="avatar-details"><a href="#javascript">
            <H6>Litecoin</H6></a><span> BTC</span></div>,
        num1: <td><H6>0.00255 BTC</H6><span>307.94 USF</span></td>,
        date: <span>1:30 AM - 12 Apr 2022</span>,
        status: <div className="badge badge-light-secondary">Sell</div>
    },
];