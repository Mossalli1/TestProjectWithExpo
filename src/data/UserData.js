import React from "react";
import Userid_2 from "./2.json";
import Userid_7 from "./7.json";
import Userid_2627 from "./2627.json";
import Userid_10780 from "./10780.json";
import Userid_13116 from "./13116.json";
import Userid_14842 from "./14842.json";
import Userid_17172 from "./17172.json";
import Userid_20566 from "./20566.json";
import Userid_21632 from "./21632.json";
import Userid_27366 from "./27366.json";
import Userid_29127 from "./29127.json";
import Userid_30024 from "./30024.json";
import Userid_30332 from "./30332.json";
import Userid_31870 from "./31870.json";
import Userid_33550 from "./33550.json";
import Userid_34407 from "./34407.json";
import Userid_34429 from "./34429.json";
import Userid_36495 from "./36495.json";
import Userid_37327 from "./37327.json";
import Userid_38639 from "./38639.json";

export default function UserData() {
  //Users Array
  const insert = (arr, ...items) => {
    arr.push(...items);
  };

  var UsersData = [];

  insert(
    UsersData,
    Userid_2,
    Userid_7,
    Userid_2627,
    Userid_10780,
    Userid_13116,
    Userid_14842,
    Userid_17172,
    Userid_20566,
    Userid_21632,
    Userid_27366,
    Userid_29127,
    Userid_30024,
    Userid_30332,
    Userid_31870,
    Userid_33550,
    Userid_34407,
    Userid_34429,
    Userid_36495,
    Userid_37327,
    Userid_38639
  );

  return UsersData;
}
