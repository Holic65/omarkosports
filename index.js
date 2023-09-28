const PORT = 8000;
const express = require('express');
const expbs = require('express-handlebars');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

// -----------------------start of import for football route ----------------------

const athleticRoute = require('./routes/football/athletic')
const skyRoute = require('./routes/football/sky')
const telegraphRoute = require('./routes/football/telegraph') 
const footballRoute = require('./routes/football/football')
const homeRoute = require('./routes/home')
// -----------------------end of import for football route ------------------------


// import for basketball route
const basketRoute = require('./routes/basketball/basketball')
const B_athleticRoute = require('./routes/basketball/athletic_basketball')
const B_skyRoute = require('./routes/basketball/sky_basketball')
const B_telegraphRoute = require('./routes/basketball/telegraph_basketball')

// imports for motorsport
const f1_route = require('./routes/motorsports/f1')
const f1_athleticRoute = require('./routes/motorsports/athletic_f1')
const f1_skyRoute = require('./routes/motorsports/sky_f1')
const f1_telegraphRoute = require('./routes/motorsports/telegraph_f1')

// imports for tennis
const tennis_route = require('./routes/tennis/tennis')
const tennis_athleticRoute = require('./routes/tennis/athletic_tennis')
const tennis_skyRoute = require('./routes/tennis/sky_tennis')
const tennis_telegraphRoute = require('./routes/tennis/telegraph_tennis')

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

app.use('/basketball', basketRoute)
app.use('/basketball-athletic', B_athleticRoute)
app.use('/basketball-skysports', B_skyRoute)
app.use('/basketball-telegraph', B_telegraphRoute)

app.use('/formula-1', f1_route)
app.use('/f1-athletic', f1_athleticRoute)
app.use('/f1-skysports', f1_skyRoute)
app.use('/f1-telegraph', f1_telegraphRoute)

app.use('/tennis', tennis_route)
app.use('/tennis-athletic', tennis_athleticRoute)
app.use('/tennis-skysports', tennis_skyRoute)
app.use('/tennis-telegraph', tennis_telegraphRoute)




const sportsblogs = [
    {
        name: 'theathletic',
        address: 'https://theathletic.com/football/team/arsenal/'
    },
    {
        name: 'telegraph',
        address: 'https://www.telegraph.co.uk/premier-league/'
    }
]
const articles = [];




app.listen(PORT, '0.0.0.0', () => console.log('server running on PORT 8000'))
