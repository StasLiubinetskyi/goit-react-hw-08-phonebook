const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 28,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook is a convenient and user-friendly application designed to
        organize your personal phonebook.{' '}
      </h1>
    </div>
  );
}
