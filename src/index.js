import {sum} from "./sum";
import style from "./css/index.scss";
import Icon from "./assets/img/qq.png";


let heading = document.querySelector("#demo"),
    sumValue = sum(10,5);

heading.innerHTML = `10+5 = ${sumValue}`;
