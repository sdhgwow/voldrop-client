import React, { useState } from 'react';
import './App.css';
import Header from './elements/header';
import Slider from './elements/slider';
import Vacancies from './maincontent';
import { ApplicationForm } from './elements/footer+form'
import { Footer } from './elements/footer+form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Com from './pages/vacancies/com';
import Jun3D from './pages/vacancies/jun3d';
import JunBack from './pages/vacancies/junback';
import JunFront from './pages/vacancies/junfront';
import JunGraph from './pages/vacancies/jungraph';
import JunQA from './pages/vacancies/junqa';
import JunRender from './pages/vacancies/junrender';
import JunUI from './pages/vacancies/junui';
import Lead3D from './pages/vacancies/lead3d';
import LeadCom from './pages/vacancies/leadcom';
import LeadGraph from './pages/vacancies/leadgraph';
import LeadQA from './pages/vacancies/leadqa';
import LeadRender from './pages/vacancies/leadrender';
import LeadUI from './pages/vacancies/leadui';
import LeadWeb from './pages/vacancies/leadweb';
import Mid3D from './pages/vacancies/mid3d';
import MidBack from './pages/vacancies/midback';
import MidFront from './pages/vacancies/midfront';
import MidGraph from './pages/vacancies/midgraph';
import MidQA from './pages/vacancies/midqa';
import MidRender from './pages/vacancies/midrender';
import MidUI from './pages/vacancies/midui';
import Sen3D from './pages/vacancies/sen3d';
import SenBack from './pages/vacancies/senback';
import SenFront from './pages/vacancies/senfront';
import SenGraph from './pages/vacancies/sengraph';
import SenQA from './pages/vacancies/senqa';
import SenRender from './pages/vacancies/senrender';
import SenUI from './pages/vacancies/senui';

const App = () => {

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header toggleOverlay={toggleOverlay} />
        <Routes>
          <Route path="/" element={
          <div className='app'>
          <div className="slider-container">
            <Slider />
          </div>
          <p class="slider-text">Работа с нами — это незабываемый опыт работы в команде профессионалов в своем деле</p>
          <Vacancies />
          <ApplicationForm />
          <Footer />
          </div>
          } />
          <Route path="/Com-man" element={<Com />} />
          <Route path="/Lead-web-dev" element={<LeadWeb />} />
          <Route path="/Lead-render-dev" element={<LeadRender />} />
          <Route path="/Lead-qa-engineer" element={<LeadQA />} />
          <Route path="/Lead-graph-des" element={<LeadGraph />} />
          <Route path="/Lead-ui-des" element={<LeadUI />} />
          <Route path="/Lead-3d-art" element={<Lead3D />} />
          <Route path="/Lead-com-man" element={<LeadCom />} />
          <Route path="/Senior-3d-art" element={<Sen3D />} />
          <Route path="/Senior-backend-dev" element={<SenBack />} />
          <Route path="/Senior-frontend-dev" element={<SenFront />} />
          <Route path="/Senior-graph-des" element={<SenGraph />} />
          <Route path="/Senior-qa-engineer" element={<SenQA />} />
          <Route path="/Senior-render-dev" element={<SenRender />} />
          <Route path="/Senior-ui-des" element={<SenUI />} />
          <Route path="/Middle-3d-art" element={<Mid3D />} />
          <Route path="/Middle-backend-dev" element={<MidBack />} />
          <Route path="/Middle-frontend-dev" element={<MidFront />} />
          <Route path="/Middle-graph-dis" element={<MidGraph />} />
          <Route path="/Middle-qa-engineer" element={<MidQA />} />
          <Route path="/Middle-render-dev" element={<MidRender />} />
          <Route path="/Middle-ui-des" element={<MidUI />} />
          <Route path="/Junior-3d-art" element={<Jun3D />} />
          <Route path="/Junior-backend-dev" element={<JunBack />} />
          <Route path="/Junior-frontend-dev" element={<JunFront />} />
          <Route path="/Junior-graph-des" element={<JunGraph />} />
          <Route path="/Junior-qa-engineer" element={<JunQA />} />
          <Route path="/Junior-render-dev" element={<JunRender />} />
          <Route path="/Junior-ui-des" element={<JunUI />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
