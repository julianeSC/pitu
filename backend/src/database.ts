import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://login:senha@endereçodobanco:porta/pitu');

export default sequelize;
