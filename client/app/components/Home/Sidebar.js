import React, { Component } from "react";
import { Link } from "@reach/router"
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>
        <div className="nav-side-menu">
          {/* <div className="brand">Edit this line later</div> */}
          <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

          <div className="menu-list">

            <ul id="menu-content" className="menu-content collapse out">
              <li>
                <i className="fa fa-globe fa-lg"></i>
                <a href="#">
                  Dashboard
                </a>
                <Link to="/contactform">contactform</Link>
              </li>

              <li data-toggle="collapse" data-target="#products" className="collapsed active">
                <i className="fa fa-gift fa-lg"></i><a href="#">UI Elements </a>
              </li>
              <ul className="sub-menu collapse" id="products">
                <li className="active"><a href="#">CSS3 Animation</a></li>
                <li><a href="#">General</a></li>

              </ul>


              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <i className="fa fa-globe fa-lg"></i><a href="#"> Services </a>
              </li>
              <ul className="sub-menu collapse" id="service">
                <li>New Service 1</li>
                <li>New Service 2</li>
                <li>New Service 3</li>
              </ul>


              <li data-toggle="collapse" data-target="#new" className="collapsed">
                <i className="fa fa-car fa-lg"></i><a href="#"> New </a>
              </li>
              <ul className="sub-menu collapse" id="new">
                <li>New New 1</li>
                <li>New New 2</li>
                <li>New New 3</li>
              </ul>


              <li>
                <i className="fa fa-user fa-lg"></i>
                <a href="#">
                  Profile
                </a>
              </li>

              <li>
                <i className="fa fa-users fa-lg"></i>
                <a href="#">
                  Users
                 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;