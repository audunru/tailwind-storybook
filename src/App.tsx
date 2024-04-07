import Button from "./components/Button";
import Card from "./components/Card";

import "./index.css";

const App: React.FC = () => (
  <main className="container mx-auto pt-10">
    <Card title="Hello">
      <Button>Click me</Button>
    </Card>
  </main>
);

export default App;
