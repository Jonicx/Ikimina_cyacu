import { Col } from "react-bootstrap";
import Adminicon from "../../../../src/assets/icons8_school_director_48.png";
import HomeIcon from "../../../../src/assets/home_16pxn.png";
import PaperIcon from "../../../../src/assets/paperWhite.png";
import GridIcon from "../../../../src/assets/grid_16px.png";
import LogOutIcon from "../../../../src/assets/logout_rounded_left_16px.png";
import { Link } from "react-router-dom";
import { reverse } from "named-urls";
import RoutesName from "../../../app/config/routes";

import "./index.css";

export const SlideBar = () => {
  return (
    <>
      <Col lg={3} className="DarkPanel_Directions">
        <p className=" mt-3 mb-0 title text-capitalize text-bold text-center">
          | IKIMINA CYACU |
        </p>
        <p className="border-bottom mt-2"></p>

        <p className=" mt-0 Admin_Name text-capitalize text-center">
          <img src={Adminicon} alt="icon" className="mb-0 " /> <br />
          Admin
        </p>
        <p className="border-bottom mt-2 mb-1"></p>

        <Col lg={12} md={12} sm={12} xs={12}>
          <p className="text-left text-bold text-center">
            <Link
              to={reverse(RoutesName.home)}
              className="btn btn-outline-default text-center text-bold  py-0 mt-3"
            >
              <img src={HomeIcon} alt="icon" className="mb-2 mt-2 " />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              Home
            </Link>
          </p>

          <p className="text-left text-bold text-center">
            <Link
              to={reverse(RoutesName.pages.register)}
              className="btn btn-outline-default text-center text-bold  py-0 mt-3"
            >
              <img src={PaperIcon} alt="icon" className="mb-2 mt-2" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              Form
            </Link>
          </p>
          <p>
            <a href className="btn btn-outline-default text-center text-bold  py-0 mt-3">
              <img src={GridIcon} alt="icon" className="mb-2 mt-2 " />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              Tree
            </a>
          </p>
          <p className="text-left text-bold text-center">
            <Link
              to={reverse(RoutesName.pages.members)}
              className="btn btn-outline-default text-center text-bold  py-0 mt-3"
            >
              <img src={GridIcon} alt="icon" className="mb-2 mt-2 " />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              Tree
            </Link>
          </p>

          <br />
          <br />
          <br />
          <br />
          <br />
          <Link
            to={reverse(RoutesName.pages.adminLog)}
            className="text-left text-bold text-center white"
          >
            <p>Last LogOut: 18:00 11th/3/2020</p>
          </Link>

          <p className="text-left text-bold text-center">
            <Link
              to={reverse(RoutesName.auth.login)}
              href
              className="btn btn-outline-default text-center text-bold py-0 mt-3"
            >
              <img src={LogOutIcon} alt="icon" className="mb-2 mt-2 " />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Logout
            </Link>
          </p>
        </Col>
      </Col>
    </>
  );
};
