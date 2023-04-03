import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"

function App() {
  const [angle, setAngle] = useState('None')
  const [wing1H1, setwing1H1] = useState('')
  const [wing1H2, setwing1H2] = useState('')
  const [wing2H1, setwing2H1] = useState('')
  const [wing2H2, setwing2H2] = useState('')
  const [searchAngle, setSearchAngle] = useState('')
  const INSERT_SPACE = '   '


  useEffect(() => {
    //Hit the server and get the places

    const apiEndpoint = `api/calc_angles?wing1H1=${wing1H1}&wing1H2=${wing1H2}&wing2H1=${wing2H1}&wing2H2=${wing2H2}`

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        setAngle(data["angle"])
      }
      );
  }, [searchAngle])

  const onSearchTextChangeW1H1 = (e) => {
    setwing1H1(e.target.value);
    setSearchAngle(e.target.value);
  }

  const onSearchTextChangeW1H2 = (e) => {
    setwing1H2(e.target.value);
    setSearchAngle(e.target.value);
  }


  const onSearchTextChangeW2H1 = (e) => {
    setwing2H1(e.target.value);
    setSearchAngle(e.target.value);
  }

  const onSearchTextChangeW2H2 = (e) => {
    setwing2H2(e.target.value);
    setSearchAngle(e.target.value);
  }


  const fieldInput = (

    <div>

      <div className="flex items-center justify-center p-2 bg-gray-200">
        <div className="self-auto ...">
          <img src="../images/wings.jpg" width="800" height="700"></img>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-indigo-400">
      
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5 text-center block text-2xl text-base font-medium text-[#07074D] underline"> WING 1 </div>
            <div className="-mx-3 flex flex-wrap">

              <div className="w-full px-3 sm:w-1/2">

                <div className="mb-5">
                  <label
                    htmlFor="wing1h1"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    H1 / mm
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="wing1h1"
                    id="wing1h1"
                    placeholder="H1 / mm"
                    onChange={onSearchTextChangeW1H1}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="wing1h2"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    H2 / mm
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="wing1h2"
                    id="wing1h2"
                    placeholder="H2 / mm"
                    onChange={onSearchTextChangeW1H2}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5 text-center block text-2xl text-base font-medium text-[#07074D] underline"> WING 2 </div>
            <div className="-mx-3 flex flex-wrap">

              <div className="w-full px-3 sm:w-1/2">

                <div className="mb-5">
                  <label
                    htmlFor="wing1h1"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    H1 / mm
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="wing1h1"
                    id="wing1h1"
                    placeholder="H1 / mm"
                    onChange={onSearchTextChangeW2H1}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="wing1h2"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    H2 / mm
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="wing1h2"
                    id="wing1h2"
                    placeholder="H2 / mm"
                    onChange={onSearchTextChangeW2H2}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  const findAngle = (
    <div className="flex items-center justify-center p-2 mb-3 block text-2xl font-medium text-[#07074D]">
      <div dangerouslySetInnerHTML={{__html: 'The resulting angle: &nbsp;'}} />
        <div className="text-blue-600 text-2xl font-bold">
         {angle}
        </div>        
    </div>
  )

  return (
    <div>
      {fieldInput}
      {findAngle}
    </div>
  )
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App />)