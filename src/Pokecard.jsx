import { typeColors, typeEmojis } from "./pokemonTypes";
import { useState } from "react";

const MAX_HP = 170;
const MAX_ATTACK = 140;

const Pokecard = ({ pokemon }) => {
  const hpPercent = (pokemon.hp / MAX_HP) * 100;
  const attackPercent = (pokemon.attack / MAX_ATTACK) * 100;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontFamily: "Raleway",
        padding: 20,
        minWidth: 150,
        minHeight: 200,
        border: "3px solid #000000",
        borderRadius: 5,
        backgroundColor: typeColors[pokemon.type],
        filter: isHovered ? "brightness(1.35)" : "brightness(1)",
        transition: "filter 0.1s",
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        style={{
          minWidth: 150,
        }}
      />
      <p
        style={{
          fontSize: 22,
          fontWeight: "bold",
          margin: 0,
          color: "#000000",
        }}
      >
        {pokemon.name}
      </p>
      <p>
        Type: {typeEmojis[pokemon.type]} {pokemon.type}
      </p>
      <p>HP: {pokemon.hp}</p>
      <div
        style={{
          width: "100%",
          height: 8,
          backgroundColor: "#ddd",
          borderRadius: 4,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#000000",
        }}
      >
        <div
          style={{
            width: `${hpPercent}%`,
            height: "100%",
            backgroundColor: "#000000",
            borderRadius: 1,
          }}
        />
      </div>
      <p>Attack: {pokemon.attack}</p>
      <div
        style={{
          width: "100%",
          height: 8,
          backgroundColor: "#ddd",
          borderRadius: 4,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#000000",
        }}
      >
        <div
          style={{
            width: `${attackPercent}%`,
            height: "100%",
            backgroundColor: "#000000",
            borderRadius: 1,
          }}
        />
      </div>
    </div>
  );
};

export default Pokecard;
