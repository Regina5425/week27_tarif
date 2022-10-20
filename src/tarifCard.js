import { Component } from "react";
import "./tarifCard.css";

class TarifCard extends Component {
  render() {
    const { price, traffic } = this.props;
    let classTarif = "tarif";
    let classColored = "";

    switch (price) {
      case 300:
        classColored += " color-1";
        break;
      case 450:
        classColored += " color-2";
        break;
      case 550:
        classTarif += " tarif--big";
        classColored += " color-3";
        break;
      case 1000:
        classColored += " color-4";
        break;
      default:
        classColored = "";
    }

    return (
      <div className={classTarif}>
        <div className={`tarif__title ${classColored}`}>
          <h2>Безлимитный {price}</h2>
        </div>
        <div className={`tarif__price ${classColored}`}>
          <sup>руб</sup> {price} <sub>/мес</sub>
        </div>
        <div className='tarif__traffic'>до {traffic} Мбит/сек</div>
        <div className='tarif__descr'>
          Объем включенного трафика не ограничен
        </div>
      </div>
    );
  }
}

export default TarifCard;
