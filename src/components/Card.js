const Card = ({ image, selected, onClickk }) => {


  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img alt="" src={image} className="card-face" />

        <img
          alt=""
          className="card-back"
          src={'/assets/logo.png'}
          onClick={onClickk}
        />
      </div>
    </div>
  );
};

export default Card;