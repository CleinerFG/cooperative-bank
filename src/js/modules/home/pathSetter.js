import "../menu/pathSetter.js";
import "../footer/srcSetter.js";
import { setSrc } from "../common/assetsPaths.js";
import { setHref } from "../common/htmlPagesPaths.js";

// Financial Statement
setSrc(".visibility-icon", "icons", "icon-visibility-off.svg");

// Wallet
setSrc("#card-icon-loans", "icons", "icon-loans.svg");
setHref("#card-link-loans", "wallet", "loans.html");

setSrc("#card-icon-debtors", "icons", "icon-debtors.svg");
setHref("#card-link-debtors", "wallet", "debtors.html");

setSrc("#card-icon-payments", "icons", "icon-payments.svg");
setHref("#card-link-payments", "wallet", "payments.html");

// Investments
setSrc("#card-icon-all", "icons", "icon-all.svg");
setHref("#card-link-all", "investments", "all.html");

setSrc("#card-icon-reports", "icons", "icon-reports.svg");
setHref("#card-link-reports", "investments", "reports.html");
