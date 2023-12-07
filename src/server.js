const express =  require('express');
const app =  express();
const port =  8080

app.get('/', (req, res) => {
    return res.status(200).json({ 
      nome:  'Learn SonarQube code coverage',
      status: true 
    });
});

let server = app.listen(port, () => {
    console.log(`Application server running on ${port}`);
});

module.exports  = server;