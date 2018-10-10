import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import DataList from '../components/DataList';

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
    return (
      <div className="sheet battle">
        <div className="container">
          <div className="main-img">
            <img src="/static/img/batalla.jpg" alt="Batalla" />
          </div>
          <h1>Batalla de Villar de los Navarros</h1>
          <Card title="Ficha técnica">
            <DataList>
              <ListItem text="Villar de los Navarros" icon="icon-pointer" />
              <ListItem text="24 de agosto de 1837" icon="icon-calendar" />
              <ListItem text="7 horas" icon="icon-tempus-fugit" />
            </DataList>
          </Card>
          <Card title="Historia" collapsible>
            <p>
              La batalla de Villar de los Navarros enfrentó a carlistas y liberales durante la primera guerra carlista. El 22 de agosto de 1837 la Expedición Real carlista llega Villar de los Navarros. En aquel momento operaban en Aragón las columnas isabelinas de Espartero (en Calatayud), Oraa (en Daroca) y Buerens (en Cariñena). El día 23 de agosto Buerens entra en Herrera de los Navarros, esperando que se le unan las tropas de Oraa para, conjuntamente, atacar a los carlistas. Pero los exploradores carlistas alertan del plan al infante Sebastián Gabriel de Borbón (sobrino del pretendiente Don Carlos), que ordena a sus tropas ocupar posiciones de combate, sobre todo el valle de La Cañada de la Cruz.
            </p>
            <p>
              A mediodía del día 24 avanza desde Herrera de los Navarros la columna de Buerens, que se alinea en orden de batalla frente a las posiciones carlistas. La lucha comienza con el tiroteo de las guerrillas que dura más de una hora. A las tres de la tarde, las tropas de Buerens avanzan, pero la caballería carlista, al mando de Quílez, divide en dos sus columnas.  Tras seis horas de lucha, a las siete de la tarde del 24 de agosto de 1837, se proclama la victoria de los carlistas. Quílez es gravemente herido y muere pocos días después. Buerens huye en dirección a Belchite, al frente de los únicos 20 jinetes que pudieron escapar. El triunfo permitió a los carlistas avanzar sobre Madrid.
            </p>
          </Card>
          <Card title="Descripción geográfica" collapsible>
            <p>Villar de los Navarros está a 72 km. de Zaragoza, al pie de la sierra de Herrera (Sistema Ibérico), y en el límite con la provincia de Teruel, junto al río Cámaras (afluente del Aguasvivas), a una altitud de 867 metros. La batalla tuvo lugar entre las partidas de Valdenavarra (Val de Navarra) y Caña de la Cruz, a medio camino entre Villar de los Navarros y Herrera de los Navarros, a los pies del santuario de la Virgen de la Sierra y cerca de las sierras de Oriche y Cucalón.</p>
            <img src="/static/img/mapabatallla.jpg" alt="Batalla" />
            <p></p>
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
            <p>Expedición Real, Carlos María Isidro, infante Sebastián Gabriel de Borbón, José Buerens, Joaquín Quílez.</p>
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
    );
  }
}

Battle.propTypes = {
  showBackButton: PropTypes.func.isRequired,
  hideBackButton: PropTypes.func.isRequired,
};

export default Battle;
