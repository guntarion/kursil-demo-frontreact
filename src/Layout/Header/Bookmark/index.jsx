import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Input } from 'reactstrap';
import { MENUITEMS } from '../../SideBar-Layout/Menu';
import { LI, UL } from '../../../AbstractElements';
import ListOfMenu from './ListOfMenu';
import EmpltyClass from './EmptyClass';
import BackBtns from './BackBtn';
import CustomContext from '../../../_helper/customizer';
import RemoveBookmark from './RemoveBookmark';
import { HeaderBookmarkSvg } from '../../../Data/svgIcons';

const Bookmarks = () => {
    // eslint-disable-next-line
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const { setIsClose } = useContext(CustomContext);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(false);// eslint-disable-next-line
    const [bookmarkSearch, SetBookmarkSearch] = useState(false);
    const [bookmarkItems, setBookmarkItems] = useState([]);
    const [searchIcon, setSearchIcon] = useState(false);
    const [bookmarkDropDown, setBookmarkDropDown] = useState(false);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchValue('');
            setSearchResult([]);
            SetBookmarkSearch(false);
            setIsClose(false);
        }// eslint-disable-next-line
    }, []);
    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchIcon(true);
        } else {
            setSearchIcon(false);
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
        mainmenu.map(menuItems => {
            menuItems.Items.filter(items => {
                if (items.bookmark) {
                    setBookmarkItems(bookmarkItems => [...bookmarkItems, items]);
                }
                return items;
            });
            return menuItems;
        });
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [mainmenu, escFunction]);
    const addFix = () => {
        setIsClose(true);
    };
    const removeFix = () => {
        setSearchValue(searchValue);
    };
    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix();
        const items = [];
        setSearchValue(keyword);
        mainmenu.map(menuItems => {
            menuItems.Items.filter(Items => {
                if (Items.title.toLowerCase().includes(keyword) && Items.type === 'link') {
                    items.push(Items);
                }
                if (!Items.children) return false;
                Items.children.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = Items.icon;
                        items.push(subItems);
                    }
                    if (!subItems.children) return false;
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = Items.icon;
                            items.push(suSubItems);
                        }
                        return suSubItems;
                    });
                    return subItems;
                });
                setSearchResult(items);
                checkSearchResultEmpty(items);
                return Items;
            });
            return menuItems;
        });
    };
    const removeFixCallback = useCallback((searchVal) => {
        setSearchValue(searchVal);
    }, []);
    const setCallbackBookmark = useCallback((valueAdd) => {
        setBookmarkItems(valueAdd);
    }, []);
    return (
        <Fragment>
            <LI attrLI={{ className: 'onhover-dropdown' }}>
                <div className="notification-box" onClick={() => setBookmarkDropDown(!bookmarkDropDown)}><HeaderBookmarkSvg /></div>
                <div className={`onhover-show-div bookmark-flip ${bookmarkDropDown ? 'active' : ''}`}>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <RemoveBookmark bookmarkItems={bookmarkItems} />
                            <div className="back dropdown-title">
                                <UL>
                                    <LI>
                                        <div className="bookmark-dropdown flip-back-content">
                                            <Input type="text" placeholder="search..." value={searchValue}
                                                onChange={(e) => handleSearchKeyword(e.target.value)} />
                                            <ListOfMenu removeFix={removeFixCallback} bookmarkItems={bookmarkItems} setCallbackBookmark={setCallbackBookmark} searchValue={searchValue} setBookmarkItems={setBookmarkItems} searchResult={searchResult} setSearchValue={setSearchValue}
                                                setSearchResult={setSearchResult} />
                                            <EmpltyClass searchIcon={searchIcon} />
                                        </div>
                                    </LI>
                                    <BackBtns />
                                </UL>
                            </div>
                        </div>
                    </div>
                </div>
            </LI>
        </Fragment>
    );
};

export default Bookmarks;