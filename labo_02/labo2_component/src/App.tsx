interface HeaderProps { title: string, subtitle: string }
interface ListProps { items: string[] }
interface FooterProps { copy: string, year: number }
interface ListItemProps { text: string }

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item: string) => <ListItem text={item} />)}
    </ul>
  );
}
const ListItem = ({ text }: ListItemProps) => {
  return (
    <li>{text}</li>
  );
}

const Footer = ({ copy, year }: FooterProps) => {
  return (
    <footer>
      <p>{copy}  ({year})</p>
    </footer>
  );
}

const App = () => {
  return (
    <>
      <Header title="Labo 2" subtitle="Basic components" />
      <List items={['item 1', 'item 2', 'item 3']} />
      <Footer copy="&copy; NoaBrecht" year={2024} />
    </>
  );
};

export default App;