import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Api from "./components/Api";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Api">
            <Api />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// export default function api() {

// const [dataList, setdataList] = useState([]);

// const getData = () => {
//   Axios.get("https://opend.data.go.th/get-ckan/datastore_search?resource_id=48039a2a-2f01-448c-b2a2-bb0d541dedcd").then((response) => {
//     setdataList(response.data);
//   });
// };

// return (
//   <div className="size">
//     <h1>Size Chart</h1>
//     <div href="size" className="shirt">
//       <img src="images/shirt.png" alt />
//       {getData()}
//       <table className="table table-striped container mt-5">
//         <thead>
//           <tr>
//             <th>1</th>
//             <th>2</th>
//             <th>3</th>
//             <th>4</th>
//             <th>5</th>
//             <th>6</th>
//             <th>7</th>
//             <th>8</th>
//             <th>9</th>
//             <th>10</th>
//             <th>11</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dataList.map((D) => {
//             return (
//               <tr>
//                 <td>{D._id}</td>
//                 <td>{D.AD_LEVEL}</td>
//                 <td>{D.TA_ID}</td>
//                 <td>{D.TAMBON_T}</td>
//                 <td>{D.TAMBON_E}</td>
//                 <td>{D.AM_ID}</td>
//                 <td>{D.AMPHOE_T}</td>
//                 <td>{D.AMPHOE_E}</td>
//                 <td>{D.CH_ID}</td>
//                 <td>{D.CHANGWAT_T}</td>
//                 <td>{D.CHANGWAT_E}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// }
