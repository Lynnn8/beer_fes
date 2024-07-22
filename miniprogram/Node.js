const express = require('express');
const app = express();
const port = 3000;

app.get('http://localhost:3000', (req, res) => {
  const order = {
    eventName: '2024青岛国际啤酒节',
    date: '2024.08.03 19:15',
    location: '山东省青岛市',
    price: 2150.00,
    ticketCount: 2,
    image: './pages/photos/青岛啤酒节.png' 
  };
  res.json(order);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});