const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//api routes
app.use('/api', require('./routes/apiRoutes'));
app.use('/', require('./routes/htmlRoutes'));


//listen port
app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}`);
});

