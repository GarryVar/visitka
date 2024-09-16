import {Component} from 'react';
import style from './Layout.module.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Development from './../Development/Development';
import Home from '../Home/Home';
import Music from '../Music/Music'    
import Graphics from '../Graphics/Graphics';
import Header from './../Header/Header';
import PictureDetail from '../PictureDetail/PictureDetail';


export default class Layout extends Component {
    constructor(props) {
        super(props);
  
        this.onShowNavMenu = this.onShowNavMenu.bind(this);
        this.getDetail = this.getDetail.bind(this);
        this.onPicAnimate = this.onPicAnimate.bind(this);

        this.state = {
            menuVisible: false,
            picAnimate: false,
            pictures: this.props.pictures
        }
    }
    
    onPicAnimate (e) {
        let image = e.currentTarget;
        if (image.localName === "img") {
            this.setState((state) => ({picAnimate: !state.picAnimate}))
            }

        }


    onShowNavMenu (e) {
        let btn = e.currentTarget;
        if (btn.localName === 'button') {
            this.setState((state) => ({menuVisible: !state.menuVisible}))
        }
    }

    getDetail (key) {
        return this.props.pictures.find(i => i.key === key);
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
                                            data={ this.props.pictures} />
                                        }>
         
                            </Route>
                            <Route
                                path="/:key"
                                element={
                                    <PictureDetail
                                        getDetail={this.getDetail}
                                        picAnimate={this.state.picAnimate}
                                        onPicAnimate={this.onPicAnimate} />
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