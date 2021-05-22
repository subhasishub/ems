const CONTEXTPATH =
  "http://hrms-env.eba-emxphhfy.us-east-1.elasticbeanstalk.com/springjwt";

const CONTEXTPATHDEV = "http://localhost:5000/springjwt";

const API = {
  CONTEXTPATH: CONTEXTPATHDEV,
  AUTHENTICATE_URL: CONTEXTPATHDEV + "/authenticate",
  ADD_EMPLOYEE: CONTEXTPATHDEV + "/employee/add",
};
export default API;
