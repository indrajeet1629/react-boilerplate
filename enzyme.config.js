/* eslint-disable import/no-extraneous-dependencies */

/** Used in jest.config.js */
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// const Enzyme = require("enzyme");
// const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });
