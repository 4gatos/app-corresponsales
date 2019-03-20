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

class Source extends Component {
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
    const { source } = this.props;
    return (
      <CloudinaryContext cloudName="plasocloudinary">
        <div className="sheet battle">
          <div className="container">
            <div className="main-img">
              <Image publicId={source.mainImg} />
            </div>
            <h1>{source.name}</h1>
            <div className="cards">
              <Card title="Ficha técnica">
                <DataList>
                  <ListItem text={source.place} icon="icon-pointer" />
                  <ListItem text={source.date} icon="icon-calendar" />
                  <ListItem text={source.dateNewspaper} icon="icon-newspaper" />
                </DataList>
              </Card>
              <Card title="Descripción" collapsible>
                <Markdown string={source.description} />
              </Card>
              <Card title="Descripción geográfica" collapsible>
                {process.browser && (
                  <PositionMap
                    lng={source.geographicLng}
                    lat={source.geographicLat}
                    type="source"
                    zoom={6}
                  />
                )}
              </Card>
              {source && source.otherFields && source.otherFields.length > 0 && (
                source.otherFields.map(({ title, body, img }) => (
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

Source.propTypes = {
  showBackButton: PropTypes.func.isRequired,
  hideBackButton: PropTypes.func.isRequired,
  source: PropTypes.shape({}).isRequired,
};

Source.getInitialProps = async ({ query }) => {
  const battleRes = await fetch(`${config.apiUrl}/sources/${query.id}`);
  const source = await battleRes.json();
  console.log(source);

  return {
    source,
  };
};

export default Source;
