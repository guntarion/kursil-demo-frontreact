import React, { Fragment, useEffect, useState } from 'react';
import SidebarIcon from './SidebarIcon';
import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';
import { MENUITEMS } from './Menu';

const SideBarLayout = (props) => {
    const id = window.location.pathname.split('/').pop();
    const layout = id;

    const [width, setWidth] = useState(0);
    const handleResize = () => {
        setWidth(window.innerWidth - 500);
    };
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [sidebartoogle, setSidebartoogle] = useState(true);
    const handleScroll = () => {
        if (window.scrollY > 400) {
            document.querySelector('.sidebar-main').className =
                'sidebar-main hovered';
        } else {
            if (document.getElementById('sidebar-main'))
                document.querySelector('.sidebar-main').className = 'sidebar-main';
        }
    };
    const setNavActive = (item) => {
        MENUITEMS.map((menuItems) => {
            menuItems.Items.filter((Items) => {
                if (Items !== item) {
                    Items.active = false;
                    document.querySelector('.sidebar-wrapper').classList.remove('active');
                }
                if (Items.children && Items.children.includes(item)) {
                    Items.active = true;
                    // document.querySelector('.sidebar-link').classList.add('active');
                }
                if (Items.children) {
                    Items.children.filter((submenuItems) => {
                        if (submenuItems.children && submenuItems.children.includes(item)) {
                            Items.active = true;
                            submenuItems.active = true;
                            return true;
                        } else {
                            return false;
                        }
                    });
                }
                return Items;
            });
            return menuItems;
        });
        item.active = !item.active;
        setMainMenu({ mainmenu: MENUITEMS });
    };
    useEffect(() => {
        document.querySelector('.left-arrow').classList.add('d-none');
        window.addEventListener('resize', handleResize);
        handleResize();
        const currentUrl = window.location.pathname;
        MENUITEMS.map((items) => {
            items.Items.filter((Items) => {
                if (Items.path === currentUrl) setNavActive(Items);
                if (!Items.children) return false;
                Items.children.filter((subItems) => {
                    if (subItems.path === currentUrl) setNavActive(subItems);
                    if (!subItems.children) return false;
                    subItems.children.filter((subSubItems) => {
                        if (subSubItems.path === currentUrl) {
                            setNavActive(subSubItems);
                            return true;
                        } else {
                            return false;
                        }
                    });
                    return subItems;
                });
                return Items;
            });
            return items;
        });
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [layout]);
    return (
        <Fragment>
            <SidebarLogo sidebartoogle={sidebartoogle} setSidebartoogle={setSidebartoogle} />
            <SidebarIcon />
            <SidebarMenu setMainMenu={setMainMenu} props={props} sidebartoogle={sidebartoogle} setNavActive={setNavActive} width={width} mainmenu={mainmenu} />
        </Fragment>
    );
};
export default SideBarLayout;