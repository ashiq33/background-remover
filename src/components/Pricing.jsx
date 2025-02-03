import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Pricing = () => {
  const { t } = useTranslation();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  };

  const plans = [
    { price: t('monthly'), duration: t('1month') },
    { price: t('halfYearly'), duration: t('6months') },
    { price: t('yearly'), duration: t('1year') }
  ];

  return (
    <div className="pricing-section">
      <h2>{t('pricing')}</h2>
      <Slider {...settings}>
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <div className="card-content">
              <h3>{plan.price}</h3>
              <p>{plan.duration}</p>
              <button className="buy-now">{t('buyNow')}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Pricing;