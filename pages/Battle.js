import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sheet battle">
        <div className="container">
          <div className="main-img">
            <img src="https://via.placeholder.com/350x200" alt="Batalla" />
          </div>
          <h1>Batalla de Villar de los Navarros</h1>
          <Card title="Ficha técnica">
            <p>Prueba</p>
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
            <img src="https://via.placeholder.com/350x200" alt="Batalla" />
          </Card>
          <Card title="Patrimonio arquitectónico" collapsible>
            <img src="https://via.placeholder.com/350x200" alt="Batalla" />
            <p>Iglesia de San Pedro (mudéjar, BIC), ermitas de Santa Bárbara y de Santa Ana, santuario de la Virgen de Herrera, Vía Crucis y Calvario, peirones, puente, matadero, fábrica de anís.</p>
          </Card>
          <Card title="Patrimonio natural" collapsible>
            <p>Prueba</p>
          </Card>
          <Card title="Personas relevantes que intervienen" collapsible>
            <p>Expedición Real, Carlos María Isidro, infante Sebastián Gabriel de Borbón, José Buerens, Joaquín Quílez.</p>
          </Card>
          <Card title="Número de efectivos" collapsible>
            <p>Prueba</p>
          </Card>
        </div>
      </div>
    );
  }
}

Battle.propTypes = {

};

export default Battle;
