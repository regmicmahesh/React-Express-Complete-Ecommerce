import React from "react";
const FeaturedItems: React.FC = () => {
  return (
    <section id="featured-item" className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <h3>Featured Items</h3>
          </div>
          <div className="mt-2">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://lh3.googleusercontent.com/proxy/zf_Ue9jEgKrdE_sXiuxTxmazYeIu0QcU8dbG6CcVkZ2xFh5-pDBfpIkRXXJjinsRjs59A_GcdLselnuEC_JVogzBP0K3eyJ9reZQwCL3Yy43405QaSZHOs9t5YvVUD-2tYCOdu8ON1nM"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4>T-Shirt</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores earum possimus debitis illo blanditiis
                      voluptatum.
                    </p>
                    <h4 className="text-warning">Rs. 300</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://www.beatnikshoes.com/wp-content/uploads/2019/05/2019_05_16_0276-2-300x300.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4>T-Shirt</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores earum possimus debitis illo blanditiis
                      voluptatum.
                    </p>

                    <h4 className="text-warning">Rs. 300</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://gajabko.com/wp-content/uploads/2019/11/Royal-Blue-300x300.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h4>T-Shirt</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores earum possimus debitis illo blanditiis
                      voluptatum.
                    </p>
                    <h4 className="text-warning">Rs. 300</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FeaturedItems;