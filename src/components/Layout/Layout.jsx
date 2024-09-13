import {Component} from 'react';
import style from './Layout.module.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Development from './../Development/Development';
import Home from '../Home/Home';
import Music from '../Music/Music'    
import Graphics from '../Graphics/Graphics';
import Header from './../Header/Header';
import { pictures } from '../../data/pictures';
import PictureDetail from '../PictureDetail/PictureDetail';    


export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.onShowNavMenu = this.onShowNavMenu.bind(this);
        this.getDetail = this.getDetail.bind(this);
        this.state = {
            menuVisible: false,
            showBicPic: false,
            picturesData: pictures
        }
    }

    onShowNavMenu (e) {
        let btn = e.currentTarget;
        if (btn.localName === 'button') {
            this.setState((state) => ({menuVisible: !state.menuVisible}))
        }
    }
    getDetail (key) {
        // let str = key.replace(/[^\d]/g, '');
        key = +key
        return this.state.picturesData.find(i => i.key === key);
    }

    render() {
        return (
            
            <HashRouter>
                
                <div className={style.layout}>
                

                    <Header
                        menuVisible={this.state.menuVisible}
                        onShowNavMenu={this.onShowNavMenu}
                    />

                    <main className={style.main}>
                        
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}>
                            </Route>

                            <Route
                                path="/dev"
                                element={<Development />}>
                            </Route>

                            <Route
                                path="/music"
                                element={<Music />}>
                            </Route>

                            <Route 
                                path="/graphics" 
                                element={
                                        <Graphics
                                            state={this.state} 
                                            data={pictures} />
                                        }>
                            </Route>

                            <Route
                                path='/:key'
                                element={
                                    <PictureDetail
                                        state={this.state}
                                        getDetail={this.getDetail} />
                                }>
                            </Route>
                        </Routes>

                    </main>
{/* 
                    <footer className={style.footer}>
                        <div className={style.inner}>
                            <p className="version">v:2.0.1</p>
                        </div>
                    </footer> */}
                </div>
            </HashRouter>
        )
    }
}