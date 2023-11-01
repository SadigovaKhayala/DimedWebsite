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
import teamMember1 from '../../images/team/nergizx.png'

//
const content = [
  {
    thumb: teamMember1,
    title: 'Dr. Nərgiz Haşımzadə ',
    subtitle: 'Tibb üzrə fəlsəfə doktoru - Psixoloq',
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
                  <h1>Psixologiya </h1>
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
                        Psixologiya 
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
                      <h2 className="title mb-15">Psixologiya </h2>
                      <p className="mb-0">
                      Psixoloq kimdir? Psixoloq - psixologiya üzrə mütəxəssisdir. Ümumi mənada, bu, psixoloji problemləri həll etmək üçün şəxsi məsləhətləşmələr və ya qrup seansları vasitəsilə müştərilərə kömək edən peşəkardır. Psixoloqlara ehtiyac duyulan sahələrin çoxluğuna görə mütəxəssisləri ixtisaslara görə bölmək olar: Klinik psixoloq - Tibb və psixologiyanın kəsişməsində işləyən mütəxəssis. Psixi hadisələri onların xəstəliklərlə əlaqəsi baxımından araşdırır. Psixoloq - məsləhətçi -İnsanlar bir mütəxəssisə müxtəlif psixoloji problemlərlə, məsələn, stress, özünəinamın aşağı olması, komplekslər ilə müraciət edirlər. Korporativ psixoloq - O, həm menecerlərə, həm də sıravi işçilərə münaqişələri həll etməyə, ünsiyyəti yaxşılaşdırmağa, stressi azaltmağa və iş proseslərini yaxşılaşdırmağa kömək edir. Uşaq/məktəb psixoloqu -Yetkinlik yaşına çatmayan xəstələrlə işləmək. Valideynlərin boşanması və ya zorakılıq kimi stresli vəziyyətlərin öhdəsindən gəlməyə kömək edir. Ailə psixoloqu - Fərdi şəxslər də daxil olmaqla cütlərlə işləyir. Çox vaxt boşanmaların qarşısını almaq üçün bir mütəxəssisə müraciət olunur. Məhkəmə psixoloqu - O, dindirmə, üzləşdirmə, şəxsiyyəti müəyyənləşdirmə kimi istintaq və məhkəmə hərəkətlərinin taktikasının psixoloji əsaslarını öyrənir. Məqsədi həqiqətin bərqərar olmasına kömək etməkdir.
                      </p>
                      <br /> <br />
                      <h5>Psixoloq , psixoterapevt və psixiatr: fərq nədi?</h5>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-8 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                          Psixoloq - Çox vaxt bu, tibbi təhsili olmayan bir mütəxəssisdir. Çətin vəziyyətdən çıxış yolu tapmağa, problemlərə müxtəlif rakurslardan baxmağa kömək edir. Müştəri ilə işləmək üçün əsas vasitələrdən biri söhbətdir.
                          </li>
                          <li>Psixoterapevt - Psixologiya və psixiatriyanın kəsişməsində işləyir, maniya, yüngül və orta dərəcəli depressiya, aqressiya partlayışlarını müalicə edir. Psixoterapevt dərman təyin etmir və xəstəxanaya göndərə bilməz.</li>
                          <li>Psixiatr - Müxtəlif asılılıqları (məsələn, alkoqolizm), şizofreniya, ağır depressiya, hallüsinasiyaları aradan qaldırmağa kömək edir. Dərman təyin edə bilər, xəstəxanaya yerləşdirməyə qərar verə bilər, o cümlədən xəstənin razılığı olmadan</li>
               
                          
                        </ul>
                      </div>
                      <>
                        <h2>Həkimlərimiz</h2> <br />
                        {content.map((item) => (
                          <div className="col-lg-5 col-sm-6">
                            <div className="team-member mb-30">
                              <div className="team-media">
                                <img src={item.thumb} alt="" />
                              </div>
                              <div className="team-info">
                                <div className="team-info-comntent">
                                  <h4 className="title">{item.title}</h4>
                                  <span className="text-secondary">
                                    {item.subtitle}
                                  </span>
                                </div>
                                <ul className="social-media">
                                  <li>
                                    <a
                                      rel="noreferrer"
                                      target="_blank"
                                      href="https://twitter.com/"
                                    >
                                      <i className="fab fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noreferrer"
                                      target="_blank"
                                      href="https://www.linkedin.com/"
                                    >
                                      <i className="fab fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      rel="noreferrer"
                                      target="_blank"
                                      href="https://www.instagram.com/"
                                    >
                                      <i className="fab fa-instagram"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Tez-tez verilən suallar </h4>
                    </div>
                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                       Antidepressant dərmanlar asılılıq əmələ gətirirmi?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                          Xeyr, antidepressant dərmanlar asılılıq əmələ gətirməz. Bu mövzu ilə bağlı saytımızın bir yazısında geniş yer ayırmışıq. Həmin paylaşımı bu keçidə daxil olaraq oxuya bilərsiniz: Antidepressant dərmanlar asılılıq əmələ gətirməz
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                        Psixiatr dəliləri, nevropatoloqlar isə nevrozları müalicə edir." - Bu fikir doğrudurmu?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                          Psixiatr bütün növ psixiatrik xəstəlikləri müalicə edir. Bu xəstəliklərin siyahısı səhifənin giriş hissəsində verilmişdir. Eyni zamanda bu xəstəliklərə nevroz adı altında olan bütün xəstəliklər aiddir. Xatırladaq ki, nevroz psixi problemdir.


                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                        Bipolyar affektiv pozuntu nədir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                          Bipolyar affektiv pozuntu daha çox yeniyetməlik və gənc yaşlarda özünü büruzə verir. Dünya Səhiyyə Təşkilatının verdiyi məlumata görə hər 100 nəfərdən 5-9 nəfəri bu xəstəlikdən əziyyət çəkir.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                
                <div className="col-lg-4">

                  
                  <aside className="sticky-top pb-1">
                    <div className="widget">
                      {/* <ul className="service-menu">
                        <li>
                          <Link>
                            <span>Hava vannaları</span>
                          </Link>
                        </li>

                        <li>
                          <Link>
                            <span>Su ilə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Mineral sularla müalicə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Isti və ya soyuqla müaicəə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Elektriklə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>Elektromaqnitlə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>Mexaniki təsirlərlə müalicə</span>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <span>Massaj</span>
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link>
                            <span>üalicə bədən tərbiyəsi</span>
                          </Link>{' '}
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
