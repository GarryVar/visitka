<<<<<<< HEAD
import { Component } from "react";
import style from "./Layout.module.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Development from "./../Development/Development";
import Home from "../Home/Home";
import Music from "../Music/Music";
import Graphics from "../Graphics/Graphics";
import Header from "./../Header/Header";
import PictureDetail from "../PictureDetail/PictureDetail";
import stars from "../../images/stars-set-2.svg";
=======
import {Component} from 'react';
import style from './Layout.module.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Development from './../Development/Development';
import Home from '../Home/Home';
import Music from '../Music/Music'    
import Graphics from '../Graphics/Graphics';
import Header from './../Header/Header';
import PictureDetail from '../PictureDetail/PictureDetail';
import {menuItemsData} from "../../data/menuItems";

>>>>>>> cf931512eb27065fc0cb7965da9b959e564d76b7

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.onShowNavMenu = this.onShowNavMenu.bind(this);
    this.getDetail = this.getDetail.bind(this);
    this.onShowAllPictures = this.onShowAllPictures.bind(this);
    this.onShowWidePictures = this.onShowWidePictures.bind(this);
    this.onShowNormalPictures = this.onShowNormalPictures.bind(this);
    this.hideNavMenu = this.hideNavMenu.bind(this);

    this.state = {
      menuVisible: false,
      pictures: this.props.pictures,
    };
  }

  shwoThis() {
    console.log(this.props.children);
  }

  onShowAllPictures() {
    let allPictures = this.props.pictures.filter((picture) => picture);
    this.setState((state) => ({ pictures: allPictures }));
  }

  onShowWidePictures() {
    let widePictures = this.props.pictures.filter((i) => !i.wide);
    this.setState((state) => ({ pictures: widePictures }));
  }

  onShowNormalPictures() {
    let normalPictures = this.props.pictures.filter((i) => i.wide === true);
    this.setState((state) => ({ pictures: normalPictures }));
  }

  onShowNavMenu(e) {
    let btn = e.currentTarget;
    if (btn.localName === "button") {
      this.setState((state) => ({ menuVisible: !state.menuVisible }));
    }
  }

  hideNavMenu() {
    this.state.menuVisible &&
      this.setState((state) => ({ menuVisible: !state.menuVisible }));
  }

  getDetail(key) {
    return this.state.pictures.find((i) => i.key === key);
  }

  render() {
    return (
      <HashRouter>
        <div className={style.layout}>
          <Header
            hideNavMenu={this.hideNavMenu}
            menuVisible={this.state.menuVisible}
            onShowNavMenu={this.onShowNavMenu}
          />

          <main className={`${style.main} animate__animated animate__fadeIn`}>
            <img src={stars} alt="Звёзды"></img>
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/dev" element={<Development />}></Route>

<<<<<<< HEAD
              <Route
                path="/music"
                element={<Music tracks={this.props.tracks} />}></Route>
=======
    getDetail (key) {
        return this.state.pictures.find(i => i.key === key);
    };
    
    render() {
        return (
            <HashRouter>
                <div className={style.layout}>
                
                    <Header
                        menuItemsData={this.props.menuItemsData}
                        hideNavMenu={this.hideNavMenu}
                        menuVisible={this.state.menuVisible}
                        onShowNavMenu={this.onShowNavMenu}
                    />
>>>>>>> cf931512eb27065fc0cb7965da9b959e564d76b7

              <Route
                path="/graphics"
                element={
                  <Graphics
                    data={this.state.pictures}
                    onShowWidePictures={this.onShowWidePictures}
                    onShowNormalPictures={this.onShowNormalPictures}
                    onShowAllPictures={this.onShowAllPictures}
                  />
                }></Route>

              <Route
                path="/graphics/details/:key"
                element={
                  <PictureDetail
                    getDetail={this.getDetail}
                    onPicAnimate={this.onPicAnimate}
                  />
                }></Route>
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
    );
  }
}
