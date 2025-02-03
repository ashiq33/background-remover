import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Snowfall from './components/Snowfall';
import Pricing from './components/Pricing';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

const App = () => {
  const { t } = useTranslation();
  const [resultImage, setResultImage] = useState(null);
  const API_KEY = '4r6QSV9zRRvaQMw3JGSE4YMb';

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image_file', file);

    try {
      const response = await axios.post(
        'https://api.remove.bg/v1.0/removebg',
        formData,
        {
          headers: { 'X-Api-Key': API_KEY },
          responseType: 'blob',
        }
      );
      setResultImage(URL.createObjectURL(response.data));
    } catch (error) {
      console.error('Error removing background:', error);
    }
  };

  const handleDownload = () => {
    if (resultImage) {
      const link = document.createElement('a');
      link.href = resultImage;
      link.download = 'background-removed.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="app">
      <Snowfall />
      <nav className="top-nav">
        <LanguageToggle />
        <button className="create-account">{t('createAccount')}</button>
      </nav>
      
      <div className="main-container">
        <div className="content-box">
          <h1>{t('title')}</h1>
          <p className="description">{t('description')}</p>

          <div className="upload-section">
            <label htmlFor="file-upload" className="upload-button">
              {t('upload')}
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
                hidden
              />
            </label>
          </div>

          {resultImage && (
            <div className="result-section">
              <img src={resultImage} alt="Result" className="result-image" />
              <button onClick={handleDownload} className="download-button">
                {t('download')}
              </button>
            </div>
          )}
        </div>

        <Pricing />
      </div>

      <footer className="slim-footer">
        <p>© 2025 Developed by Ashiq</p>
      </footer>
    </div>
  );
};

export default App;