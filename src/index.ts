// filepath: /workspaces/basicTsNode/src/index.ts

import express from 'express';
import { annotations } from './srcTSFunctions/Annotations';


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  annotations();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



