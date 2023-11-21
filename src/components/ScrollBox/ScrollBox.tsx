import React from 'react';

const ScrollBox: React.FC = () => {
  const flag = 'https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/3131/5205/russiaflag__64883.1614611428.jpg?c=2';
  return (
    <>
      <div className="d-flex w-50 gap-3 p-2 mt-5 ms-3 me-3 border border-primary-subtle border-4 rounded-3">
        <div className="overflow-scroll overflow-x-hidden p-3"
             style={{maxWidth: '450px', maxHeight: '60vh' }}>
          <ol className="m-0 p-0" style={{width: '350px', listStyle: 'none', }}>
            <li><a href="">Argentina</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>
            <li><a href="">Argentina</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>
            <li><a href="">Argentina</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>
            <li><a href="">Russia</a></li>
            <li><a href="">Canada</a></li>
            <li><a href="">Italy</a></li>
            <li><a href="">Mongolia</a></li>
            <li><a href="">China</a></li>
          </ol>
        </div>
        <div>
          <div className="mt-4 ms-4">
           <div className="d-flex gap-5 mb-5">
             <div className="d-flex flex-column">
               <h2 className="mb-3">Russia</h2>
               <div><b>Capital</b>: Moscow</div>
               <div><b>Population</b>: 7,7 mln</div>
             </div>
             <div>
               <img src={flag} alt="Russia flag" style={{maxWidth: '150px', maxHeight: '100px'}} />
             </div>
           </div>
            <div>
              <b>Borders with: </b>
              <ul>
                <li>Ukraine</li>
                <li>Belarussia</li>
                <li>Kazakhstan</li>
                <li>Mongolia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollBox;