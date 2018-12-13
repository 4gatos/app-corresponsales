import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { CloudinaryContext, Image } from 'cloudinary-react';
import Card from '../components/Card';
import DataList from '../components/DataList';
import ListItem from '../components/ListItem';
import config from '../config/index';
import Markdown from '../components/basics/Markdown';


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
    const { correspondant } = this.props;
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
              <Card title="Batalla: Villar de los Navarros" collapsible>
                <img src="/static/img/mapabatallla.jpg" alt="Batalla" />
                <p>Iglesia de San Pedro (mudéjar, BIC), ermitas de Santa Bárbara y de Santa Ana, santuario de la Virgen de Herrera, Vía Crucis y Calvario, peirones, puente, matadero, fábrica de anís.</p>
                <a href="#" className="block-link">Ver más</a>
              </Card>
              <Card title="Ruta del corresponsal" collapsible>
                <Markdown string={correspondant.geographicDescription} />
                <img src="/static/img/mapabatallla.jpg" alt="Batalla" />
              </Card>
              <Card title="Documentación" collapsible>
                <Markdown string={correspondant.documentation} />
                <img src="/static/img/batalla.jpg" alt="Batalla" />
                <a href="#" className="block-link interest-link">Enlace de interés</a>
                <a href="#" className="block-link interest-link">Enlace de interés</a>
              </Card>
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
};

Correspondent.getInitialProps = async ({ query }) => {
  const correspondantRes = await fetch(`${config.apiUrl}/correspondants/${query.id}`);
  const correspondant = await correspondantRes.json();

  return {
    correspondant,
  };
};

export default Correspondent;
