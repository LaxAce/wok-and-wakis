const WindsAndTenders = ({ foodItems, handleClickItem }) => {
  return (
    <div className="popular-items sub-section">
      <header>
        <h2 className="section-heading">Wings &#38; Tenders</h2>
        <p className="fade-para">Comes with fries</p>
      </header>
      <div className="items-container">
        <ul className="item-list">
          {foodItems.map((item) => {
            const { id, name, description, image, cost, category } = item;
            const snippet = description && description.substring(0, 70);

            if (category == "Wings & Tenders") {
              return (
                <li key={id} onClick={() => handleClickItem(id)}>
                  <div className="card-body">
                    <div className="top">
                      <h3>{name}</h3>
                      <p className="snippet">
                        {snippet?.length == 70 ? `${snippet}...` : snippet}
                      </p>
                    </div>
                    <p className="cost">${cost}</p>
                  </div>
                  <div className="card-img">
                    <img src={image} alt={name} />
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default WindsAndTenders;
