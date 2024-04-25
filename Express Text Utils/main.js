const express = require('express')
const app = express()
const port = 3000

app.set('view engine' , 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    output = ""
  res.render("index",{output})
})

app.post('/' , (req , res)=> {
    let text = req.body.text;
    let output = text.toUpperCase();

    switch (req.body.btn) {
        case 'up':
            output = text.toUpperCase();
            break;
        case 'low':
            output = text.toLowerCase();
            break;
        case 'cpt':
            output = text.replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
            break;
        case 'rev':
            output = text.split('').reverse().join(''); // Reverse the text
            break;
        case 'inv':
            output = text.replace(/[a-zA-Z]/g, char => {
                // Invert the case of each letter
                return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            });
            break;
        case 'cnt':
            output = `Character count: ${text.length}`;
            break;
        default:
            output = "Invalid operation";
    }

    res.render("index" , {output})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})