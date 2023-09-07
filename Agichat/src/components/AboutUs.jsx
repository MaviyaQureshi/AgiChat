import "./CSS/AboutUs.css"
import Header from './Header';

const AboutUs = () => {
  return (
    <>


      <Header />
      <div className="container_left">
        <div><img src="Dummy\src\components\images\Kashik.jpg" /></div>
        <div className="inner_left">
          <p style={{ fontSize: 2.4 + 'rem', fontWeight: 'bolder' }}>kashik Sredharan</p>
          <hr></hr>
          {/* <p><img className="social" src="./images/linkedin-1-svgrepo-com.svg" />https://www.linkedin.com/in/kashik-sredharan-895779233</p>
          <p><img className="social" src="./images/github-color-svgrepo-com.svg" />https://github.com/lashik</p>
          <p><img className="social" src="./images/email-download-svgrepo-com.svg" /> kashik.sredharan@gmail.com</p> */}
        </div>
      </div>

      <div className="container_right">
        <div className="inner_right">
          <p style={{ fontSize: 2.4 + 'rem', fontWeight: 'bolder' }}>Maviya Qureshi</p>
          <hr style={{ margin: '0 0 0 auto' }}></hr>
          {/* <p>https://www.linkedin.com/in/maviya-qureshi-b8252a252/<img className="social" src="./images/linkedin-1-svgrepo-com.svg" /></p>
          <p>https://github.com/MaviyaQureshi<img className="social" src="./images/github-color-svgrepo-com.svg" /></p>
          <p> maviyaqureshi2003@gmail.com<img className="social" src="./images/email-download-svgrepo-com.svg" /></p> */}
          <div><img src="Dummy\src\components\images\Maviya.jpg" /></div>
        </div>
      </div>

      <div className="container_left">
        <div><img src="Dummy\src\components\images\Anmol.jpg" /></div>
        <div className="inner_left">
          <p style={{ fontSize: 2.4 + 'rem', fontWeight: 'bolder' }}>Anmol Preet Singh</p>
          <hr></hr>
          {/* <p><img className="social" src="./images/linkedin-1-svgrepo-com.svg" />https://www.linkedin.com/in/anmol-preet-singh-b17058249/</p>
          <p><img className="social" src="./images/github-color-svgrepo-com.svg" />https://github.com/Anmol_173</p>
          <p><img className="social" src="./images/email-download-svgrepo-com.svg" /> anmolsingh173yt@gmail.com</p> */}
        </div>
      </div>

      <div className="container_right">
        <div className="inner_right">
          <p style={{ fontSize: 2.4 + 'rem', fontWeight: 'bolder' }}>Radha Tumbre</p>
          <hr style={{ margin: '0 0 0 auto' }}></hr>
          {/* <p>www.linkedin.com/in/radha-tumbre-b69179221<img className="social" src="./images/linkedin-1-svgrepo-com.svg" /></p>
          <p>https://github.com/radhatumbre<img className="social" src="./images/github-color-svgrepo-com.svg" /></p>
          <p>radhatumbre@gmai.com <img className="social" src="./images/email-download-svgrepo-com.svg" /></p> */}
        </div>
        <div><img src="C:\Users\maviy\OneDrive\Desktop\Dummy\Dummy\src\components\images\Radha.jpg" /></div>
      </div>



    </>
  )
}

export default AboutUs;