# Device-Master

<b> The application allows you to add, enable and disable devices, update and remove devices, and also performs several checks: 1) checking the uniqueness of the device on the page - if the device is not unique, then the application will report it 2) checking the safe device update: if the device is turned on, the application does not allow updating the device and displays a message to turn off the device before updating. Information about the added devices is recorded in the database..
  </b> <br />
  
 <b>
Techs: JavaScript, Express.js, Node.js, MongoDB Cluster, React, Redux-Thunk.
 </b> <br /> 
 
 <b>
  The project is available on Heroku: https://device-master.herokuapp.com/
  </b> <br />
  
  <h3> <br />
  How to start the app locally:
  </h3> 
  
  <h4>
  <ul>
    <li>
      Clone this repo <b> git clone git@github.com:antonsipin/Device-Master.git </b>
    </li>
     <li>
      Go to the backend folder <b> cd backend </b>
    </li>
    <li>
      Install the dependencies <b> npm install </b>
    </li>
    <li>
      Place the .env file in the root directory (you can get it from me or take a look at .envexample file)
    </li>
    <li>
      Run the app server <b> npm start </b> (The server starts at http://localhost:3100)
    </li>
    <li>
      Go to the frontend folder <b> cd frontend </b>
    </li>
    <li>
      Install the dependencies <b> npm install </b>
    </li>
    <li>
      Run the app <b> npm start </b> (The app starts at http://localhost:3100 in browser and you will be able to test the app)
    </li>
  </ul>
  </h4>
