import { InputCtrl } from "./InputCtrl.js";
import { monetaryValueToNumber } from "../../utils/stringUtils.js";

export class InputMonetaryCtrl extends InputCtrl {
  _build() {
    this._view.buildDefault();
  }

  _defineValidations() {
    this._view.validateMonetary();
    const checkValidValue = (value) => monetaryValueToNumber(value) === 0;
    this._view.validateFail(checkValidValue);
  }
}
