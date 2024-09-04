import React from 'react';

const Banner = () => {
  return (
    <section
      className="page__title-area page__title-height page__title-overlay d-flex align-items-center"
      style={{
        background: 'url(https://img.freepik.com/free-photo/written-task_1098-13625.jpg) center center / cover no-repeat'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper mt-110">
              <h3 className="page__title">Courses</h3>
              <nav aria-label="breadcrumb">
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
