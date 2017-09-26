import React from 'react'
import BaordsListContainer from '../../containers/BoardsList'

import {Grid} from 'react-bootstrap'

const BoardList = () => (
  <Grid>
    <BaordsListContainer fav />
    <BaordsListContainer />
  </Grid>
)

export default BoardList
