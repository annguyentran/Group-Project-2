const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',

  cookie: {

    maxAge: 60 * 60 * 1000,

    httpOnly: true,

    secure: false,

    sameSite: true

  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3001, () => console.log('Now listening'));
});