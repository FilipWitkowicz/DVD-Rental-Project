import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/Navbar.module.scss';
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { FaUser, FaFilm, FaSearch } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
const Navbar = () => {
    const [down, setDown] = useState(false);
    const [active, setActive] = useState(false);
    const [userMenu, setuserMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeCategories, setactiveCategories] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const genres = [
        "Action",
        "Comedy",
        "Drama",
        "Horror",
        "Sci-Fy",
        "Romance",
        "Martial Art",
        "Kids",
        "Other"
    ];
    const searchButtonEffect = () => {
        if (active == true) {
            setactiveCategories(false)
        }
        setActive(!active)

    }
    return (
        <div className={styles.NavbarAll}>
            <div className={styles.Navbar}>
                <FaSearch className={styles.searchButton} onClick={() => searchButtonEffect(!active)} />
                {windowWidth >= 500 || !active ?
                    (<img src="" alt="DVDx" className={styles.logo} />) :
                    <div className={active ? styles.searchActive : styles.search}>
                        <PiDotsNineBold className={styles.categoryMenu} onClick={() => setactiveCategories(!activeCategories)} />
                        <input type="text" placeholder='Search...' className={styles.searchPole}></input>
                    </div>
                }
                <div className={styles.search}>
                    <PiDotsNineBold className={styles.categoryMenu} onClick={() => setactiveCategories(!activeCategories)} />
                    <input type="text" placeholder='Search...' className={styles.searchPole}></input>
                </div>
                <GiHamburgerMenu className={styles.hamburger} onClick={() => setuserMenu(!userMenu)} />
                <div className={styles.user} style={{ overflow: down ? 'visible' : 'hidden' }}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}><img src="" alt=""></img></div>
                        <p>Marco</p>
                        <IoIosArrowBack className={down ? styles.arrowdown : styles.arrow} onClick={() => setDown(!down)} />
                    </div>
                    <ul className={styles.dropdownList}>
                        <hr></hr>
                        <li><FaUser className={styles.iconMenu}/>My profile</li>
                        <li><FaFilm className={styles.iconMenu} />My films</li>
                        <li><CiLogout className={styles.iconMenu}/>Log out</li>
                    </ul>
                </div>
                </div>
            <div className={styles.userActive} style={{ display: userMenu && windowWidth <= 500 ? 'inline' : 'none' }}>
                    <ImCancelCircle className={styles.iconCancel} onClick={() => setuserMenu(!userMenu)} />
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}><img src="" alt=""></img></div>
                        <p>Marco</p>
                    </div>
                    <ul className={styles.dropdownList}>
                        <hr></hr>
                        <li><FaUser className={styles.iconMenu} />My profile</li>
                        <li><FaFilm className={styles.iconMenu} />My films</li>
                        <li><CiLogout className={styles.iconMenu} />Log out</li>
                    </ul>
            </div>
            <div className={styles.categories} style={{ display: !activeCategories ? 'none' : 'flex' }}>
                {genres.map((genre, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={genre}
                            value={genre}
                            defaultChecked={true}
                        />
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Navbar;