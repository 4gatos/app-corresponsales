import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import { CloudinaryContext, Image } from 'cloudinary-react';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import DataList from '../components/DataList';
import config from '../config/index';
import Markdown from '../components/basics/Markdown';

let PositionMap;
if (process.browser) {
  PositionMap = dynamic(() => import('../components/PositionMap'));
}

class Battle extends Component {
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
    const { battle } = this.props;
    console.log({ battle });
    return (
      <CloudinaryContext cloudName="plasocloudinary">
        <div className="sheet battle">
          <div className="container">
            <div className="main-img">
              <Image publicId={battle.mainImg} />
            </div>
            <h1>{battle.name}</h1>
            <div className="cards">
              <Card title="Ficha técnica">
                <DataList>
                  <ListItem text={battle.place} icon="icon-pointer" />
                  <ListItem text={battle.date} icon="icon-calendar" />
                  <ListItem text={battle.duration} icon="icon-tempus-fugit" />
                </DataList>
              </Card>
              <Card title="Historia" collapsible>
                <Markdown string={battle.history} />
              </Card>
              <Card title="Descripción geográfica" collapsible>
                <Markdown string={battle.geographicDescription} />
                {process.browser && (
                  <PositionMap
                    lng={battle.geographicLng}
                    lat={battle.geographicLat}
                    type="battle"
                    zoom={6}
                  />
                )}
              </Card>
              {battle && battle.otherFields && battle.otherFields.length > 0 && (
                battle.otherFields.map(({ title, body, img }) => (
                  <Card title={title} collapsible>
                    <p>{body}</p>
                    <Image publicId={img} />
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

Battle.propTypes = {
  showBackButton: PropTypes.func.isRequired,
  hideBackButton: PropTypes.func.isRequired,
  battle: PropTypes.shape({}).isRequired,
};

Battle.getInitialProps = async ({ query }) => {
  const battleRes = await fetch(`${config.apiUrl}/battles/${query.id}`);
  const battle = await battleRes.json();

  return {
    battle,
  };
};

export default Battle;
