import express from 'express';
import controllers from './controllers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/hello", (req, res) => {
  res.send({ hello: "world" });
});

app.post('/api/live', (req, res) => {
  controllers.postLive(req, res);
})

app.get('/api/live', (req, res) => {
  controllers.getLive(req, res);
})

app.post('/api/pump', (req, res) => {
  controllers.postPump(req, res);
})

app.get('/api/pump/fridge', (req, res) => {
  controllers.getFridge(req, res);
})

app.get('/api/pump/freezer', (req, res) => {
  controllers.getFreezer(req, res);
})

export const handler = app;