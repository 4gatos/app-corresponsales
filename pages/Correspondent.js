import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import DataList from '../components/DataList';
import ListItem from '../components/ListItem';


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
    return (
      <div className="sheet correspondent">
        <div className="container">
          <div className="main-img double-img">
            <img src="/static/img/fondocorresponsal.jpg" alt="Batalla" />
            <img className="avatar" src="/static/img/corresponsal.jpg" alt="Batalla" />
          </div>
          <h1>George Mitchell</h1>
          <Card title="Ficha técnica">
            <DataList>
              <ListItem text="Nacionalidad" icon="icon-pointer" />
              <ListItem text="Periódico: Morning Herald" icon="icon-newspaper" />
              <ListItem text="En España de XXXX a YYYY" icon="icon-newspaper" />
              <ListItem text="Batalla: Villar de los Navarros" icon="icon-swords" />
            </DataList>
          </Card>
          <Card title="Detalles Históricos" collapsible>
            <p>
            El Corresponsal de Guerra descrito estuvo en el frente de la primera guerra carlista. El 22 de agosto de 1837 la Expedición Real carlista llega Villar de los Navarros. En aquel momento operaban en Aragón las columnas isabelinas de Espartero (en Calatayud), Oraa (en Daroca) y Buerens (en Cariñena). El día 23 de agosto Buerens entra en Herrera de los Navarros, esperando que se le unan.
            </p>
          </Card>
          <Card title="Batalla: Villar de los Navarros" collapsible>
            <img src="/static/img/mapabatallla.jpg" alt="Batalla" />
            <p>Iglesia de San Pedro (mudéjar, BIC), ermitas de Santa Bárbara y de Santa Ana, santuario de la Virgen de Herrera, Vía Crucis y Calvario, peirones, puente, matadero, fábrica de anís.</p>
            <a href="#" className="block-link">Ver más</a>
          </Card>
          <Card title="Ruta del corresponsal" collapsible>
            <p>La batalla de Villar de los Navarros enfrentó a carlistas y liberales durante la primera guerra carlista. El 22 de agosto de 1837 la Expedición Real carlista llega Villar de los Navarros. En aquel momento operaban en Aragón las columnas isabelinas de Espartero (en Calatayud), Oraa (en Daroca) y Buerens (en Cariñena)...</p>
            <img src="/static/img/mapabatallla.jpg" alt="Batalla" />
          </Card>
          <Card title="Documentación" collapsible>
            <p>La batalla de Villar de los Navarros enfrentó a carlistas y liberales durante la primera guerra carlista. El 22 de agosto de 1837 la Expedición Real carlista llega Villar de los Navarros.</p>
            <img src="/static/img/batalla.jpg" alt="Batalla" />
            <a href="#" className="block-link interest-link">Enlace de interés</a>
            <a href="#" className="block-link interest-link">Enlace de interés</a>
          </Card>
        </div>
      </div>
    );
  }
}

Correspondent.propTypes = {
  showBackButton: PropTypes.func.isRequired,
  hideBackButton: PropTypes.func.isRequired,
};

export default Correspondent;
