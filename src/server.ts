import { app } from './app';
import { PORT } from './configs';

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
