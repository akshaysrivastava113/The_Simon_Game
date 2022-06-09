const express = require('express');
app = express();


app.listen(process.env.PORT || 3000, () => {
    console.log("Running");
});