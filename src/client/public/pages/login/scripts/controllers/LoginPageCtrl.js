import { PageCtrl } from "../../../../js/controllers/PageCtrl.js";
import { LoginPageView } from "../views/LoginPageView.js";

/**
 * Page controler for public Login page
 * 
 * @class
 * @extends PageCtrl
 */

export class LoginPageCtrl extends PageCtrl {
  get _ViewClass(){
    return LoginPageView;
  }

  _initControllers(){
    // pass
  }
}