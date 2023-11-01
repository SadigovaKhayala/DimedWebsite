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
                  <h1>Terapevt </h1>
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
                        Terapevt 
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
                      <h2 className="title mb-15">Terapevt </h2>
                      <p className="mb-0">
                      Əgər səhhətinizdə hər hansı problem əmələ gəlibsə, ilk növbədə həkim-terapevtə müraciət edilir. Belə ki, terapevtin qəbulu bir çox məsələni aydınlaşdırmağa kömək edir.
Həkim-terapevt öz ixtisası üzrə olan xəstəlikləri müalicə edir, eyni zamanda, müalicə zamanı effektli nəticə əldə etmək üçün xəstədən müxtəlif ixtisaslı həkimlərin laborator və instrumental müayinələrindən keçməsini tələb edir.
                      </p>
                      <br /> <br />
                      <h5>
                        {' '}
                        Terapiya müxtəlif sahələrə bölünür:
                      </h5>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>
                          Ürək-damar xəstəlikləri (revmatizm, hipertoniya xəstəliyi, aritmiyalar, ürək çatışmazlığı və s.)
                          </li>
                          <li>Tənəffüs orqanları xəstəlikləri (qrip, traxeit, bronxit, pnevmoniya, bronxial astma, ağ ciyərlərin xroniki obstruktiv xəstəlikləri və s.)</li>
                          <li>
                          Mədə-bağırsaq sistemi xəstəlikləri (qastrit, mədə və onikibarmaq bağırsağın xora xəstəliyi, kolit və s.)
                          </li>
                          <li>
                          Revmatik xəstəliklər (birləşdirici toxumanın sistem xəstəlikləri, artroz, artrit və s.)
                          </li>
                           <li>İfrazat sistemi xəstəlikləri (qlomerulonefrit, börəklərin digər autoimmun patologiyalar nəticəsində zədələnmələri və s.)</li>
                           <li>Endokrinoloji xəstəliklər (şəkərli diabet, tireoid xəstəlikləri) və s.
</li>
                        </ul>
                      </div>

                      <>
                        <h2>Həkimlərimiz</h2> <br />
                        {content.map((item) => (
                          <div className="col-lg-5 col-sm-6 mt-4">
                            <div className="team-member mb-30 me-3">
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
                        Terapevtə nə vaxt müraciət olunur?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                          Əgər səhhətinizlə əlaqədar hər hansı bir şikayət əmələ gəlibsə,
hansı mütəxəssisə müraciət etməli olduğunuza əmin deyilsinizsə,
müstəqil analiz vermisinizsə və nəticələri şəhr etmək lazımdırsa,
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                        Terapevtin qəbulunda nə baş verir?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                          Terapevt pasientin müraciət etməli olduğu ilk həkimdir. O, pasientin şikayətlərini dinləyir,

<li>anamnez toplamalı (xəstəliyin tarixi, pasientin həyat tərzi, irsiyyəti, kecirdiyi xəstəliklər, allergik reaksiyaların olması) yani məlumat toplamalıdır.</li>
<li>Baxış keçirir (pasientin halını qiymətləndirir, dəri örtükləri və selikli qişalarını nəzərdən keçirir, nəbz və arterial təzyiqi ölçür, ürəyə və ağ ciyərlərə qulaq asır, qarını əlləyir)</li>
<li>Lazım gəldikdə əlavə müayinələr (laborator, rentgenoloji, sonoqrafik, endoskopik, elektrofizioloji və s ) təyin edir</li>
<li>Nəticədə diaqnozu müəyyənləşdirərək müalicə təyin edir və lazımi tibbi sənədləşmə aparır.</li>


                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Aknenin simptomları nələrdir ?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Akne zamanı üz, sinə və kürəkdə müxtəlif morfoloji
                            elementlər yaranır. Sızanaqların kökündə iltihabi
                            proses olur. Nəticədə yumşaq toxumalar əriyir və
                            irinli ifrazat yaranır. Pustulalar açılır, irinli
                            ifrazat bayıra çıxır və üzəri qartmaqla örtülür.
                            Sızanaqlar epidermis qatında olduqda yerində piqment
                            ləkəsi, derma qatında olduqda isə çapıq əmələ gəlir.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Mezoterapiya nədir ?
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="mb-0">
                            Mezoterapiya – dəri içinə və dərialtına müxtəlif
                            preparatların və kokteyllərin yeridilməsinə
                            əsaslanan müalicə üsuludur. Mezoterapiya dərinin
                            cavanlaşdırılması və sellülitin müalicəsi
                            istiqamətində ən effektiv üsullardandı. Bu müalicə
                            metodunun əsasını hüceyrələrə birbaşa təsir
                            mexanizmi təşkil edir. Buna preparatların və
                            kokteyllərin birbaşa müvafiq nahiyəyə inyeksion
                            üsulla yeritməklə nail olurlar. Bu zaman lazımi
                            qidalı maddələr, mikroelementlər, vitaminlər və
                            dərman preparatları dərhal istədiyimiz yerə çatır.
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
