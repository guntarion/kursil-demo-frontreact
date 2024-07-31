import React, { useState, useEffect, useCallback, useContext, Fragment } from 'react';
import { Col, Input } from 'reactstrap';
import { MENUITEMS } from '../SideBar-Layout/Menu';
import ListOfMenu from './Bookmark/ListOfMenu';
import EmpltyClass from './Bookmark/EmptyClass';
import CustomContext from '../../_helper/customizer';
import { Search } from 'react-feather';
import { SearchIconss } from '../../Data/svgIcons';

const Searchbar = () => {
    const mainmenu = MENUITEMS;
    const [searchValue, setSearchValue] = useState('');
    const [searchIcon, setSearchIcon] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const { setIsClose } = useContext(CustomContext);
    const [IsOpen, setIsOpen] = useState(false);
    const OnhandelClick = () => setIsOpen(!IsOpen);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setSearchValue('');
            setSearchResult([]);
            setIsClose(false);
        }// eslint-disable-next-line
    }, []);
    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [escFunction, searchValue]);
    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchIcon(true);
        } else {
            setSearchIcon(false);
        }
    };
    const addFix = () => {
        setSearchToggle(true);
    };
    const removeFix = () => {
        setSearchValue('');
        setSearchToggle(false);
    };
    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix();
        const items = [];
        setSearchValue(keyword);
        mainmenu.map(menuItems => {
            menuItems.Items.filter(mItems => {
                if (mItems.title.toLowerCase().includes(keyword) && mItems.type === 'link') {
                    items.push(mItems);
                }
                if (!mItems.children) return false;
                mItems.children.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = mItems.icon;
                        items.push(subItems);
                    }
                    if (!subItems.children) return false;
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = mItems.icon;
                            items.push(suSubItems);
                        }
                        return suSubItems;
                    });
                    return subItems;
                });
                checkSearchResultEmpty(items);
                setSearchResult(items);
                return mItems;
            });
            return menuItems;
        });
    };
    return (
        <Fragment>
            <Col className="left-side-header ps-0 d-md-block dash-10">
                <div className="w-100 searchbar">
                    <div className="resp-serch-box d-md-none resp-serch-input">
                        <Search onClick={() => OnhandelClick(!IsOpen)} /></div>
                    <div className={`input-group form-group search-form ${IsOpen ? 'open' : ''}`}>
                        <span className='input-group-text'><SearchIconss /></span>
                        <Input type="text" placeholder="Search here.."
                            defaultValue={searchValue}
                            onChange={(e) => handleSearchKeyword(e.target.value)} />
                        <ListOfMenu searchValue={searchValue} searchResult={searchResult} removeFix={removeFix} searchBar={true} searchToggle={searchToggle} />
                        <EmpltyClass searchIcon={searchIcon} search={true} />
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default Searchbar;