import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
// import adminRouterApi from './routes/api/adminRouter';
import adminRouterRender from './routes/render/adminRouterRender';
// import vacancyRouterApi from './routes/api/vacancyRouterApi';
import vacancyRouterRender from './routes/render/vacancyRouterRender';
// import candidateRouterApi from './routes/api/candidateRouterApi';
import candidateRouterRender from './routes/render/candidateRouterRender';
import candidateRouterApi from './routes/api/candidateRouterApi';
import adminRouterRender from './routes/render/adminRouterRender'
import vacancyRouterApi from './routes/api/vacancyRouterApi';
import vacancyRouterRender from './routes/render/vacancyRouterRender';
// import candidateRouterApi from './routes/api/candidateRouterApi';
import candidateRouterRender from './routes/render/candidateRouterRender';
import apiRouter from './routes/api/candidateRouterApi';
import adminRouterApi from './routes/api/adminRouterApi';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'admin_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session?.user;
  next();
});

app.use('/', indexRouter);

app.use('/api/admin/', adminRouterApi);
app.use('/admin/', adminRouterRender);

app.use('/api/vacancy/', vacancyRouterApi);
app.use('/vacancy/', vacancyRouterRender);
// app.use('/api/candidate/', candidateRouterApi);
app.use('/candidate/', candidateRouterRender);
app.use('/api/', apiRouter)
app.use('/api/auth', adminRouterApi);


app.use('/api/candidate', candidateRouterApi);
app.use('/candidates', candidateRouterRender);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
