import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import { CloudinaryContext, Image } from 'cloudinary-react';
import Card from '../components/Card';
import DataList from '../components/DataList';
import ListItem from '../components/ListItem';
import config from '../config/index';
import Markdown from '../components/basics/Markdown';
import { Link } from '../routes/routes';

let PositionMap;
if (process.browser) {
  PositionMap = dynamic(() => import('../components/PositionMap'));
}


class Correspondent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { showBackButton } = this.props;
    showBackButton();
  }

  componentWillUnmount() {
    const { hideBackButton } = this.props;
    hideBackButton();
  }

  render() {
    const { correspondant } = this.props;
    console.log(correspondant);
    return (
      <CloudinaryContext cloudName="plasocloudinary">
        <div className="sheet correspondent">
          <div className="container">
            <div className="main-img double-img">
              <Image publicId={correspondant.backgroundImg} />
              <Image className="avatar" publicId={correspondant.mainImg} />
            </div>
            <h1>{correspondant.name}</h1>
            <div className="cards">
              <Card title="Ficha técnica">
                <DataList>
                  <ListItem text={correspondant.country} icon="icon-pointer" />
                  <ListItem text={correspondant.newspaper} icon="icon-newspaper" />
                  <ListItem text={correspondant.date} icon="icon-newspaper" />
                  <ListItem text="Batalla: Villar de los Navarros" icon="icon-swords" />
                </DataList>
              </Card>
              <Card title="Detalles Históricos" collapsible>
                <Markdown string={correspondant.historicDetails} />
              </Card>
              {correspondant.battle && (
                <Card title={`Batalla: ${correspondant.battle.name}`} collapsible>
                  {process.browser && (
                    <PositionMap
                      lng={correspondant.battle.geographicLng}
                      lat={correspondant.battle.geographicLat}
                      type="battle"
                      zoom={6}
                    />
                  )}
                  <p>{correspondant.battle.history}</p>
                  <Link route="battle" params={{ id: correspondant.battle.slug }}>
                    <a className="block-link">Ver más</a>
                  </Link>
                </Card>
              )}
              <Card title="Ruta del corresponsal" collapsible>
                <Markdown string={correspondant.geographicDescription} />
                {process.browser && (
                  <PositionMap
                    lng={correspondant.geographicLng || correspondant.coordinates[0][0]}
                    lat={correspondant.geographicLat || correspondant.coordinates[0][1]}
                    {...(correspondant.coordinates && correspondant.coordinates.length > 0
                      ? { coordinates: correspondant.coordinates } : null)
                    }
                    type="correspondent"
                    zoom={6}
                  />
                )}
              </Card>
              {correspondant && correspondant.otherFields
                && correspondant.otherFields.length > 0 && (
                correspondant.otherFields.map(({ title, body, img }) => (
                  <Card title={title} collapsible>
                    <p>{body}</p>
                    {img && (<Image publicId={img} />)}
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </CloudinaryContext>
    );
  }
}

Correspondent.propTypes = {
  showBackButton: PropTypes.func.isRequired,
  hideBackButton: PropTypes.func.isRequired,
  correspondant: PropTypes.shape({}).isRequired,
};

Correspondent.getInitialProps = async ({ query }) => {
  const correspondantRes = await fetch(`${config.apiUrl}/correspondants/${query.id}/basic`);
  const correspondant = await correspondantRes.json();

  return {
    correspondant,
  };
};

export default Correspondent;
