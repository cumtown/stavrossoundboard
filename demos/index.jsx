'use strict'
import React from 'react'
import {Route, IndexRedirect, IndexRoute, Link} from 'react-router'

import Scratchpad from './scratchpad'
import Whiteboard from './whiteboard'
import Chat from './chat'

const Index = ({children}) => <div>
  <Cumtown/>
  </div>




class Cumtown extends React.Component {
  constructor(){
    super()
    this.state={cum:""}
  }

  render() {
    var styles = {"overflowWrap":"break-word"}
    var cum = ""
    for(var i = 0;i<270;i++){
      cum+="cum"
    }
    cum=cum+"town"
    for(var i = 0;i<300;i++){
      cum+="cum"
    }
    return <h1 style={styles} id="cum">{cum}</h1>;
  }
}


export default <Route path="/demos" component={({children}) => children}>
  <IndexRoute component={Index}/>
  <Route path='scratchpad/:title' component={Scratchpad}/>
  <Route path='whiteboard/:title' component={Whiteboard}/>
  <Route path='chat/:room' component={Chat}/>
</Route>


// //   <h2><Link to='/demos/scratchpad/welcome'>Scratchpad</Link></h2>
//   <p>
//     The scratchpad is the very simplest React/Firebase demo—a text area
//     whose content is synced with Firebase.
//   </p>

//   <h2><Link to='/demos/chat/welcome'>Chat</Link></h2>
//   <p>
//     A chat room — the canonical Firebase example.
//   </p>

//   <h2><Link to='/demos/whiteboard/welcome'>Whiteboard</Link></h2>
//   <p>
//     The whiteboard demonstrates the <i>journal</i> pattern, a way to use Firebnpm e
//     to synchronize the state of Redux stores on all collaborators machines.
//   </p>
// </div>