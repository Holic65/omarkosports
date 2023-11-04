const PORT = 8000;
const express = require('express');
const expbs = require('express-handlebars');

const app = express();
app.use(express.static('public'));
app.engine('hbs', expbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs')


// -----------------------start of import for football route and endpoints ----------------------
const athleticRoute = require('./routes/football/athletic')
const skyRoute = require('./routes/football/sky')
const telegraphRoute = require('./routes/football/telegraph') 
const footballRoute = require('./routes/football/football')
const homeRoute = require('./routes/home')


app.use('/football/theathletic', athleticRoute);
app.use('/football/skysports', skyRoute)
app.use('/football/telegraph', telegraphRoute)
app.use('/football', footballRoute)
app.use('/', homeRoute)
// -----------------------end of import for football route and endpoints ------------------------




// -----------------------start of import for basketball route and endpoints ----------------------
const basketRoute = require('./routes/basketball/basketball')
const B_athleticRoute = require('./routes/basketball/athletic_basketball')
const B_skyRoute = require('./routes/basketball/sky_basketball')
const B_telegraphRoute = require('./routes/basketball/telegraph_basketball')

app.use('/basketball', basketRoute)
app.use('/basketball/theathletic', B_athleticRoute)
app.use('/basketball/skysports', B_skyRoute)
app.use('/basketball/telegraph', B_telegraphRoute)
// -----------------------end of import for basketball route and endpoints ------------------------




// -----------------------start of import for f1 route and endpoints ----------------------
const f1_route = require('./routes/motorsports/f1')
const f1_athleticRoute = require('./routes/motorsports/athletic_f1')
const f1_skyRoute = require('./routes/motorsports/sky_f1')
const f1_telegraphRoute = require('./routes/motorsports/telegraph_f1')

app.use('/formula-1', f1_route)
app.use('/formula-1/theathletic', f1_athleticRoute)
app.use('/formula-1/skysports', f1_skyRoute)
app.use('/formula-1/telegraph', f1_telegraphRoute)
// -----------------------end of import for f1 route and endpoints ------------------------




// -----------------------start of import for tennis route and endpoints ----------------------
const tennis_route = require('./routes/tennis/tennis')
const tennis_athleticRoute = require('./routes/tennis/athletic_tennis')
const tennis_skyRoute = require('./routes/tennis/sky_tennis')
const tennis_telegraphRoute = require('./routes/tennis/telegraph_tennis')

app.use('/tennis', tennis_route)
app.use('/tennis/theathletic', tennis_athleticRoute)
app.use('/tennis/skysports', tennis_skyRoute)
app.use('/tennis/telegraph', tennis_telegraphRoute)
// -----------------------end of import for tennis route and endpoints ------------------------


app.listen(PORT, '0.0.0.0', () => console.log('server running on PORT 8000'))
