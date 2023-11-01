import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
// Import Images
import bnrImg1 from '../../images/banner/img1.jpg'
import waveBlue from '../../images/shap/wave-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import plusBlue from '../../images/shap/plus-blue.png'
import pdf from '../../images/icon/pdf.png'
import pdffile from '../../pdfs/price.pdf'
import pp from '../../images/team/pp.png'

//
const content = [
  {
    thumb: pp,
    title: 'Dr. Nabatxanım Xəlilova   ',
    subtitle: ' ',
  },
]

class ServiceDetail extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: 'url(' + bnrImg1 + ')' }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Akupunktura </h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{' '}
                          Ana səhifə
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Akupunktura 
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>

          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mb-30">
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">Akupunktura </h2>
                      <p className="mb-0">
                      Akupunktura – alternativ müalicə metodu olub, refleksoterapiyanın bir növüdür. Tarixi çox qədimdir. Əsası Şərqdə qoyulsa da, hazırda dünyanın bütün ölkələrində tətbiq olunur. Akupunktura dedikdə, bədəndəki bioloji aktiv nöqtələrə iynə batırmaqla müalicəvi effekt almaq başa düşülür. Bu bioloji nöqtələr xaotik olmayıb, meridianlar boyunca yerləşir və orqanizmin Çi enerjisi bu meridianlar boyunca hərəkət edir. 12 qoşa və 2 tək meridian mövcuddur və hər bir orqanının öz meridianı var. Məsələn, ürək meridianı əlin beşinci barmağından keçir, ağciyər meridianı isə baş barmaqdan keçirş Meridianlar arasında əlaqə var. Şərq fəlsəfəsində İn-Yan nəzəriyyəsinə görə, orqanizmdə İn-Yan tərəflər balansda, tarazlıqda olarkən insan sağlamdır. Əgər bu tarazlıq pozularsa, xəstəlik yaranır.
                      </p>
                      <br /> <br />
                      <h5>
                        {' '}
                        Hansı xəstəliklərdə quru iynə terapiyası tətbiq olunur?
                      </h5>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                          Trigger nöqtə xəstəliyi (miofassiyal ağrı sindromu)</li>
                       <li>Fibromiyalgiya</li>
                       <li>Bel və boyun kirəclənməsi ilə bağlı ağrılar</li>
                       <li>Bel və boyun yırtıqları</li>
                       <li>Tendinit, xroniki tennisçı dirsək</li>
                       <li> Ağrılı çiyin</li>
                        
                        </ul>
                      </div>

                    
                    </div>
                  </div>
      
                </div>
                <div className="col-lg-4">
                  <aside className="sticky-top pb-1">
                    <div className="widget">
                      {/* <ul className="service-menu">
                        <li>
                          <Link>
                            <span> Papillomalar</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Sadə herpes (herpes simplex)</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Sadə herpes (herpes simplex) </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Kəmərləyici herpes (herpes zoster)</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Kandilomalar </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Atopik dermatit</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Kvinke ödemi</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span> Məxmərək</span>
                          </Link>
                        </li>{' '}
                        <li>
                          <Link>
                            <span> Kontakt dermatitləri</span>
                          </Link>
                        </li>{' '}
                        <li>
                          <Link>
                            <span> Ekzema</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span> Neyrodermatit </span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Stafilakokk piodermitləri</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Qoturluq</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Mikozlar</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Psoriaz</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Vitiliqo</span>
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                    <div className="widget">
                      <div className="brochure-bx">
                        <h5 className="title-head">
                          Qiymətlərimizlə tanış olmaq üçün{' '}
                        </h5>

                        <a
                          href={pdffile}
                          download="dimed.pdf"
                          className="download-link"
                        >
                          <img src={pdf} alt="" />
                          <h5 className="title">Qiymət cədvəlini yükləyin </h5>
                          <span>Yüklə</span>
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default ServiceDetail
