import React from 'react'

const Contact = () => {
  return (
    <main className="container mainStyle">

      <div className="row">
        <h1 className="heading col-12">
          Contact
        </h1>
        <div className="col-12">
          <hr/>
        </div>
          <div className="col-12">
            <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Smith"/>
            </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Email</label>
                  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"/>
            </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a message here"></textarea>
                  </div>
              </form>
        </div>
          </div>
    </main>
  )
}

export default Contact