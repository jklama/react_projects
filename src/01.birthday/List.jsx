import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id}>
            <h2>{name}</h2>
            <p>{age}</p>
            <img src={image} alt={name} />
            <hr />
          </article>
        );
      })}
    </>
  );
};

export default List;
