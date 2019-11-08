const sequelize = require('./src/utils/database');
const app = require('./app');

sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
    console.log(
      `App listen on port ${app.get('port')} in ${app.get('env')} environment`
    );
  });
}).catch(err => console.error(err));


