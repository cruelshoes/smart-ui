import testRoute from './testRoute';

export function run(app) {
	app.use('/api', logRequest);
	app.use('/api/postproblem', testRoute);
}

const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

function logRequest(req, res, next){
	logger.info(req.body);
	next();
}