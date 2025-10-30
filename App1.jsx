import Header from './Header'
import Side from './Side'
import Content from './Content'
import Footer from './Footer'
function App() {


  return (
    <>
     <div className="container border border-2 border-secondary">
      <Header />
      <div className="row">
        <div className="col-4">
      <Side/>
        </div>
        <div className="col-8">
      <Content/>
        </div>
      </div>
      <Footer/>
     </div>
      

    </>
  )
}

export default App
