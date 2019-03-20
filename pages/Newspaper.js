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

const fields = [
  {
    icon: 'lens',
    field: 'place',
  },
  {
    icon: 'lens',
    field: 'type',
  },
  {
    icon: 'lens',
    field: 'ideology',
  },
  {
    icon: 'lens',
    field: 'editor',
  },
  {
    icon: 'lens',
    field: 'director',
  },
  {
    icon: 'lens',
    field: 'firstNumber',
  },
  {
    icon: 'lens',
    field: 'lastNumber',
  },
  {
    icon: 'lens',
    field: 'pages',
  },
  {
    icon: 'lens',
    field: 'language',
  },
  {
    icon: 'lens',
    field: 'foundLocalization',
  },
  {
    icon: 'lens',
    field: 'format',
  },
  {
    icon: 'lens',
    field: 'print',
  },
];

let PositionMap;
if (process.browser) {
  PositionMap = dynamic(() => import('../components/PositionMap'));
}

class Newspaper extends Component {
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
    const { newspaper } = this.props;
    return (
      <CloudinaryContext cloudName="plasocloudinary">
        <div className="sheet battle">
          <div className="container">
            <div className="main-img">
              <Image publicId={newspaper.mainImg} />
            </div>
            <h1>{newspaper.name}</h1>
            <div className="cards">
              <Card title="Ficha técnica">
                <DataList>
                  {fields.map(({ icon, field }) => {
                    if (newspaper && newspaper[field]) {
                      return <ListItem text={newspaper[field]} icon={`icon-${icon}`} />;
                    }
                    return null;
                  })}
                </DataList>
              </Card>
              <Card title="Historia" collapsible>
                <Markdown string={newspaper.description} />
              </Card>
              <Card title="Descripción geográfica" collapsible>
                {process.browser && (
                  <PositionMap
                    lng={newspaper.geographicLng}
                    lat={newspaper.geographicLat}
                    type="newspaper"
                    zoom={6}
                  />
                )}
              </Card>
              {newspaper && newspaper.otherFields && newspaper.otherFields.length > 0 && (
                newspaper.otherFields.map(({ title, body, img }) => (
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

Newspaper.propTypes = {
  showBackButton: PropTypes.func.isRequired,
  hideBackButton: PropTypes.func.isRequired,
  newspaper: PropTypes.shape({}).isRequired,
};

Newspaper.getInitialProps = async ({ query }) => {
  const newspaperRes = await fetch(`${config.apiUrl}/newspapers/${query.id}`);
  const newspaper = await newspaperRes.json();

  return {
    newspaper,
  };
};

export default Newspaper;
