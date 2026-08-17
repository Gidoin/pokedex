const Pokecard = ({ data }) => {
  return (
    <div style={{ position: "relative", width: 300, height: 120 }}>
      {data.map((d, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            left: d.x,
            top: d.y,
            width: 16,
            height: 16,
            borderRadius: 5,
            backgroundColor: "dodgerblue",
          }}
        />
      ))}
    </div>
  );
};

export default Pokecard;
