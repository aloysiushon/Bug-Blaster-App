import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import "./styles.css";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  // console.log(state);
  //It returns tickets object inserted in the TicketForm

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />

        {/* this && operator is refer to then - if have ticket the render h2 */}
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>

            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>

            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
