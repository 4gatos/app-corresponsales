import React from 'react';
import ListCard from '../components/ListCard';

const List = () => (
  <div className="main">
    <div className="container">
      <div className="list-category correspondents">
        <h1>Corresponsales</h1>
        <div className="list-cards">
          <ListCard
            img="/static/img/corresponsallist.jpg"
            imgText="George Mitchell"
            title="George Mitchell"
            body="El Corresponsal de Guerra descrito estuvo en el frente de la primera guerra carlista."
            route="correspondent"
            slug="george-mitchell"
          />
        </div>
      </div>
      <div className="list-category ">
        <h1>Batallas</h1>
        <div className="list-cards">
          <ListCard
            img="/static/img/batalla.jpg"
            imgText="Batalla de Villar de los Navarros"
            title="Villar de los Navarros"
            body="24 de agosto de 1837. Batalla carlista que ocurrió en Villar de los Navarros."
            route="battle"
            slug="villar-de-los-navarros"
          />
        </div>
      </div>
    </div>
  </div>
);

export default List;
