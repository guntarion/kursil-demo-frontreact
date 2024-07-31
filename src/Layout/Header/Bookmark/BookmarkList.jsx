import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { Btn, LI } from '../../../AbstractElements';
import { AddNewBookmark } from '../../../Constant';

const BookmarkList = (props) => {
    const { bookmarkItems = '' } = props;
    const addnewbookmark = () => {
        document.querySelector('.flip-card-inner').classList.add('flipped');
    };

    return (
        <Fragment>
            <Row>
                {bookmarkItems.map((items, index) => {
                    return (
                        <Col xs="4" className="text-center" key={index}>
                            <div className="bookmark-content">
                                <div className="bookmark-icon">
                                    <Link to={items.path}>
                                        <items.icon id={`${items[index]}`} />
                                    </Link>
                                </div>
                            </div>

                        </Col>
                    );
                })}
            </Row>
            <LI attrLI={{ className: 'text-center mt-2 pb-0' }}>
                <Btn attrBtn={{ className: 'flip-btn d-block w-100', color: 'primary', onClick: addnewbookmark }}>{AddNewBookmark}</Btn>
            </LI>
        </Fragment>
    );
};
export default BookmarkList;