const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Servidor web local escuchando en el puerto ${PORT}!`);
});
