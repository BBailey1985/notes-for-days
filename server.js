const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = ('./routes/htmlRoutes');
const apiRoutes = ('./routes/apiRoutes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//api routes
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

//listen port
app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}`);
})