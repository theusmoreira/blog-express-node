import { app } from './app';
import { PORT } from './configs/constants';

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
