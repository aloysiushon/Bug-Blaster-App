import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import "./styles.css";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";

function App() {
  const initialState = { tickets: [], editingTicket: null };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  // console.log(state);
  //It returns tickets object inserted in the TicketForm

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />

        {/* this && operator is refer to then - if have ticket the render h2 */}
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
