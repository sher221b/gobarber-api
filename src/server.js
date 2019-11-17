import app from './app';

process.env.TZ = 'America/Fortaleza';
console.log(new Date().getTimezoneOffset());

app.listen(3333);
