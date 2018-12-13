import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { CloudinaryContext } from 'cloudinary-react';
import ListCard from '../components/ListCard';
import config from '../config/index';

const List = ({ battles, correspondants }) => (
  <div className="main">
    <div className="container">
      <div className="list-category correspondents">
        <h1>Corresponsales</h1>
        <CloudinaryContext cloudName="plasocloudinary">
          <div className="list-cards">
            {correspondants && correspondants.length > 0
              ? correspondants.map(correspondant => (
                <ListCard
                  key={correspondant.slug}
                  img={correspondant.backgroundImg}
                  title={correspondant.name}
                  body={correspondant.historicDetails}
                  route="correspondent"
                  slug={correspondant.slug}
                />
              ))
              : <p>No hay batallas</p>
            }
          </div>
        </CloudinaryContext>
      </div>
      <div className="list-category ">
        <h1>Hitos históricos</h1>
        <CloudinaryContext cloudName="plasocloudinary">
          <div className="list-cards">
            {battles && battles.length > 0
              ? battles.map(battle => (
                <ListCard
                  key={battle.slug}
                  img={battle.mainImg}
                  title={battle.name}
                  body={battle.history}
                  route="battle"
                  slug={battle.slug}
                />
              ))
              : <p>No hay batallas</p>
            }
          </div>
        </CloudinaryContext>
      </div>
    </div>
  </div>
);

List.getInitialProps = async () => {
  const battleRes = await fetch(`${config.apiUrl}/battles/basic`);
  const battles = await battleRes.json();
  const correspondantsRes = await fetch(`${config.apiUrl}/correspondants/basic`);
  const correspondants = await correspondantsRes.json();

  return {
    battles,
    correspondants,
  };
};

List.propTypes = {
  battles: PropTypes.arrayOf(PropTypes.object).isRequired,
  correspondants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
