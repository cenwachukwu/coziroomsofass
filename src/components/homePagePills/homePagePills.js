import React from 'react';
import './homePagePills.scss';
import Pills from '../pills/pills';
import chair from '../../utils/carrouselImg/chair.jpg';
import loveseat from '../../utils/carrouselImg/loveseat.jpg';
import recliner from '../../utils/carrouselImg/recliner.jpg';
import sectional from '../../utils/carrouselImg/sectional.jpg';
import sofa from '../../utils/carrouselImg/sofa.jpg';

const PillBox = () => {
  return (
    <div className="PillBox">
      <div className="boxPills">
        <Pills props={sofa} categoryName={'Sofa & Loveseat'} link={'/SofaandLoveseat'} />
        <Pills props={loveseat} categoryName={'Accent chair'} link={'/AccentChair'} />
        <Pills props={chair} categoryName={'Chair'} link={'/Chair'} />
        <Pills props={recliner} categoryName={'Recliners'} link={'/Recliner'} />
        <Pills props={sectional} categoryName={'Sectionals'} link={'/Sectionals'} />
      </div>
    </div>
  );
};

export default PillBox;
