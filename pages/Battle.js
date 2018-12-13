import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { CloudinaryContext, Image } from 'cloudinary-react';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import DataList from '../components/DataList';
import config from '../config/index';
import Markdown from '../components/basics/Markdown';

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
                <img src="/static/img/mapabatallla.jpg" alt="Batalla" />
              </Card>
              <Card title="Patrimonio arquitectónico" collapsible>
                <img src="/static/img/patrimonioarq.jpg" alt="Batalla" />
                <p>Iglesia de San Pedro (mudéjar, BIC), ermitas de Santa Bárbara y de Santa Ana, santuario de la Virgen de Herrera, Vía Crucis y Calvario, peirones, puente, matadero, fábrica de anís.</p>
                <a href="#" className="block-link">Ver más construcciones</a>
                <a href="#" className="block-link">Las neveras</a>
              </Card>
              <Card title="Patrimonio natural" collapsible>
                <img src="/static/img/patrimonionat.jpg" alt="Batalla" />
                <p>Zona LIC (Lugar de Interés Comunitario) Alto Huerva y Sierra de Herrera al oeste de Villar de los Navarros.</p>
                <a href="#" className="block-link">Ver más</a>
                <img src="/static/img/patrimonionat2.jpg" alt="Batalla" />
                <p>Sierra de Herrera.</p>
                <a href="#" className="block-link">Ver más</a>
              </Card>
              <Card title="Personas relevantes que intervienen" collapsible>
                <Markdown string={battle.importantPeople} />
              </Card>
              <Card title="Número de efectivos" collapsible>
                <p><strong>Carlistas</strong></p>
                <DataList>
                  <ListItem text="11.000 soldados" icon="icon-soldier" />
                  <ListItem text="1.500 caballos" icon="icon-horse" />
                  <ListItem text="4 cañones" icon="icon-cannon" />
                </DataList>
                <p><strong>Isabelinos</strong></p>
                <DataList>
                  <ListItem text="7.000 soldados" icon="icon-soldier" />
                  <ListItem text="800 caballos" icon="icon-horse" />
                  <ListItem text="6 cañones" icon="icon-cannon" />
                </DataList>
              </Card>
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
};

Battle.getInitialProps = async ({ query }) => {
  const battleRes = await fetch(`${config.apiUrl}/battles/${query.id}`);
  const battle = await battleRes.json();

  return {
    battle,
  };
};

export default Battle;
