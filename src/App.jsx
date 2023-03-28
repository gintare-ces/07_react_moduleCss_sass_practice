import './styles/reset.css';
import './styles/App.css';
import Button from "./components/ui/button/Button";
import Card from './components/ui/card/Card';
import Grid from './components/ui/grid/Grid';

function App() {
  return (
    <div>
      <Card>
        <h1>New project</h1>
      </Card>
      <Grid>
      <Button>Click me now!!!</Button>
      <Button lg>Large btn!!!</Button>
      {/* sitas button gauna tik Button skirta css */}
      <button className="btn blue green">Subscribe</button>
      </Grid>
    </div>
  );
}
export default App