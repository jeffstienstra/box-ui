import './App.css';

function App() {
  return (
    <div className="App">
      <div className="parent">
    <p>parent</p>
        <div className='blue-parent'>
          <p>blu-parent</p>
          <div className="blue-left">
            <div className="header">
              <p>header</p>
            </div>
            <div className="body">
              <p>body</p>
            </div>
            <div className="footer">
              <p>footer</p>
            </div>
          </div>

          <div className="blue-right">
            <div className="top">
                <p>top</p>
              <div className="top-left">
                <p>top-left</p>
              </div>
              <div className="top-right">
                <p>top-right</p>
              </div>
            </div>

            <div className="bottom">
              <p>btm</p>

              <div className="bottom-left">
                <p>btm-left</p>
                <div className="list-block yellow">
                  <p>list-block yellow</p>
                </div>
                <div className="list-block rotated white">
                  <p>list-block rotated white</p>
                </div>
                <div className="list-block block-footer black">
                <p>list-block block-footer black</p>

                </div>
              </div>

              <div className="bottom-right">
                <p>bottom-right</p>
              </div>

            </div>

          </div>

        </div>

        <div className='green-parent'>
          <p>grn-parent</p>
          <div className="green-left">
            <p>green-left</p>
          </div>
          <div className="green-right">
            <p>green-right</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
