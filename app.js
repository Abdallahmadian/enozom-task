import express from 'express';
import trainRoutes from './routes/trainRoutes.js';
import tripRoutes from './routes/tripRoutes.js';
import cityRoutes from './routes/cityRoutes.js';
import alexToCairoTripRoutes from './routes/alexToCairoTripRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/trains', trainRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/alex-to-cairo-trips', alexToCairoTripRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
