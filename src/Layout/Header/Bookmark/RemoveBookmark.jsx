import React, { Fragment } from 'react';
import { H3, UL } from '../../../AbstractElements';
import { Bookmark } from '../../../Constant';
import BookmarkList from './BookmarkList';

const RemoveBookmark = ({ bookmarkItems }) => {
    return (
        <Fragment>
            <div className="front dropdown-title">
                <H3 attrH3={{ className: 'mb-3' }}>{Bookmark}</H3>
                <UL attrUL={{ className: 'simple-list pb-0 bookmark-dropdown' }}>
                    <BookmarkList bookmarkItems={bookmarkItems} />
                </UL>
            </div>
        </Fragment>
    );
};
export default RemoveBookmark;