import Detail from "./Components/detail/Detail"
import List from "./Components/list/List"
import Chat from "./Components/chat/Chat"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App