import {Component} from 'react';
import style from './Layout.module.css';
import picture from '../../img/ava.jpg';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Development from './../Development/Development';
import Home from '../Home/Home';
import Music from '../Music/Music'    
import Graphics from '../Graphics/Graphics';
import Navigation from '../Navigation/Navigation';



export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.onShowNavMenu = this.onShowNavMenu.bind(this);

        this.state = {
            menuVisible: false
        }

    }

    onShowNavMenu (e) {
        let btn = e.currentTarget;
        
        if (btn.localName === 'button') {
            this.setState((state) => ({menuVisible: !state.menuVisible}))
        }
    }

    render() {
        return (
            <HashRouter>
                <div className={style.layout}>

                    <header className={style.header}>
                        <div className={style.headerLayout}>
                            <div className={style.headerTopBar}>
                                <img src={picture} alt=""  width="128" height="128"/>
                            </div>

                            <Navigation  menuVisible={this.state.menuVisible} />
                            <button className={style.headerBnBurger} type="button" onClick={this.onShowNavMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </header>

                    <main className={style.main}>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/dev" element={<Development />}></Route>
                            <Route path="/music" element={<Music />}></Route>
                            <Route path="/graphics" element={<Graphics />}></Route>

                        </Routes>
                    </main>

                    <footer className={style.footer}>
                        <div className={style.inner}></div>
                    </footer>
                </div>
            </HashRouter>
        )
    }
}