import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"

function App() {
  const [loadedPlaces, setLoadedPlaces] = useState([])

  useEffect(() => {
    //Hit the server and get the places

    const apiEndpoint = "/api/calc_angles"

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        setLoadedPlaces(data["angle"])
      }
      );
  }, [])

  const fieldInput = (

    <div>
      <div className="flex items-center justify-center p-12">

        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">

            <div>
              <img
                src="/assets/images/041.jpg"
                class="h-auto max-w-full"
                alt="..." />
            </div>

            <div className="mb-5 text-center block text-2xl text-base font-medium text-[#07074D]"> WING 1 </div>
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
                    type="text"
                    name="wing1h1"
                    id="wing1h1"
                    placeholder="H1 / mm"
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
                    type="text"
                    name="wing1h2"
                    id="wing1h2"
                    placeholder="H2 / mm"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5 text-center block text-2xl text-base font-medium text-[#07074D]"> WING 2 </div>
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
                    type="text"
                    name="wing1h1"
                    id="wing1h1"
                    placeholder="H1 / mm"
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
                    type="text"
                    name="wing1h2"
                    id="wing1h2"
                    placeholder="H2 / mm"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                How many guest are you bringing?
              </label>
              <input
                type="number"
                name="guest"
                id="guest"
                placeholder="5"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  return (

    <div>The desired angle
      {loadedPlaces}
      {fieldInput}
    </div>
  )
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App />)