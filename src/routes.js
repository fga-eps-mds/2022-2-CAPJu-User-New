import { Router } from "express";


const routes = Router();


routes.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Up and running',
  });
});

export default routes;
