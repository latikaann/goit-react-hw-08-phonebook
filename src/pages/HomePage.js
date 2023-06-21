const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundImage:
      'url(https://assets.materialup.com/uploads/641e0e0f-eddf-4d2c-b0ee-c6f55300bb1b/preview.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  title: {
    marginTop: '20px',
    fontWeight: 600,
    fontSize: 48,
    textAlign: 'center',
    color: 'white',
    cursor: 'default',
    font: 'italic 700 40px Georgia,Serif',
    textShadow: '-4px 3px 0 #3a50d9',
    textStroke: '5px #000000',
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Phonebook!</h1>
    </div>
  );
}
