
import './MainImage.css';

const MainImage = () => {
  return (
    <section className="main-image-section">
      <div className="image-wrapper">
        <img src="/src/assets/MainImage.png" alt="Main visual" className="main-image" />
      </div>
      <div className='main-info'>
      <h1 className="main-title">CyberWhiteArch</h1>
      <p className='text-main'>Join a community of experts, explore cutting-edge tools, 
        and master the art of ethical hacking</p>
        </div>    
        <button className='main-button'>
          <p className='button-main-text'>START YOUR HACKING JOURNEY</p>
        </button>
    </section>
  );
};

export default MainImage;

  
