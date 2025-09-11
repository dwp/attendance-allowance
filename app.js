const express = require('express');
const nunjucks = require('nunjucks');
const filePath = require('path');

const app = express();

const port = process.env.PORT || 3002;
const contextPath = process.env.CONTEXT_PATH || '/';
const bodyParser = require('body-parser');
const packageMeta = require('./package.json');

const authenticationMiddleware = require('./middleware/authentication');
const setVersionMiddleware = require('./middleware/versionPassthrough');
const autoStoreDataMiddleware = require('./middleware/autoStoreData');
const sessionMiddleware = require('./middleware/session');
const { handleGetRequest } = require('./middleware/handleGetRequest');
const locale = require('./middleware/locale');
const journeyType = require('./middleware/journeyType');

const actuatorRoutes = require('./routes/actuator');
const notFoundRoutes = require('./routes/errors/404');

app.set('view engine', 'njk');
app.set('views', `${__dirname}/views`);
const nunjucksEnv = nunjucks.configure([
  `${__dirname}/node_modules/govuk-frontend`,
  `${__dirname}/views/`,
], {
  autoescape: true,
  express: app,
});

nunjucksEnv.addFilter('makeArray', (value) => {
  if (!Array.isArray(value)) {
    return [value];
  }
  return value;
});

app.use(authenticationMiddleware);
app.use(contextPath, express.static(filePath.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(sessionMiddleware());
app.use(autoStoreDataMiddleware);
app.use(locale());
app.use(journeyType());

// [Journey routes] (do not edit this comment, it is used in automation)
app.use('/sprint-120/', setVersionMiddleware('/sprint-120/'), require('./routes/sprint-120'));
app.use('/sprint-117/', setVersionMiddleware('/sprint-117/'), require('./routes/sprint-117'));
app.use('/appointee-test-v3/', setVersionMiddleware('/appointee-test-v3/'), require('./routes/appointee-test-v3'));
app.use('/sprint-115/', setVersionMiddleware('/sprint-115/'), require('./routes/sprint-115'));
app.use('/sprint-114/', setVersionMiddleware('/sprint-114/'), require('./routes/sprint-114'));
app.use('/context-switch-v2/', setVersionMiddleware('/context-switch-v2/'), require('./routes/context-switch-v2'));
app.use('/context-switch-v1/', setVersionMiddleware('/context-switch-v1/'), require('./routes/context-switch-v1'));
app.use('/sprint-111/', setVersionMiddleware('/sprint-111/'), require('./routes/sprint-111'));
app.use('/sprint-110/', setVersionMiddleware('/sprint-110/'), require('./routes/sprint-110'));
app.use('/evidence-test-6/', setVersionMiddleware('/evidence-test-6/'), require('./routes/evidence-test-6'));
app.use('/sprint-109/', setVersionMiddleware('/sprint-109/'), require('./routes/sprint-109'));
app.use('/sprint-108/', setVersionMiddleware('/sprint-108/'), require('./routes/sprint-108'));
app.use('/unmoderated-testing-1/', setVersionMiddleware('/unmoderated-testing-1/'), require('./routes/unmoderated-testing-1'));
app.use('/evidence-test-5/', setVersionMiddleware('/evidence-test-5/'), require('./routes/evidence-test-5'));
app.use('/sprint-107/', setVersionMiddleware('/sprint-107/'), require('./routes/sprint-107'));
app.use('/sprint-106/', setVersionMiddleware('/sprint-106/'), require('./routes/sprint-106'));
app.use('/evidence-test-4/', setVersionMiddleware('/evidence-test-4/'), require('./routes/evidence-test-4'));
app.use('/evidence-test-3/', setVersionMiddleware('/evidence-test-3/'), require('./routes/evidence-test-3'));
app.use('/sprint-105/', setVersionMiddleware('/sprint-105/'), require('./routes/sprint-105'));
app.use('/sprint-104/', setVersionMiddleware('/sprint-104/'), require('./routes/sprint-104'));
app.use('/sprint-103/', setVersionMiddleware('/sprint-103/'), require('./routes/sprint-103'));
app.use('/sprint-102/', setVersionMiddleware('/sprint-102/'), require('./routes/sprint-102'));
app.use('/sprint-101/', setVersionMiddleware('/sprint-101/'), require('./routes/sprint-101'));
app.use('/sprint-100/', setVersionMiddleware('/sprint-100/'), require('./routes/sprint-100'));
app.use('/sprint-99/', setVersionMiddleware('/sprint-99/'), require('./routes/sprint-99'));
app.use('/sprint-98/', setVersionMiddleware('/sprint-98/'), require('./routes/sprint-98'));
app.use('/sprint-97/', setVersionMiddleware('/sprint-97/'), require('./routes/sprint-97'));
app.use('/sprint-96/', setVersionMiddleware('/sprint-96/'), require('./routes/sprint-96'));
app.use('/sprint-95/', setVersionMiddleware('/sprint-95/'), require('./routes/sprint-95'));
app.use('/sprint-94/', setVersionMiddleware('/sprint-94/'), require('./routes/sprint-94'));
app.use('/sprint-93/', setVersionMiddleware('/sprint-93/'), require('./routes/sprint-93'));
app.use('/sprint-92/', setVersionMiddleware('/sprint-92/'), require('./routes/sprint-92'));
app.use('/sprint-91/', setVersionMiddleware('/sprint-91/'), require('./routes/sprint-91'));
app.use('/sprint-90/', setVersionMiddleware('/sprint-90/'), require('./routes/sprint-90'));
app.use('/sprint-89/', setVersionMiddleware('/sprint-89/'), require('./routes/sprint-89'));
app.use('/sprint-88/', setVersionMiddleware('/sprint-88/'), require('./routes/sprint-88'));
app.use('/sprint-87/', setVersionMiddleware('/sprint-87/'), require('./routes/sprint-87'));
app.use('/sprint-86/', setVersionMiddleware('/sprint-86/'), require('./routes/sprint-86'));
app.use('/sprint-85/', setVersionMiddleware('/sprint-85/'), require('./routes/sprint-85'));
app.use('/sprint-84/', setVersionMiddleware('/sprint-84/'), require('./routes/sprint-84'));
app.use('/sprint-83/', setVersionMiddleware('/sprint-83/'), require('./routes/sprint-83'));
app.use('/sprint-82/', setVersionMiddleware('/sprint-82/'), require('./routes/sprint-82'));
app.use('/sprint-81/', setVersionMiddleware('/sprint-81/'), require('./routes/sprint-81'));
app.use('/ur-02-2024/', setVersionMiddleware('/ur-02-2024/'), require('./routes/ur-02-2024'));
app.use('/sprint-80/', setVersionMiddleware('/sprint-80/'), require('./routes/sprint-80'));
app.use('/sprint-79/', setVersionMiddleware('/sprint-79/'), require('./routes/sprint-79'));
app.use('/sprint-78/', setVersionMiddleware('/sprint-78/'), require('./routes/sprint-78'));
app.use('/sprint-77/', setVersionMiddleware('/sprint-77/'), require('./routes/sprint-77'));
app.use('/sprint-75/', setVersionMiddleware('/sprint-75/'), require('./routes/sprint-75'));
app.use('/sprint-63/', setVersionMiddleware('/sprint-63/'), require('./routes/sprint-63'));
app.use('/sprint-62-severity/', setVersionMiddleware('/sprint-62-severity/'), require('./routes/sprint-62-severity'));
app.use('/sprint-62/', setVersionMiddleware('/sprint-62/'), require('./routes/sprint-62'));
app.use('/sprint-61-1/', setVersionMiddleware('/sprint-61-1/'), require('./routes/sprint-61-1'));
app.use('/sprint-61/', setVersionMiddleware('/sprint-61/'), require('./routes/sprint-61'));
app.use('/sprint-60-1/', setVersionMiddleware('/sprint-60-1/'), require('./routes/sprint-60-1'));
app.use('/sprint-60/', setVersionMiddleware('/sprint-60/'), require('./routes/sprint-60'));
app.use('/sprint-59/', setVersionMiddleware('/sprint-59/'), require('./routes/sprint-59'));
app.use('/sprint-58/', setVersionMiddleware('/sprint-58/'), require('./routes/sprint-58'));
app.use('/sprint-57/', setVersionMiddleware('/sprint-57/'), require('./routes/sprint-57'));
app.use('/sprint-56/', setVersionMiddleware('/sprint-56/'), require('./routes/sprint-56'));
app.use('/sprint-55/', setVersionMiddleware('/sprint-55/'), require('./routes/sprint-55'));
app.use('/sprint-54/', setVersionMiddleware('/sprint-54/'), require('./routes/sprint-54'));
app.use('/sprint-53/', setVersionMiddleware('/sprint-53/'), require('./routes/sprint-53'));
app.use('/sprint-48/', setVersionMiddleware('/sprint-48/'), require('./routes/sprint-48'));
app.use('/sprint-47/', setVersionMiddleware('/sprint-47/'), require('./routes/sprint-47'));
app.use('/v2-1-0/', setVersionMiddleware('/v2-1-0/'), require('./routes/v2-1-0'));
app.use('/v2-0-0/', setVersionMiddleware('/v2-0-0/'), require('./routes/v2-0-0'));
app.use('/v1-1-0/', setVersionMiddleware('/v1-1-0/'), require('./routes/v1-1-0'));
app.use('/', require('./routes/v1-0-0'));

app.get('/clear-data', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/') // will always fire after session is destroyed
  });
});

// Request middleware - renders views for GET requests without controller
app.get(/^([^.]+)$/, (req, res, next) => {
  const { path } = req;
  if (path) {
    handleGetRequest(path.substring(1))(req, res, next);
  } else {
    next();
  }
});

// Actuator routes
app.use(actuatorRoutes(packageMeta));

// Error handling routes
app.use(notFoundRoutes);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`App listening at http://localhost:${port}`);
});
