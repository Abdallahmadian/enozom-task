import express from 'express';
import trainRoutes from './routes/trainRoutes.js';
import tripRoutes from './routes/tripRoutes.js';
import cityRoutes from './routes/cityRoutes.js';


const app = express();

app.use(express.json());
app.use('/api/trains', trainRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/cities', cityRoutes);


const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
