const PORT = 3000;
const express = require('express');
const expbs = require('express-handlebars');


const app = express();
const athleticRoute = require('./routes/athletic')
const skyRoute = require('./routes/sky')
const telegraphRoute = require('./routes/telegraph')
const footballRoute = require('./routes/Football')
const homeRoute = require('./routes/home')

app.use(express.static('public'));
app.engine('hbs', expbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs')


app.use('/theathletic', athleticRoute);
app.use('/skysports', skyRoute)
app.use('/thetelegraph', telegraphRoute)
app.use('/football', footballRoute)
app.use('/', homeRoute)



app.listen(PORT, () => console.log('server running on PORT'))