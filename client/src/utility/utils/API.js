import axios from "axios";

export default {

  // send data to db
  postRegData: function(data) {
    console.log('testAPI');
   return axios.post("/testAPI", data);
  },  

}