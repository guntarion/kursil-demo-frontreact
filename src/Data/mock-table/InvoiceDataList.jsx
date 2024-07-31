import { H6, P } from '../../AbstractElements';
import React from 'react';
import { Label } from 'reactstrap';

export const InvoiceListData = [
  {
    Item_Description: <td>
      <Label>Lorem Ipsum</Label>
      <P attrPara={{ className: 'm-0' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
    </td>,
    Hours: <P attrPara={{ className: 'itemtext digits' }}>5</P>,
    Rate: <P attrPara={{ className: 'itemtext digits' }}>$75</P>,
    Sub_total: <P attrPara={{ className: 'itemtext digits' }}>$375.00</P>
  },
  {
    Item_Description: <td>
      <Label>Lorem Ipsum</Label>
      <P attrPara={{ className: 'm-0' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
    </td>,
    Hours: <P attrPara={{ className: 'itemtext digits' }}>10</P>,
    Rate: <P attrPara={{ className: 'itemtext digits' }}>$75</P>,
    Sub_total: <P attrPara={{ className: 'itemtext digits' }}>$750.00</P>
  },
  {
    Item_Description: <td>
      <Label>Lorem Ipsum</Label>
      <P attrPara={{ className: 'm-0' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
    </td>,
    Hours: <P attrPara={{ className: 'itemtext digits' }}>3</P>,
    Rate: <P attrPara={{ className: 'itemtext digits' }}>$75</P>,
    Sub_total: <P attrPara={{ className: 'itemtext digits' }}>$225.00</P>
  },
  {
    Item_Description: <td>
      <Label>Lorem Ipsum</Label>
      <P attrPara={{ className: 'm-0' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>
    </td>,
    Hours: <P attrPara={{ className: 'itemtext digits' }}>10</P>,
    Rate: <P attrPara={{ className: 'itemtext digits' }}>$75</P>,
    Sub_total: <P attrPara={{ className: 'itemtext digits' }}>$750.00</P>
  },
  {
    Hours: 'HST',
    Rate: '13%',
    Sub_total: '$419.25'
  },
  {
    Rate: <td className="Rate">
      <H6 className="mb-0 p-2">Total</H6>
    </td>,
    Sub_total: <td className="payment digits">
      <H6 className="mb-0 p-2">$3,644.25</H6>
    </td>
  },
];
export const InvoiceColumns = [
  {
    name: <H6>Item Description</H6>,
    selector: 'Item_Description',
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: <H6>Hours</H6>,
    selector: 'Hours',
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: <H6>Rate</H6>,
    selector: 'Rate',
    sortable: true,
    center: true,
  },
  {
    name: <H6>Sub-total</H6>,
    selector: 'Sub_total',
    sortable: true,
    center: true,
  },
];