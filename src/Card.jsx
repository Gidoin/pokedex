const Card = ({ color }) => {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        backgroundColor: color,
        borderRadius: 4,
        margin: 4,
      }}
    />
  );
};

export default Card;
