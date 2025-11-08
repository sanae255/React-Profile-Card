function Card({ name, img, lien, description, post }) {
  return (
    <div id="card">
      <img src={img} alt="profile" />
      <h1>{name}</h1>
      <p>{post}</p>
      <div id="discription">{description}</div>
      <button><a href={lien}/>CONTAC ME</button>
    </div>
  );
}

export default Card;
